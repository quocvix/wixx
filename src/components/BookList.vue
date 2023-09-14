<template>
    <!-- header-search -->
    <div class="container mx-auto px-4 h-screen">
        <!-- <div class="search_mobile flex justify-between">
            <div class="input-box transition-all duration-500">
                <input type="text" placeholder="Search" />
                <span class="search">
                    <i class="fa-solid fa-magnifying-glass search-icon"></i>
                </span>
                <i class="fa-solid fa-xmark close-icon"></i>
            </div>
        </div> -->
        <div class="header_book"></div>
        <!-- Tabs -->
        <div class="tabs">
            <div class="tabLinks">
                <div class="bg-red-300 grid grid-cols-3">
                    <div
                        class="tab px-4 py-4 text-center"
                        v-for="tab in tabs"
                        :key="tab.status"
                        @click="selectTab(tab.status)"
                        :class="{ activeTab: currentTab === tab.status }"
                    >
                        {{ tab.label }}
                    </div>
                </div>
            </div>
        </div>
        <!-- content -->
        <div class="table-list">
            <div class="flex flex-col">
                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                            <table
                                v-if="currentTab === 'daMua'"
                                class="min-w-full border text-center text-sm font-light dark:border-neutral-500"
                            >
                                <thead
                                    class="border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900"
                                >
                                    <tr>
                                        <th scope="col" class="border-r px-6 py-4 dark:border-neutral-500">#</th>
                                        <th scope="col" class="border-r px-6 py-4 dark:border-neutral-500">Title</th>
                                        <th scope="col" class="border-r px-6 py-4 dark:border-neutral-500">Price</th>
                                        <th scope="col" class="border-r px-6 py-4 dark:border-neutral-500">Name</th>
                                        <th scope="col" class="border-r px-6 py-4 dark:border-neutral-500">Email</th>
                                        <th scope="col" class="border-r px-6 py-4 dark:border-neutral-500">
                                            Date & Time
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                        v-for="item in filteredItems"
                                        :key="item.id"
                                        class="border-b dark:border-neutral-500"
                                    >
                                        <td class="border-r px-4 py-4 dark:border-neutral-500">
                                            <img class="" :src="item.book.img" />
                                        </td>
                                        <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                                            {{ item.book.title }}
                                        </td>
                                        <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                                            {{ item.book.price }}
                                        </td>
                                        <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                                            {{ item.booked.name }}
                                        </td>
                                        <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                                            {{ item.booked.email }}
                                        </td>
                                        <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                                            {{ item.date }} at {{ item.booked.selectedTime }}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <!-- tab - Da Giao -->
                            <table
                                v-if="currentTab === 'daGiao'"
                                class="min-w-full border text-center text-sm font-light dark:border-neutral-500"
                            >
                                <thead
                                    class="border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900"
                                >
                                    <tr>
                                        <th scope="col" class="border-r px-6 py-4 dark:border-neutral-500">#</th>
                                        <th scope="col" class="border-r px-6 py-4 dark:border-neutral-500">Title</th>
                                        <th scope="col" class="border-r px-6 py-4 dark:border-neutral-500">Price</th>
                                        <th scope="col" class="border-r px-6 py-4 dark:border-neutral-500">Name</th>
                                        <th scope="col" class="border-r px-6 py-4 dark:border-neutral-500">Email</th>
                                        <th scope="col" class="border-r px-6 py-4 dark:border-neutral-500">
                                            Date & Time
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                        v-for="item in filteredItems"
                                        :key="item.id"
                                        class="border-b dark:border-neutral-500"
                                    >
                                        <td class="border-r px-4 py-4 dark:border-neutral-500">
                                            <img class="" :src="item.book.img" />
                                        </td>
                                        <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                                            {{ item.book.title }}
                                        </td>
                                        <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                                            {{ item.book.price }}
                                        </td>
                                        <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                                            {{ item.booked.name }}
                                        </td>
                                        <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                                            {{ item.booked.email }}
                                        </td>
                                        <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                                            {{ item.date }} at {{ item.booked.selectedTime }}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <!-- tab - Da Huy -->
                            <table
                                v-if="currentTab === 'daHuy'"
                                class="min-w-full border text-center text-sm font-light dark:border-neutral-500"
                            >
                                <thead
                                    class="border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900"
                                >
                                    <tr>
                                        <th scope="col" class="border-r px-6 py-4 dark:border-neutral-500">#</th>
                                        <th scope="col" class="border-r px-6 py-4 dark:border-neutral-500">Title</th>
                                        <th scope="col" class="border-r px-6 py-4 dark:border-neutral-500">Price</th>
                                        <th scope="col" class="border-r px-6 py-4 dark:border-neutral-500">Name</th>
                                        <th scope="col" class="border-r px-6 py-4 dark:border-neutral-500">Email</th>
                                        <th scope="col" class="border-r px-6 py-4 dark:border-neutral-500">
                                            Date & Time
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                        v-for="item in filteredItems"
                                        :key="item.id"
                                        class="border-b dark:border-neutral-500"
                                    >
                                        <td class="border-r px-4 py-4 dark:border-neutral-500">
                                            <img class="" :src="item.book.img" />
                                        </td>
                                        <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                                            {{ item.book.title }}
                                        </td>
                                        <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                                            {{ item.book.price }}
                                        </td>
                                        <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                                            {{ item.booked.name }}
                                        </td>
                                        <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                                            {{ item.booked.email }}
                                        </td>
                                        <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                                            {{ item.date }} at {{ item.booked.selectedTime }}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Datepicker from "vue2-datepicker";
import axios from "axios";

export default {
    components: {
        Datepicker,
    },
    data() {
        return {
            bookList: [],
            currentTab: "daMua",
            tabs: [
                { status: "daMua", label: "Đã Mua" },
                { status: "daGiao", label: "Đã Giao" },
                { status: "daHuy", label: "Đã Hủy" },
            ],
        };
    },
    created() {
        this.getAll();
    },
    computed: {
        filteredItems() {
            return this.bookList.filter((item) => item.status === this.currentTab);
        },
    },
    methods: {
        getAll() {
            axios
                .get("http://localhost:3000/bookList")
                .then((response) => {
                    this.bookList = response.data;
                })
                .catch((error) => {
                    console.error(error);
                });
        },
        selectTab(tabStatus) {
            this.currentTab = tabStatus;
        },
    },
};
</script>

<style scoped>
.tabs .activeTab {
    background: wheat;
}
img {
    display: block;
    max-width: 100px;
}
</style>
