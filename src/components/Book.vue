<template>
    <div>
        <!-- banner -->
        <section id="new-banner" class="">
            <div class="w-full bg-no-repeat bg-cover relative">
                <div style="display: block; inset: 0">
                    <img src="../assets/img/book-banner.png" class="h-newBanner img_banner w-full" alt="" />
                </div>
                <div
                    class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white text-center"
                >
                    <div class="container mx-auto px-4 w-full">
                        <h1 class="text-5xl tracking-wide">BOOK ONLINE</h1>
                    </div>
                </div>
            </div>
        </section>

        <!-- === Book Card === -->
        <div class="container mx-auto px-4 py-4 grid md:grid-cols-3 justify-center gap-5">
            <div
                v-for="book in books"
                :key="book.id"
                class="max-w-sm rounded overflow-hidden shadow-lg border-solid border border-[#a0a09f]"
            >
                <div class="hover-img cursor-pointer">
                    <router-link :to="{ name: 'bookDetail', params: { id: book.id } }">
                        <figure><img class="w-full" :src="book.img" alt="bookcard" /></figure>
                    </router-link>
                </div>
                <div class="text-center px-6 py-4">
                    <div class="px-6 py-4 h-40">
                        <router-link :to="{ name: 'bookDetail', params: { id: book.id } }">
                            <p class="text-xl mb-2 hover:text-[#828282]">{{ book.title }}</p>
                        </router-link>

                        <p class="text-gray-700 text-base py-2">{{ book.time }}</p>
                        <p class="text-gray-700 text-base">{{ book.price }}</p>
                    </div>
                    <div class="px-6 py-5 pt-4">
                        <router-link :to="{ name: 'bookDetail', params: { id: book.id } }">
                            <button
                                class="border px-8 py-2 text-lg text-white font-light bg-[#3b58b8] hover:bg-[#758acd] transition duration-500"
                            >
                                Book Now
                            </button>
                        </router-link>
                    </div>
                </div>
            </div>
            <!--  -->
        </div>

        <!-- === Contact === -->
        <div id="contact" class="border-solid border border-black">
            <!-- container -->
            <div class="container mx-auto px-4 md:flex md:justify-around items-center">
                <div>
                    <!-- title -->
                    <div>
                        <h2 class="text-4xl font-semibold">Need more details? Contact us</h2>
                    </div>
                    <!-- desc -->
                    <div>
                        <p class="mb-5 text-sm">
                            We are here to assist. Contact us by phone, email or via our social media channels.
                        </p>
                    </div>
                </div>
                <!-- button -->
                <div class="flex justify-center md:flex md:w-72">
                    <button
                        class="w-full border px-8 py-2 text-lg text-white font-light bg-rose-600 hover:bg-white hover:text-rose-600 border-rose-600 transition duration-500"
                    >
                        Contact Us
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import Heart from "./Heart.vue";
import axios from "axios";

export default {
    data() {
        return {
            books: [],
        };
    },
    mounted() {
        axios
            .get("http://localhost:3000/books")
            .then((response) => {
                this.books = response.data;
            })
            .catch((error) => {
                console.error(error);
            });
    },
    methods: {},
    computed: {},
};
</script>

<style scoped>
.hover-img figure {
    background: #29365e;
}
.hover-img figure img {
    opacity: 1;
    -webkit-transition: 0.3s ease-in-out;
    transition: 0.3s ease-in-out;
}
.hover-img figure:hover img {
    opacity: 0.5;
}

@media (max-width: 480px) {
    #contact {
        padding-top: 40px;
        padding-bottom: 40px;
    }
}

@media (min-width: 900px) {
    #contact {
        height: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>
