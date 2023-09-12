<template>
    <div>
        <!-- === Scroll === -->
        <div class="scroll-indicator z-10">
            <a href="#services" data-section="Services"></a>
            <a href="#team" data-section="Team"></a>
            <a href="#clients" data-section="Clinets"></a>
            <a href="#article" data-section="Articles"></a>
        </div>

        <!-- === Banner === -->

        <div id="banner" class="h-custom">
            <div class="w-full bg-no-repeat bg-cover relative">
                <div style="display: block">
                    <img src="../assets/img/banner.png" class="h-custom w-full" alt="" />
                </div>
                <div
                    class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white text-center"
                >
                    <div class="container mx-auto px-4 w-full">
                        <!-- tag -->
                        <p class="text-8xl mb-5 font-semibold">The Axis Group</p>
                        <!-- title -->
                        <p class="text-4xl mb-5 font-semibold">Financial Consulting. Let Us Do the Math.</p>
                    </div>
                    <div>
                        <button
                            class="md:mx-4 border border-transparent px-11 py-3 text-xl font-light bg-rose-600 hover:bg-blue-800 transition duration-500"
                        >
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- === Services === -->
        <section id="services" class="">
            <!-- container -->
            <div class="container mx-auto px-4">
                <!-- content -->
                <div class="md:flex md:flex-row-reverse md:justify-between flex flex-col justify-center">
                    <!-- text -->
                    <div class="w-96">
                        <!-- title -->
                        <h2 class="text-4xl font-semibold">OUR SERVICES</h2>
                        <!-- desc -->
                        <p class="mt-8 text-sm">
                            I'm a paragraph. Click here to add your own text and edit me. I'm a great place for you to
                            tell a story and let your users know a little more about you.
                        </p>
                        <!-- button -->
                        <div class="mt-14">
                            <button
                                class="border px-8 py-2 text-lg text-white font-light bg-rose-600 hover:bg-white hover:text-rose-600 border-rose-600 transition duration-500"
                            >
                                Read More
                            </button>
                        </div>
                    </div>
                    <!-- img -->
                    <div class="img-services md:mt-0 mt-12 flex justify-center items-center">
                        <img src="../assets/img/services-page.png" alt="services" />
                        <img class="hover-img" src="../assets/img/services-page-hover.png" alt="services" />
                    </div>
                </div>
            </div>
        </section>

        <!-- === Team === -->
        <section id="team" class="" style="background-color: #f6f8fd">
            <!-- container -->
            <div class="container mx-auto px-4">
                <!-- content -->
                <div class="md:flex md:justify-between md:flex-row flex flex-col justify-center">
                    <!-- text -->
                    <div class="w-96">
                        <!-- title -->
                        <h2 class="text-4xl font-semibold">OUR TEAM</h2>
                        <!-- desc -->
                        <p class="mt-8 text-sm">
                            I'm a paragraph. Click here to add your own text and edit me. I'm a great place for you to
                            tell a story and let your users know a little more about you.
                        </p>
                        <!-- button -->
                        <div class="mt-14">
                            <button
                                class="border px-8 py-2 text-lg text-white font-light bg-rose-600 hover:bg-white hover:text-rose-600 border-rose-600 transition duration-500"
                            >
                                Read More
                            </button>
                        </div>
                    </div>
                    <!-- img -->
                    <div class="img-services md:mt-0 mt-12 flex justify-center items-center">
                        <img src="../assets/img/team-page.png" alt="services" />
                        <img class="hover-img" src="../assets/img/team-page-hover.png" alt="services" />
                    </div>
                </div>
            </div>
        </section>
        <div></div>
        <div></div>
        <!-- === Clients === -->
        <section id="clients" class="">
            <!-- container -->
            <div class="container mx-auto px-4">
                <!-- title -->
                <h2 class="text-4xl font-semibold">OUR CLIENTS</h2>
                <!-- items -->
                <div class="flex-col justify-center items-center md:flex-row md:grid md:grid-cols-3">
                    <!-- item 1 -->
                    <div class="items-center justify-center flex px-3 py-5">
                        <img src="../assets/img/client-1.png" alt="" />
                    </div>
                    <!-- item 2 -->
                    <div class="items-center justify-center flex px-3 py-5">
                        <img src="../assets/img/client-2.png" alt="" />
                    </div>
                    <!-- item 3 -->
                    <div class="items-center justify-center flex px-3 py-5">
                        <img src="../assets/img/client-3.png" alt="" />
                    </div>
                    <!-- item 4 -->
                    <div class="items-center justify-center flex px-3 py-5">
                        <img src="../assets/img/client-4.png" alt="" />
                    </div>
                    <!-- item 5 -->
                    <div class="items-center justify-center flex px-3 py-5">
                        <img src="../assets/img/client-5.png" alt="" />
                    </div>
                    <!-- item 6 -->
                    <div class="items-center justify-center flex">
                        <img src="../assets/img/client-6.png" alt="" />
                    </div>
                </div>

                <!-- button -->
                <div class="mt-14">
                    <button
                        class="border px-8 py-2 text-lg text-white font-light bg-rose-600 hover:bg-white hover:text-rose-600 border-rose-600 transition duration-500"
                    >
                        Read More
                    </button>
                </div>
            </div>
        </section>

        <!-- === Article === -->
        <section id="article" class="" style="background-color: #f6f8fd">
            <!-- container -->
            <div class="container mx-auto px-4">
                <!-- title -->
                <h2 class="text-4xl font-semibold">LATEST ARTICLES</h2>
                <!-- items -->
                <div class="px-3 py-10 arti-card flex flex-col md:flex md:flex-row md:justify-between">
                    <!-- item 1 -->
                    <div class="py-3 card-item">
                        <div class="articles-item flex flex-col">
                            <img src="../assets/img/articles-1.png" alt="" />
                            <div class="articles-item-title">
                                <p class="px-6 py-5">Modern Day Meetings</p>
                            </div>
                            <hr class="w-4/5 mx-auto h-0.5 bg-gray-200" />
                            <div class="flex justify-between grid-cols-2 gap-3 px-4" style="margin-top: 10px">
                                <div class="flex justify-start grid-cols-2 gap-4 px-4">
                                    <div class="flex arti-items">
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
                                                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                            />
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                        </svg>
                                        <p>0</p>
                                    </div>
                                    <div class="flex mb-5 arti-items">
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
                                                d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                                            />
                                        </svg>
                                        <p>0</p>
                                    </div>
                                </div>
                                <div class="flex">
                                    <div class="flex arti-items">
                                        <p>6</p>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            class="w-6 h-6 text-red-500"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- item 2 -->
                    <div class="py-3 card-item">
                        <div class="articles-item flex flex-col">
                            <img src="../assets/img/articles-2.png" alt="" />
                            <div class="articles-item-title">
                                <p class="px-6 py-5">Balancing Checkbooks</p>
                            </div>
                            <hr class="w-4/5 mx-auto h-0.5 bg-gray-200" />
                            <div class="flex justify-between grid-cols-2 gap-3 px-4" style="margin-top: 10px">
                                <div class="flex justify-start grid-cols-2 gap-4 px-4">
                                    <div class="flex arti-items">
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
                                                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                            />
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                        </svg>
                                        <p>0</p>
                                    </div>
                                    <div class="flex mb-5 arti-items">
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
                                                d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                                            />
                                        </svg>
                                        <p>0</p>
                                    </div>
                                </div>
                                <div class="flex">
                                    <div class="flex arti-items">
                                        <p>6</p>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            class="w-6 h-6 text-red-500"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- item 3 -->
                    <div class="py-3 card-item">
                        <div class="articles-item flex flex-col">
                            <img src="../assets/img/articles-3.png" alt="" />
                            <div class="articles-item-title">
                                <p class="px-6 py-5">Q4 Analysis</p>
                            </div>
                            <hr class="mx-auto h-0.5 bg-gray-200 w-4/5" />
                            <div class="flex justify-between grid-cols-2 gap-3 px-4" style="margin-top: 10px">
                                <div class="flex justify-start grid-cols-2 gap-4 px-4">
                                    <div class="flex arti-items">
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
                                                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                            />
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                        </svg>
                                        <p>0</p>
                                    </div>
                                    <div class="flex mb-5 arti-items">
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
                                                d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                                            />
                                        </svg>
                                        <p>0</p>
                                    </div>
                                </div>
                                <div class="flex">
                                    <div class="flex arti-items">
                                        <p>6</p>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            class="w-6 h-6 text-red-500"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- === Contact === -->
        <div id="contact" class="">
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

