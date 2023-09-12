<template>
    <div>
        <!-- header -->
        <div class="container mx-auto px-4 flex justify-between search_mobile">
            <div class="allposts py-4">
                <a class="" href="/new">All Posts</a>
            </div>

            <div class="input-box">
                <input type="text" placeholder="Search" />
                <span class="search">
                    <i class="fa-solid fa-magnifying-glass search-icon"></i>
                </span>
                <i class="fa-solid fa-xmark close-icon"></i>
            </div>
        </div>

        <section id="card" class="">
            <!-- container -->
            <div class="container mx-auto px-4">
                <!-- content -->
                <div v-if="newUpdate" class="border-solid border-2 mb-7">
                    <!-- text -->
                    <div class="md:p-16">
                        <!-- header -->
                        <div class="flex justify-between px-11 mb-5 pt-3">
                            <div class="flex justify-between items-center">
                                <svg
                                    class="w-8 h-8 mr-3"
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="1em"
                                    viewBox="0 0 512 512"
                                >
                                    <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                    <path
                                        d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"
                                    />
                                </svg>
                                <span>Admin</span>
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
                        <div class="px-11 mb-7">
                            <div>
                                <p class="text-4xl mb-5">{{ newUpdate.title }}</p>
                            </div>
                            <!-- desc -->
                            <p class="text-lg font-semibold">
                                {{ newUpdate.desc }}
                            </p>
                        </div>
                        <!-- img -->
                        <div class="px-11">
                            <!-- <img src="../assets/img/new-title1.png" alt="services" class="w-full" /> -->
                            <img :src="newUpdate.img" alt="newsupdate" class="w-full mb-3" />
                            <!-- desc-img -->
                            <p class="text-lg">
                                Welcome to your blog post. Use this space to connect with your readers and potential
                                customers in a way that’s current and interesting. Think of it as an ongoing
                                conversation where you can share updates about business, trends, news, and more.
                            </p>
                        </div>
                        <!-- desc -->

                        <!-- button -->
                        <div class="pt-14 px-11">
                            <div>
                                <hr class="mx-auto h-0.5 bg-gray-200" />
                                <div class="py-5 flex gap-8">
                                    <i class="fa-brands fa-facebook-f cursor-pointer hover:text-blue-400"></i>
                                    <i class="fa-brands fa-twitter cursor-pointer hover:text-blue-400"></i>
                                    <i class="fa-brands fa-linkedin-in cursor-pointer hover:text-blue-400"></i>
                                    <i class="fa-solid fa-link cursor-pointer hover:text-blue-400"></i>
                                </div>
                                <hr class="mx-auto h-0.5 bg-gray-200" />
                            </div>
                            <div class="flex justify-between grid-cols-2 gap-3" style="margin-top: 10px">
                                <div class="flex justify-start grid-cols-2 gap-4">
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
            </div>
        </section>
        <!--  -->

        <!-- === comment === -->
        <div class="container mx-auto px-4">
            <div class="border-solid border-2 mb-7">
                <div>
                    <div class="comment" style="">
                        <div>
                            <p>Comments</p>
                            <hr class="mx-auto h-0.5 bg-gray-200 mt-3" />
                        </div>
                        <div class="my-6">
                            <div class="border-solid border-2 p-4">
                                <textarea
                                    class="w-full border-none outline-none"
                                    v-model="text"
                                    @click="isShow = !isShow"
                                    type="text"
                                    placeholder="Write a comments..."
                                ></textarea>
                                <span v-if="isShow" class="flex gap-4">
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
                                            d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                                        />
                                    </svg>

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
                                            d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                                        />
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
                                        />
                                    </svg>
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
                                            d="M12.75 8.25v7.5m6-7.5h-3V12m0 0v3.75m0-3.75H18M9.75 9.348c-1.03-1.464-2.698-1.464-3.728 0-1.03 1.465-1.03 3.84 0 5.304 1.03 1.464 2.699 1.464 3.728 0V12h-1.5M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                                        />
                                    </svg>

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
                                            d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
                                        />
                                    </svg>
                                </span>
                            </div>
                            <div class="flex justify-end mt-2">
                                <button v-if="isShow" @click="isShow = !isShow" class="p-3 text-blue-600">
                                    Cancel
                                </button>
                                <button
                                    :disabled="!text.length"
                                    :class="{ disable: text }"
                                    v-if="isShow"
                                    class="px-3 rounded-none bg-[#c6c6c5]"
                                >
                                    Publish
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--  -->
    </div>
</template>

<script>
// import { listND } from "../assets/js/list";
// import Heart from "../components/Heart.vue";
// import Heart from "../components/Heart.vue";

export default {
    props: ["id"],
    data() {
        return {
            isShow: false,
            text: "",
            isOpen: false,
            newUpdate: null,
        };
    },
    mounted() {
        fetch("http://localhost:3000/newUpdates/" + this.id)
            .then((res) => res.json())
            .then((data) => (this.newUpdate = data))
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

    // mixins: [listND],
};
</script>

<style scoped>
.daLike {
    fill: red;
}
@media (max-width: 900px) {
    .comment {
        padding-left: 110px;
        padding-right: 110px;
        padding-top: 15px;
    }
}
@media (min-width: 350px) {
    .comment {
        padding-left: 15px;
        padding-right: 15px;
        padding-top: 15px;
    }
}
.disable {
    color: gainsboro;
    background: #3b58b8;
}
.input-box {
    position: relative;
    height: 55px;
    max-width: 60px;
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
    width: 60px;
    background: #fff;
    /* border-radius: 6px; */
    display: flex;
    align-items: center;
    justify-content: center;
}

.input-box.open .search {
    border-radius: 6px 0 0 6px;
}

.search .search-icon {
    font-size: 30px;
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
</style>
