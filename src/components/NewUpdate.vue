<template>
    <div>
        <!-- banner -->
        <section id="new-banner" class="">
            <div class="w-full bg-no-repeat bg-cover relative">
                <div style="display: block">
                    <img src="../assets/img/new-banner.png" class="h-newBanner img_banner w-full" alt="" />
                </div>
                <div
                    class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white text-center"
                >
                    <div class="container mx-auto px-4 w-full">
                        <h1 class="text-5xl tracking-wide">NEWS & UPDATES</h1>
                    </div>
                </div>
            </div>
        </section>

        <!-- header-search -->
        <div class="container mx-auto px-4">
            <div class="search_mobile flex justify-between">
                <div class="allposts py-4">
                    <a class="" href="">All Posts</a>
                </div>
                <div class="input-box transition-all duration-500">
                    <input type="text" placeholder="Search" v-model="search" />
                    <span class="search">
                        <i class="fa-solid fa-magnifying-glass search-icon"></i>
                    </span>
                    <i class="fa-solid fa-xmark close-icon"></i>
                </div>
            </div>
        </div>

        <section id="card" class="">
            <!-- container -->
            <div class="container mx-auto px-4">
                <!-- content -->
                <div
                    v-for="newUpdate in filteredNews"
                    :key="newUpdate.id"
                    class="md:flex md:justify-between md:flex-row border-solid border-2 mb-7"
                >
                    <!-- img -->
                    <div class="flex justify-center md:w-1/2">
                        <!-- <img src="../assets/img/new-title1.png" alt="services" class="w-full" /> -->
                        <img :src="newUpdate.img" alt="newsupdate" class="w-full" />
                    </div>
                    <!-- text -->
                    <div class="md:w-1/2 px-8 py-6">
                        <!-- header -->
                        <div class="flex justify-between mb-3">
                            <div class="flex justify-between items-center">
                                <i
                                    class="fa-solid fa-circle-user"
                                    style="color: #a1aec4; font-size: 32px; padding-right: 10px"
                                ></i>
                                <span>Admin</span>
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                                    <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                    <path
                                        d="M309 106c11.4-7 19-19.7 19-34c0-22.1-17.9-40-40-40s-40 17.9-40 40c0 14.4 7.6 27 19 34L209.7 220.6c-9.1 18.2-32.7 23.4-48.6 10.7L72 160c5-6.7 8-15 8-24c0-22.1-17.9-40-40-40S0 113.9 0 136s17.9 40 40 40c.2 0 .5 0 .7 0L86.4 427.4c5.5 30.4 32 52.6 63 52.6H426.6c30.9 0 57.4-22.1 63-52.6L535.3 176c.2 0 .5 0 .7 0c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40c0 9 3 17.3 8 24l-89.1 71.3c-15.9 12.7-39.5 7.5-48.6-10.7L309 106z"
                                    />
                                </svg>
                            </div>
                            <!-- shareBtn -->
                            <div class="dot-share relative">
                                <button @click="isOpen = !isOpen" class="w-4 h-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 128 512">
                                        <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                        <path
                                            d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"
                                        />
                                    </svg>
                                </button>

                                <div v-if="isOpen" class="absolute right-3">
                                    <div class="box-border border-solid border-2 bg-white drop-shadow-md">
                                        <a href="" class="flex items-center w-44 gap-3 p-4"
                                            ><i class="fa-solid fa-share"></i> Share Post</a
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- title -->
                        <div class="hover:text-blue-500">
                            <div>
                                <router-link :to="{ name: 'newDetail', params: { id: newUpdate.id } }">
                                    <p class="text-3xl mb-3">{{ newUpdate.title }}</p>
                                </router-link>
                            </div>
                            <!-- desc -->
                            <p class="text-base">
                                {{ newUpdate.desc }}
                            </p>
                        </div>
                        <!-- button -->
                        <div class="pt-24">
                            <hr class="mx-auto h-0.5 bg-gray-200" />
                            <div class="flex justify-between grid-cols-2 gap-3 mt-3" style="margin-top: 10px">
                                <div class="flex justify-start grid-cols-2 gap-4">
                                    <div class="flex arti-items">
                                        <p class="pr-2">0</p>
                                        <p>views</p>
                                    </div>
                                    <div class="flex mb-5 arti-items">
                                        <p class="pr-2">0</p>
                                        <p>comments</p>
                                    </div>
                                </div>
                                <!-- button like -->
                                <div class="like-button flex arti-items cursor-pointer">
                                    <p class="pr-2 likes-amount">{{ newUpdate.likes }}</p>

                                    <div class="heart-icon">
                                        <button @click="like(newUpdate)">
                                            <svg
                                                :class="{ daLike: newUpdate.liked }"
                                                style="color: red"
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
                                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- notfound -->
                <div v-if="filteredNews.length === 0" class="border-solid border-2 mb-7">
                    <div class="flex justify-center items-center flex-col gap-3 h-notFound">
                        <p class="text-4xl font-thin">No Results Found</p>
                        <p class="text-base font-thin">
                            Looks like we couldn’t find what you’re looking for. Try another search.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