<style scoped>
/* === Overlay === */
#overlay {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    background: rgb(0, 0, 0, 0.4);
    z-index: 20;
    display: none;
    transition: var(--smooth);
}

#overlay.show {
    display: initial;
}

@media (max-width: 900px) {
    .navMenu {
        margin: 0;
    }
}

/* img */
.img-services {
    display: block;
    cursor: pointer;
    position: relative;
    display: inline-block;
    overflow: hidden;
}

.img-services img {
    width: 100%;
}

.img-services img.hover-img {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
}

.img-services:hover img {
    opacity: 0;
}

.img-services:hover img.hover-img {
    opacity: 1;
}

/* articles */
.articles-item {
    background: #fff;
}

.articles-item-title {
    padding-left: 30px;
}

.arti-items {
    gap: 5px;
}

/* scroll */
.scroll-indicator {
    position: fixed;
    right: 50px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    gap: 40px;
}

.scroll-indicator a {
    padding: 10px;
    position: relative;
}

.scroll-indicator a::after {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    border: 2px solid #3b58b8;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%);
}

.scroll-indicator a.active::after {
    background: #3b58b8;
    border: 2px solid #3b58b8;
    transform: translate(-50%, -50%) scale(1.3);
}

.scroll-indicator a.show::before {
    content: attr(data-section);
    position: absolute;
    right: 24px;
    top: 50%;
    transform: translate(4px, -50%);
    color: #3b58b8;
    text-transform: uppercase;
    opacity: 1;
    transition: all 400ms ease;
}

@media (max-width: 900px) {
    .scroll-indicator {
        opacity: 0;
    }
}

/*  */
@media (max-width: 480px) {
    #services,
    #team,
    #article,
    #clients,
    #contact {
        padding-top: 40px;
        padding-bottom: 40px;
    }
}

@media (max-width: 900px) {
    .navMenu {
        margin: 0;
    }
}

@media (min-width: 900px) {
    #services,
    #team {
        height: 500px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    #clients {
        height: 500px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    #article {
        height: 500px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    #contact {
        height: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}

@media (max-width: 850px) {
    .arti-card {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    .card-item {
        margin-bottom: 15px;
    }
}
</style>
