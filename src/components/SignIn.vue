<template>
    <div class="h-screen">
        <div class="container mx-auto px-4 py-4 flex justify-center">
            <div class="form">
                <form class="py-8" @submit.prevent="login">
                    <div class="flex justify-center items-center">
                        <p class="text-5xl font-medium items-center">Đăng nhập</p>
                    </div>
                    <div class="flex justify-center items-center py-4">
                        <p>Mới truy cập trang web này? <a href="/signup">Đăng ký</a></p>
                    </div>
                    <div class="mb-6">
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Email</label>
                        <input
                            v-model="email"
                            type="email"
                            id="email"
                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Email"
                            required
                        />
                    </div>
                    <div class="mb-6">
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Password</label>
                        <input
                            v-model="password"
                            type="password"
                            id="password"
                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required
                        />
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
import axios from "axios";
export default {
    name: "login",
    data() {
        return {
            email: "",
            password: "",
        };
    },
    methods: {
        async login() {
            let results = await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`);

            if (results.status == 200 && results.data.length > 0) {
                localStorage.setItem("user-info", JSON.stringify(results.data[0]));
                this.$router.push("/");
            }
            console.log(results);
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