// import { heart } from "../assets/js/search";
// import Heart from "./Heart.vue";

export default {
    data() {
        return {
            isOpen: false,
            search: "",
            newUpdates: [],
        };
    },
    mounted() {
        fetch("http://localhost:3000/newUpdates")
            .then((res) => res.json())
            .then((data) => (this.newUpdates = data))
            .catch((err) => console.log(err.message));
    },
    methods: {
        like(news) {
            // Kiểm tra trạng thái của nút hiện tại
            if (news.liked) {
                // Nếu nút đang ở trạng thái "Liked", thì đổi thành "Unlike"
                news.liked = false;
            } else {
                // Nếu nút đang ở trạng thái "Unlike", thì đổi thành "Liked"
                news.liked = true;
            }

            // Thay đổi số lượt thích tương ứng
            if (news.liked) {
                news.likes++;
            } else {
                news.likes--;
            }
        },
    },
    computed: {
        filteredNews() {
            return this.newUpdates.filter((newUpdate) =>
                newUpdate.title.toLowerCase().includes(this.search.toLowerCase())
            );
        },
    },

    // mixins: [heart],
};
</script>

<style scoped>
.daLike {
    fill: red;
}

/* .search_mobile {
    transition: all;
} */

@media (max-width: 400px) {
    .img_banner {
        height: 170px;
    }
    .search_mobile {
        background: #3b58b8;
    }

    .allposts {
        visibility: hidden;
    }
    .input-box {
        position: relative;
        height: 65px;
        max-width: 450px;
        width: 100%;
        margin: 0 30px;
        border-radius: 6px;
        background: #3b58b8;
    }

    .input-box input {
        position: relative;
        height: 100%;
        width: 100%;
        padding: 0 30px;
        outline: none;
        border: none;
        background: #3b58b8;
        /* border-radius: 6px; */
        border-bottom: 1px solid #fff;
        font-size: 16px;
        color: #333;
    }

    .input-box .search {
        position: absolute;
        left: 0;
        top: 0;
        height: 90%;
        /* width: 50px; */
        background: #3b58b8;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .input-box.open .search {
        /* border-radius: 6px 0 0 6px; */
        height: 90%;
        width: 30px;
    }

    .input-box .search-icon {
        color: #fff;
    }

    .input-box .close-icon {
        position: absolute;
        right: -45px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 30px;
        padding: 5px;
        opacity: 0;
    }
}
/*  */
@media (min-width: 800px) {
    .input-box {
        position: relative;
        height: 65px;
        max-width: 65px;
        width: 100%;
        margin: 0 30px;
        border-radius: 6px;
        background: #fff;
    }

    .input-box.open {
        max-width: 350px;
    }
    .input-box input {
        position: relative;
        height: 100%;
        width: 100%;
        padding: 0 15px;
        outline: none;
        border: none;
        /* border-radius: 6px; */
        border-bottom: 1px solid #000;
        font-size: 16px;
        color: #333;
    }

    .input-box.open input {
        padding: 0 15px 0 65px;
    }

    .input-box .search {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 65px;
        background: #fff;
        /* border-radius: 6px; */
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .input-box.open .search {
        /* border-radius: 6px 0 0 6px; */
        height: 90%;
        width: 50px;
    }

    .search .search-icon {
        font-size: 20px;
    }

    .input-box .close-icon {
        position: absolute;
        right: -45px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 30px;
        padding: 5px;
        opacity: 0;
    }
    .input-box.open .close-icon {
        opacity: 1;
    }
}
</style>
