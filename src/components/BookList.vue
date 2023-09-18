<template>
    <div class="min-h-screen">
        <div>
            <div class="container mx-auto px-4">
                <!-- Search -->
                <div class="search-bar mb-4">
                    <input
                        v-model="searchQuery"
                        @input="filterItems"
                        type="text"
                        class="rounded-lg w-full p-2.5 border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Search by date or time"
                    />
                </div>
                <!-- Tabs -->
                <div class="tab">
                    <div class="tabLinks">
                        <div class="grid grid-cols-3">
                            <div
                                class="tabs px-4 py-4 text-center"
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
                                    <!-- tab - Da Mua -->
                                    <table
                                        v-if="currentTab === 'daMua'"
                                        class="min-w-full border text-sm font-light dark:border-neutral-500"
                                    >
                                        <thead
                                            class="border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900"
                                        >
                                            <tr>
                                                <th scope="col" class="border-r px-6 py-4 dark:border-neutral-500">
                                                    #
                                                </th>
                                                <th scope="col" class="border-r px-6 py-4 dark:border-neutral-500">
                                                    <button @click="sortByColumn('title')">
                                                        Title
                                                        <span v-if="currentSortColumn === 'title'">{{
                                                            sortIcons.title
                                                        }}</span>
                                                    </button>
                                                </th>
                                                <th scope="col" class="border-r px-6 py-4 dark:border-neutral-500">
                                                    <button @click="sortByColumn('price')">
                                                        Price
                                                        <span v-if="currentSortColumn === 'price'">{{
                                                            sortIcons.price
                                                        }}</span>
                                                    </button>
                                                </th>
                                                <th scope="col" class="border-r px-6 py-4 dark:border-neutral-500">
                                                    <button @click="sortByColumn('name')">
                                                        Name
                                                        <span v-if="currentSortColumn === 'name'">{{
                                                            sortIcons.name
                                                        }}</span>
                                                    </button>
                                                </th>
                                                <th scope="col" class="border-r px-6 py-4 dark:border-neutral-500">
                                                    <button @click="sortByColumn('email')">
                                                        Email
                                                        <span v-if="currentSortColumn === 'email'">{{
                                                            sortIcons.email
                                                        }}</span>
                                                    </button>
                                                </th>
                                                <th scope="col" class="border-r px-6 py-4 dark:border-neutral-500">
                                                    <button @click="sortByColumn('dateTime')">
                                                        Date & Time
                                                        <span v-if="currentSortColumn === 'dateTime'">{{
                                                            sortIcons.dateTime
                                                        }}</span>
                                                    </button>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr
                                                v-for="(item, index) in filterItems()"
                                                :key="item.id"
                                                class="border-b dark:border-neutral-500"
                                            >
                                                <td class="border-r px-4 py-4 dark:border-neutral-500">
                                                    <img class="" :src="item.book.img" />
                                                </td>
                                                <td
                                                    class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500"
                                                >
                                                    {{ item.book.title }}
                                                </td>
                                                <td
                                                    class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500"
                                                >
                                                    {{ item.book.price }}
                                                </td>
                                                <td
                                                    class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500"
                                                >
                                                    {{ item.booked.name }}
                                                </td>
                                                <td
                                                    class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500"
                                                >
                                                    {{ item.booked.email }}
                                                </td>
                                                <td
                                                    class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500"
                                                >
                                                    {{ formatDate(item.date) }} at {{ item.booked.selectedTime }}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <!-- tab - Da Giao -->
                                    <table
                                        v-if="currentTab === 'daGiao'"
                                        class="min-w-full border text-sm font-light dark:border-neutral-500"
                                    >
                                        <thead
                                            class="border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900"
                                        >
                                            <tr>
                                                <th scope="col" class="border-r px-6 py-4 dark:border-neutral-500">
                                                    #
                                                </th>
                                                <th scope="col" class="border-r px-6 py-4 dark:border-neutral-500">
                                                    <button @click="sortByColumn('title')">
                                                        Title
                                                        <span v-if="currentSortColumn === 'title'">{{
                                                            sortIcons.title
                                                        }}</span>
                                                    </button>
                                                </th>
                                                <th scope="col" class="border-r px-6 py-4 dark:border-neutral-500">
                                                    <button @click="sortByColumn('price')">
                                                        Price
                                                        <span v-if="currentSortColumn === 'price'">{{
                                                            sortIcons.price
                                                        }}</span>
                                                    </button>
                                                </th>
                                                <th scope="col" class="border-r px-6 py-4 dark:border-neutral-500">
                                                    <button @click="sortByColumn('name')">
                                                        Name
                                                        <span v-if="currentSortColumn === 'name'">{{
                                                            sortIcons.name
                                                        }}</span>
                                                    </button>
                                                </th>
                                                <th scope="col" class="border-r px-6 py-4 dark:border-neutral-500">
                                                    <button @click="sortByColumn('email')">
                                                        Email
                                                        <span v-if="currentSortColumn === 'email'">{{
                                                            sortIcons.email
                                                        }}</span>
                                                    </button>
                                                </th>
                                                <th scope="col" class="border-r px-6 py-4 dark:border-neutral-500">
                                                    <button @click="sortByColumn('dateTime')">
                                                        Date & Time
                                                        <span v-if="currentSortColumn === 'dateTime'">{{
                                                            sortIcons.dateTime
                                                        }}</span>
                                                    </button>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr
                                                v-for="item in filterItems()"
                                                :key="item.id"
                                                class="border-b dark:border-neutral-500"
                                            >
                                                <td class="border-r px-4 py-4 dark:border-neutral-500">
                                                    <img class="" :src="item.book.img" />
                                                </td>
                                                <td
                                                    class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500"
                                                >
                                                    {{ item.book.title }}
                                                </td>
                                                <td
                                                    class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500"
                                                >
                                                    {{ item.book.price }}
                                                </td>
                                                <td
                                                    class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500"
                                                >
                                                    {{ item.booked.name }}
                                                </td>
                                                <td
                                                    class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500"
                                                >
                                                    {{ item.booked.email }}
                                                </td>
                                                <td
                                                    class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500"
                                                >
                                                    {{ formatDate(item.date) }} at {{ item.booked.selectedTime }}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <!-- tab - Da Huy -->
                                    <table
                                        v-if="currentTab === 'daHuy'"
                                        class="min-w-full border text-sm font-light dark:border-neutral-500"
                                    >
                                        <thead
                                            class="border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900"
                                        >
                                            <tr>
                                                <th scope="col" class="border-r px-6 py-4 dark:border-neutral-500">
                                                    #
                                                </th>
                                                <th scope="col" class="border-r px-6 py-4 dark:border-neutral-500">
                                                    <button @click="sortByColumn('title')">
                                                        Title
                                                        <span v-if="currentSortColumn === 'title'">{{
                                                            sortIcons.title
                                                        }}</span>
                                                    </button>
                                                </th>
                                                <th scope="col" class="border-r px-6 py-4 dark:border-neutral-500">
                                                    <button @click="sortByColumn('price')">
                                                        Price
                                                        <span v-if="currentSortColumn === 'price'">{{
                                                            sortIcons.price
                                                        }}</span>
                                                    </button>
                                                </th>
                                                <th scope="col" class="border-r px-6 py-4 dark:border-neutral-500">
                                                    <button @click="sortByColumn('name')">
                                                        Name
                                                        <span v-if="currentSortColumn === 'name'">{{
                                                            sortIcons.name
                                                        }}</span>
                                                    </button>
                                                </th>
                                                <th scope="col" class="border-r px-6 py-4 dark:border-neutral-500">
                                                    <button @click="sortByColumn('email')">
                                                        Email
                                                        <span v-if="currentSortColumn === 'email'">{{
                                                            sortIcons.email
                                                        }}</span>
                                                    </button>
                                                </th>
                                                <th scope="col" class="border-r px-6 py-4 dark:border-neutral-500">
                                                    <button @click="sortByColumn('dateTime')">
                                                        Date & Time
                                                        <span v-if="currentSortColumn === 'dateTime'">{{
                                                            sortIcons.dateTime
                                                        }}</span>
                                                    </button>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr
                                                v-for="item in filterItems()"
                                                :key="item.id"
                                                class="border-b dark:border-neutral-500"
                                            >
                                                <td class="border-r px-4 py-4 dark:border-neutral-500">
                                                    <img class="" :src="item.book.img" />
                                                </td>
                                                <td
                                                    class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500"
                                                >
                                                    {{ item.book.title }}
                                                </td>
                                                <td
                                                    class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500"
                                                >
                                                    {{ item.book.price }}
                                                </td>
                                                <td
                                                    class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500"
                                                >
                                                    {{ item.booked.name }}
                                                </td>
                                                <td
                                                    class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500"
                                                >
                                                    {{ item.booked.email }}
                                                </td>
                                                <td
                                                    class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500"
                                                >
                                                    {{ formatDate(item.date) }} at {{ item.booked.selectedTime }}
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
        </div>
    </div>
