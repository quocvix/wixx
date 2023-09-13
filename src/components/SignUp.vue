<template>
    <div class="">
        <div class="container mx-auto px-4 py-4 flex justify-center">
            <div class="form">
                <form class="py-8" @submit.prevent="submitForm">
                    <div class="flex justify-center items-center">
                        <p class="text-5xl font-medium items-center mb-4">Đăng ký</p>
                    </div>
                    <div class="mb-6">
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Tên</label>
                        <input
                            v-model="state.firstName"
                            @blur="v$.firstName.$touch"
                            :class="{ errorinput: v$.firstName.$error }"
                            type="text"
                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder=""
                        />
                        <div v-if="v$.firstName.$error">
                            <p class="mt-2 text-sm text-red-600 dark:text-red-500">Vui lòng nhập Tên của bạn</p>
                        </div>
                    </div>
                    <div class="mb-6">
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Họ</label>
                        <input
                            v-model="state.lastName"
                            @blur="v$.lastName.$touch"
                            :class="{ errorinput: v$.lastName.$error }"
                            type="text"
                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder=""
                        />
                        <div v-if="v$.lastName.$error">
                            <p class="mt-2 text-sm text-red-600 dark:text-red-500">Vui lòng nhập Họ của bạn</p>
                        </div>
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
                            @blur="v$.password.password.$touch"
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
                    <div class="mb-6">
                        <label for="passwordConfirm" class="block mb-2 text-sm font-medium text-gray-900"
                            >Password Confirm</label
                        >
                        <input
                            v-model="state.password.confirmPassword"
                            @blur="v$.password.confirmPassword.$touch"
                            :class="{ errorinput: v$.password.confirmPassword.$error }"
                            type="password"
                            id="passwordConfirm"
                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        />
                        <div v-if="v$.password.confirmPassword.$error">
                            <p class="mt-2 text-sm text-red-600 dark:text-red-500">Vui lòng nhập lại password</p>
                        </div>
                    </div>
                    <div>Quên mật khẩu?</div>
                    <div class="py-6">
                        <button
                            class="border w-full px-8 py-2 text-lg text-white font-light bg-slate-900 hover:bg-slate-900 hover:text-white border-[#78343b] transition duration-500"
                        >
                            Đăng ký
                        </button>
                    </div>
                    <div class="flex justify-center items-center py-4">
                        <p>Đã là thành viên? <a class="text-blue-500" href="/signin">Đăng nhập</a></p>
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
    name: "register",
    setup() {
        const state = reactive({
            firstName: "",
            lastName: "",
            email: "",
            password: {
                password: "",
                confirmPassword: "",
            },
        });

        const rules = computed(() => {
            const kytu = helpers.regex(/^[a-zA-Z0-9]*$/);
            return {
                firstName: { required },
                lastName: { required },
                email: { required, email },
                password: {
                    password: {
                        required: helpers.withMessage(`Vui lòng nhập password`, required),

                        kytu: helpers.withMessage(`Chỉ nhập chữ và số`, kytu),

                        minLength: helpers.withMessage(
                            ({ $params }) => `Tối thiếu ${$params.min} kí tự `,
                            minLength(4)
                        ),
                    },
                    confirmPassword: { sameAs: sameAs(state.password.password), required },
                },
            };
        });

        // containPasswordRequirement: helpers.withMessage(() => 'yêu cầu chữ hoa, thường, số, kí tự đặt biệt', (value) => /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/.test(value.toString()))

        const v$ = useVuelidate(rules, state);

        return { state, v$ };
    },

    methods: {
        async submitForm() {
            this.v$.$validate();
            if (!this.v$.$error) {
                console.log("valid");
                const data = {
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    email: this.state.email,
                    password: {
                        password: this.state.password.password,
                        confirmPassword: this.state.password.confirmPassword,
                    },
                };
                console.log(data);
                let results = await axios.post(" http://localhost:3000/users", data);

                if (results.status == 201) {
                    localStorage.setItem("user-info", JSON.stringify(results.data));
                    this.$router.push("/signin");
                }
            } else {
                console.log("invalid");
            }
        },
    },

    // ========
    // data() {
    //     return {
    //         firstName: "",
    //         lastName: "",
    //         email: "",
    //         password: "",
    //         passwordConfirm: "",
    //     };
    // },
    // methods: {
    // async handleSubmit() {
    //     const data = {
    //         firstName: this.firstName,
    //         lastName: this.lastName,
    //         email: this.email,
    //         password: this.password,
    //         passwordConfirm: this.passwordConfirm,
    //     };
    //     console.log(data);

    //     let results = await axios.post(" http://localhost:3000/users", data);

    //     if (results.status == 201) {
    //         localStorage.setItem("user-info", JSON.stringify(results.data));
    //         // this.$router.push("/signin");
    //     }
    // },
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
