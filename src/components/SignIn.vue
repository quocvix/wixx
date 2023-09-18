<template>
    <div class="h-screen">
        <div class="container mx-auto px-4 py-4 flex justify-center">
            <div class="form">
                <form class="py-8" @submit.prevent="login">
                    <div class="flex justify-center items-center">
                        <p class="text-5xl font-medium items-center">Đăng nhập</p>
                    </div>
                    <div class="flex justify-center items-center py-4">
                        <p>Mới truy cập trang web này? <a class="text-blue-500" href="/signup">Đăng ký</a></p>
                    </div>
                    <div class="mb-6">
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Email</label>
                        <input
                            v-model="state.email"
                            @blur="v$.email.$touch"
                            :class="{ errorinput: v$.email.$error }"
                            type="email"
                            id="email"
                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Email"
                        />
                        <div v-if="v$.email.$error">
                            <p class="mt-2 text-sm text-red-600 dark:text-red-500">Vui lòng nhập email</p>
                        </div>
                    </div>
                    <div class="mb-6">
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Password</label>
                        <input
                            v-model="state.password.password"
                            @blur="v$.password.$touch"
                            :class="{ errorinput: v$.password.password.$error }"
                            type="password"
                            id="password"
                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        />
                        <div v-if="v$.password.password.$error">
                            <p class="mt-2 text-sm text-red-600 dark:text-red-500">
                                {{ v$.password.password.$errors[0].$message }}
                            </p>
                        </div>
                    </div>
                    <div>Quên mật khẩu?</div>
                    <div class="py-6">
                        <button
                            class="border w-full px-8 py-2 text-lg text-white font-light bg-slate-900 hover:bg-slate-900 hover:text-white border-[#78343b] transition duration-500"
                        >
                            Đăng nhập
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, computed } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, email, sameAs, minLength, maxLength, helpers } from "@vuelidate/validators";
import axios from "axios";

export default {
    name: "login",
    setup() {
        const state = reactive({
            email: "",
            password: {
                password: "",
            },
        });

        const rules = computed(() => {
            return {
                email: { required, email },
                password: {
                    password: {
                        required: helpers.withMessage(`Vui lòng nhập password`, required),

                        minLength: helpers.withMessage(
                            ({ $params }) => `Tối thiếu ${$params.min} kí tự `,
                            minLength(4)
                        ),
                    },
                },
            };
        });

        // containPasswordRequirement: helpers.withMessage(() => 'yêu cầu chữ hoa, thường, số, kí tự đặt biệt', (value) => /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/.test(value.toString()))

        const v$ = useVuelidate(rules, state);

        return { state, v$ };
    },

    methods: {
        async login() {
            this.v$.$validate();
            if (!this.v$.$error) {
                console.log("valid");

                let results = await axios.get(
                    `http://localhost:3000/users?email=${this.state.email}&password.password=${this.state.password.password}`
                );

                if (results.status == 200 && results.data.length > 0) {
                    localStorage.setItem("user-info", JSON.stringify(results.data[0]));
                    this.$router.push("/"); // Chuyển về trang Home
                    this.$router.go(); // Reload trang Home một lần duy nhất
                }
                if (results.data == 0) {
                    alert("sai email hoặc mật khẩu");
                }
                console.log(results);
            } else {
                console.log("invalid");
            }
        },
    },

    // data() {
    //     return {
    //         email: "",
    //         password: "",
    //     };
    // },
    // methods: {
    //     async login() {
    //         let results = await axios.get(
    //             `http://localhost:3000/users?email=${this.state.email}&password=${this.state.password.password}`
    //         );

    //         if (results.status == 200 && results.data.length > 0) {
    //             localStorage.setItem("user-info", JSON.stringify(results.data[0]));
    //             this.$router.push("/");
    //         }
    //         console.log(results);
    //     },
    // },
};
</script>

<style scoped>
.errorinput {
    border: #dd2840 1px solid;
}
.form {
    margin: 20px;
    padding: 20px;
    background: #f1f1f1;
    width: 500px;
    border-radius: 8px;
    box-shadow: 0 2px 5px 0 rgba(51, 62, 73, 0.1);
}
</style>