</template>

<script>
import { format } from "date-fns";
import axios from "axios";

export default {
    data() {
        return {
            sortIcons: {
                title: "",
                price: "",
                name: "",
                email: "",
                dateTime: "",
                // Thêm các cột khác cần sắp xếp ở đây
            },
            currentSortColumn: null,
            sortBy: null,
            sortDirection: "asc",
            searchQuery: "",
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
        formatDate(date) {
            return format(new Date(date), "MMMM dd, yyyy");
        },
        filterItems() {
            // Lọc dữ liệu date & time dựa trên query
            return this.filteredItems.filter((item) => {
                const date = this.formatDate(item.date);
                const time = item.booked.selectedTime;

                return date.includes(this.searchQuery) || time.includes(this.searchQuery);
            });
        },
        sortByColumn(columnName) {
            // Ẩn biểu tượng sắp xếp ở cột trước đó (nếu có)
            if (this.currentSortColumn && this.currentSortColumn !== columnName) {
                this.sortIcons[this.currentSortColumn] = "";
            }

            // Nếu cùng một cột được nhấp liên tiếp, đảo chiều sắp xếp
            if (this.sortBy === columnName) {
                this.sortDirection = this.sortDirection === "asc" ? "desc" : "asc";
            } else {
                // Nếu nhấp vào một cột khác, đặt cột mới là cột sắp xếp
                this.sortBy = columnName;
                this.sortDirection = "asc"; // Mặc định sắp xếp tăng dần
            }

            // Sắp xếp dữ liệu dựa trên cột và chiều sắp xếp
            this.bookList.sort((a, b) => {
                let valueA, valueB;

                if (columnName === "dateTime") {
                    valueA = new Date(this.formatDate(a.date));
                    valueB = new Date(this.formatDate(b.date));
                } else {
                    valueA = a.book[columnName] || a.booked[columnName];
                    valueB = b.book[columnName] || b.booked[columnName];
                }

                if (this.sortDirection === "asc") {
                    if (valueA < valueB) return -1;
                    if (valueA > valueB) return 1;
                    return 0;
                } else {
                    if (valueA < valueB) return 1;
                    if (valueA > valueB) return -1;
                    return 0;
                }
            });

            // Cập nhật biểu tượng sắp xếp cho cột hiện tại
            this.sortIcons[columnName] = this.sortDirection === "asc" ? "↑" : "↓";

            // Cập nhật cột sắp xếp hiện tại
            this.currentSortColumn = columnName;
        },
    },
};
</script>

<style scoped>
.tab .activeTab {
    background: lightblue;
}

.tab .tabs {
    cursor: pointer;
    padding: 10px 20px;
    border: 1px solid #ccc;
    border-radius: 4px 4px 0 0;
}

img {
    display: block;
    max-width: 100px;
}
</style>
