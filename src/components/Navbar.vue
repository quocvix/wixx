<template>
    <div class="container mx-auto px-4">
        <nav class="flex justify-between w-full items-center py-5">
            <!-- Logo -->
            <div class="w-32 z-19 flex items-center">
                <img class="w-7 mr-2" src="../assets/img/logo.png" alt="logo" />
                <p class="text-2xl flex">Axis<span class="text-[#3b58b8]">Group</span></p>
            </div>
            <!-- links -->

            <ul
                id="menu"
                class="menu_ul right-[-500px] gap-3 z-20 fixed transition-all ease-in duration-500 top-0 h-screen flex flex-col items-center bg-white md:bg-transparent md:h-auto md:flex-row md:px-2 md:static"
            >
                <div class="menu_nav flex flex-col md:flex-row gap-3 justify-between md:items-center">
                    <router-link :to="{ name: 'home' }" class="navMenu m-2"
                        ><a class="c-link hover:text-blue-300 text-sm" href="#">Home</a>
                    </router-link>
                    <router-link :to="{ name: 'booklist' }" class="navMenu m-2"
                        ><a class="c-link hover:text-blue-300 text-sm" href="#">BookList</a>
                    </router-link>
                    <li class="navMenu lg:m-2">
                        <a class="c-link hover:text-blue-300 text-sm" href="#">About</a>
                    </li>
                    <router-link :to="{ name: 'book' }" class="navMenu m-2"
                        ><a class="c-link hover:text-blue-300 text-sm" href="#services">Services</a>
                    </router-link>

                    <li class="navMenu lg:m-2">
                        <a class="c-link hover:text-blue-300 text-sm" href="#">Plans</a>
                    </li>
                    <router-link :to="{ name: 'new' }" class="navMenu lg:m-2"
                        ><a class="c-link hover:text-blue-300 text-sm" href="#">News & Updates</a>
                    </router-link>
                    <li class="navMenu lg:m-2">
                        <a class="c-link hover:text-blue-300 text-sm" href="#">Financial Tools</a>
                    </li>
                    <li class="navMenu lg:m-2">
                        <a class="c-link hover:text-blue-300 text-sm" href="#contact">Contact</a>
                    </li>
                </div>
                <!-- <router-link :to="{ name: 'signin' }">
                    <div class="flex py-4 cursor-pointer ml-2">
                        <button class="flex items-center gap-3 text-blue-800 hover:text-blue-300">
                            <div>
                                <i
                                    class="fa-solid fa-circle-user w-6 h-6 login-btn text-3xl"
                                    style="color: #3b58b8"
                                ></i>
                            </div>
                            <span class="">Log In</span>
                        </button>
                    </div>
                </router-link> -->

                <div class="flex py-4 cursor-pointer ml-2">
                    <button v-if="!isLoggedIn">
                        <router-link
                            :to="{ name: 'signin' }"
                            class="flex items-center gap-3 text-blue-800 hover:text-blue-300"
                        >
                            <div>
                                <i
                                    class="fa-solid fa-circle-user w-6 h-6 login-btn text-3xl"
                                    style="color: #3b58b8"
                                ></i>
                            </div>
                            <span class="">Log In</span>
                        </router-link>
                    </button>
                    <div v-else @click="toggleUserMenu" class="relative flex items-center gap-3 text-blue-800">
                        <div>
                            <i class="fa-solid fa-circle-user w-6 h-6 login-btn text-3xl" style="color: #3b58b8"></i>
                        </div>
                        <span class="hover:text-blue-300">{{ userName }}</span>
                        <!-- Dropdown menu (nếu bạn muốn) -->
                        <div
                            v-if="showUserMenu"
                            class="absolute top-10 right-0 mt-2 w-40 bg-white border border-gray-300 rounded shadow-lg"
                        >
                            <button @click="logout" class="block w-full px-4 py-2 text-left hover:bg-gray-100">
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </ul>

            <div id="menu-btn" name="menu" onclick="Menu(this)" class="z-20 first-line: md:hidden cursor-pointer">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                </svg>
            </div>
            <!-- Login button -->
        </nav>
    </div>
</template>

<style scoped>
@media (max-width: 400px) {
    .menu_ul {
        width: 83%;
    }
}

.router-link-exact-active {
    color: #1c64f2;
}
</style>

<script>
export default {
    data() {
        return {
            isLoggedIn: false,
            userName: "",
            showUserMenu: false, // kiểm soát việc hiển thị/ẩn dropdown menu
        };
    },
    created() {
        // Kiểm tra xem dữ liệu uer đã đăng nhập có trong Local Storage không
        const userDataString = localStorage.getItem("user-info");
        if (userDataString) {
            // Nếu có dữ liệu, chuyển đổi chuỗi JSON thành đối tượng JavaScript
            const userData = JSON.parse(userDataString);
            // Gán tên người dùng cho biến userName
            this.userName = userData.firstName;
            // Đặt isLoggedIn là true để ẩn nút "Log In" và hiển thị tên user
            this.isLoggedIn = true;
        }
    },

    methods: {
        // ... Các phương thức khác
        toggleUserMenu() {
            this.showUserMenu = !this.showUserMenu;
        },
        logout() {
            // Xóa dữ liệu người dùng khỏi Local Storage và đặt lại các biến
            localStorage.removeItem("user-info");
            this.userName = "";
            this.isLoggedIn = false;
        },
    },
};
</script>
