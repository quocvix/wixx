<template>
    <div class="">
        <div class="container mx-auto px-4 py-4 flex justify-center">
            <div class="form">
                <form class="py-8" @submit.prevent="handleSubmit">
                    <div class="flex justify-center items-center">
                        <p class="text-5xl font-medium items-center mb-4">Đăng ký</p>
                    </div>
                    <div class="mb-6">
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Tên</label>
                        <input
                            v-model="firstName"
                            type="text"
                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder=""
                        />
                    </div>
                    <div class="mb-6">
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Họ</label>
                        <input
                            v-model="lastName"
                            type="text"
                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder=""
                        />
                    </div>
                    <div class="mb-6">
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Email</label>
                        <input
                            v-model="email"
                            type="email"
                            id="email"
                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Email"
                        />
                    </div>
                    <div class="mb-6">
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Password</label>
                        <input
                            v-model="password"
                            type="password"
                            id="password"
                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        />
                    </div>
                    <div class="mb-6">
                        <label for="passwordConfirm" class="block mb-2 text-sm font-medium text-gray-900"
                            >Password Confirm</label
                        >
                        <input
                            v-model="passwordConfirm"
                            type="password"
                            id="passwordConfirm"
                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        />
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
                        <p>Đã là thành viên? <a href="">Đăng nhập</a></p>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { useVuelidate } from "@vuelidate/core";
import axios from "axios";
export default {
    name: "register",
    data() {
        return {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            passwordConfirm: "",
        };
    },
    methods: {
        async handleSubmit() {
            const data = {
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                password: this.password,
                passwordConfirm: this.passwordConfirm,
            };
            console.log("submit");

            let results = await axios.post(" http://localhost:3000/users", data);

            if (results.status == 201) {
                localStorage.setItem("user-info", JSON.stringify(results.data));
                this.$router.push("/signin");
            }
        },
    },
};
</script>

<style scoped>
.form {
    margin: 20px;
    padding: 20px;
    background: #f1f1f1;
    width: 500px;
    border-radius: 8px;
    box-shadow: 0 2px 5px 0 rgba(51, 62, 73, 0.1);
}
</style>
