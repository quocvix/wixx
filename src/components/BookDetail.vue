<template>
    <div v-if="book" class="container mx-auto px-4 py-4 h-screen">
        <div v-if="isVisible">
            <!-- Header -->
            <div class="py-5">
                <router-link :to="{ name: 'book' }" class="flex items-center"
                    ><i class="fa-solid fa-chevron-left mr-2"></i>
                    <p>Back</p>
                </router-link>
            </div>
            <!-- Title -->
            <div class="py-6">
                <p class="text-4xl font-light mb-5">{{ book.title }}</p>
                <p class="mb-5">Check out our availability and book the date and time that works for you</p>
            </div>
            <!-- Date & Time -->
            <div class="grid md:grid-cols-3 gap-10">
                <!-- Select Date -->
                <div class="col-span-2">
                    <div class="flex justify-between items-center py-4">
                        <p class="text-xl">Select a Date and Time</p>
                        <p>Timezone: (GMT+7) Múi giờ Đông Dương</p>
                    </div>
                    <hr />
                    <div class="py-4">
                        <div class="flex justify-between">
                            <div>
                                <datepicker
                                    open
                                    v-model="date"
                                    minDate="today - 1 days"
                                    maxDate="today + 2 days"
                                    style=""
                                />
                            </div>
                            <div class="flex flex-col justify-center items-center">
                                <div class="mb-3">
                                    <p v-if="!validate()">Ngày đã chọn không hợp lệ</p>
                                    <p v-if="validate()">Ngày đã chọn: {{ format(date) }}</p>
                                </div>
                                <div v-if="validate()">
                                    <div class="grid grid-cols-2 gap-3">
                                        <div
                                            class="border border-black cursor-pointer"
                                            v-for="time in times"
                                            :key="time.id"
                                            @click="selectTime(time.value)"
                                            :class="{ selected: booked.selectedTime === time.value }"
                                        >
                                            <a class="px-10 py-2 block" @click="handleClick(time.id)">{{
                                                time.value
                                            }}</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Credit Card -->
                <div>
                    <div>
                        <p class="py-4">Service Details</p>
                        <div class="py-2">
                            <p>{{ book.title }}</p>
                            <p>{{ format(date) }} at {{ booked.selectedTime }}</p>
                        </div>
                        <div class="py-4">
                            <p>San Francisco</p>
                            <p>Staff Member #1</p>
                            <p>{{ book.time }}</p>
                            <p>{{ book.price }}</p>
                        </div>
                        <hr />
                        <div class="px-6 py-5 pt-9">
                            <!-- <router-link :to="{ name: 'booked' }" class="flex items-center"> -->
                            <button
                                @click="hide()"
                                class="border w-full px-8 py-2 text-lg text-white font-light bg-[#c63f60] hover:bg-[#78343b] hover:text-white border-[#78343b] transition duration-500"
                            >
                                Next
                            </button>
                            <!-- </router-link> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-show="isInputVisible">
            <!-- Header -->
            <div class="py-5">
                <a @click="show()" class="flex items-center cursor-pointer"
                    ><i class="fa-solid fa-chevron-left mr-2"></i>
                    <p>Back</p>
                </a>
            </div>
            <!-- Title -->
            <div class="pt-6 pb-3">
                <p class="text-2xl font-light mb-1">Fill out your details</p>
            </div>
            <hr />
            <div class="py-6">
                <p class="text-xl font-light mb-5">Tell us a bit about yourself</p>
            </div>
            <!-- Date & Time -->
            <form action="" @submit.prevent="save">
                <div class="grid md:grid-cols-3 gap-10">
                    <!-- Select Date -->
                    <div class="col-span-2">
                        <div class="grid grid-cols-2 gap-5">
                            <div class="">
                                <label for="" class="text-xl font-light block mb-2">Name *</label>
                                <input
                                    v-model="booked.name"
                                    :class="{ errorinput: errors.name }"
                                    type="text"
                                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                />
                                <div class="text-sm text-red-500 pt-2" v-if="errors.name">{{ errors.name }}</div>
                            </div>
                            <div class="">
                                <label for="" class="text-xl font-light block mb-2">Email *</label>
                                <input
                                    v-model="booked.email"
                                    :class="{ errorinput: errors.email }"
                                    type="text"
                                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                />
                                <div class="text-sm text-red-500 pt-2" v-if="errors.name">{{ errors.name }}</div>
                            </div>
                            <div class="col-span-2">
                                <label for="" class="text-xl font-light block mb-2">Phone Number</label>
                                <input
                                    v-model="booked.phone"
                                    type="text"
                                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                />
                            </div>
                            <div class="col-span-2">
                                <label for="" class="text-xl font-light block mb-2">Add Your Message</label>
                                <textarea
                                    v-model="booked.message"
                                    type="text"
                                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                ></textarea>
                            </div>
                        </div>
                    </div>
                    <!-- Credit Card -->
                    <div>
                        <div>
                            <p class="py-4">Service Details</p>
                            <div class="py-2">
                                <p>{{ book.title }}</p>
                                <p>{{ format(date) }} at {{ booked.selectedTime }}</p>
                            </div>
                            <div class="py-4">
                                <p>San Francisco</p>
                                <p>Staff Member #1</p>
                                <p>{{ book.time }}</p>
                                <p>{{ book.price }}</p>
                            </div>
                            <hr />
                            <div class="px-6 py-5 pt-9">
                                <!-- <router-link :to="{ name: 'booked' }" class="flex items-center"> -->
                                <button
                                    class="border w-full px-8 py-2 text-lg text-white font-light bg-[#c63f60] hover:bg-[#78343b] hover:text-white border-[#78343b] transition duration-500"
                                >
                                    Book Now
                                </button>
                                <!-- </router-link> -->
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import Datepicker from "vue2-datepicker";
import Booked from "../components/Booked.vue";

export default {
    components: {
        Datepicker,
        Booked,
    },
    props: ["id"],

    data() {
        return {
            status: "daMua",
            isVisible: true,
            isInputVisible: false,
            book: null,
            booked: {
                name: "",
                email: "",
                phone: "",
                message: "",
                selectedTime: "10:00 am",
            },
            errors: {
                name: "",
                email: "",
            },

            date: new Date(),

            times: [
                {
                    id: 1,
                    value: "10:00 am",
                },
                {
                    id: 2,
                    value: "10:30 am",
                },
                {
                    id: 3,
                    value: "11:00 am",
                },
                {
                    id: 4,
                    value: "11:30 am",
                },
                {
                    id: 5,
                    value: "12:00 am",
                },
                {
                    id: 6,
                    value: "12:30 am",
                },
                {
                    id: 7,
                    value: "1:00 pm",
                },
                {
                    id: 8,
                    value: "1:30 pm",
                },
                {
                    id: 9,
                    value: "2:00 pm",
                },
                {
                    id: 10,
                    value: "2:30 pm",
                },
                {
                    id: 11,
                    value: "3:00 pm",
                },
                {
                    id: 12,
                    value: "3:30 pm",
                },
            ],
        };
    },
    mounted() {
        axios
            .get("http://localhost:3000/books/" + this.id)
            .then((response) => {
                this.book = response.data;
            })
            .catch((error) => {
                console.error(error);
            });
    },
    methods: {
        validateB() {
            let isValid = true;
            this.errors = {
                name: "",
                email: "",
            };
            if (!this.booked.name) {
                this.errors.name = "This field is required";
                isValid = false;
            }
            if (!this.booked.email) {
                this.errors.email = "This field is required";
                isValid = false;
            }
            return isValid;
        },
        save() {
            const data = {
                booked: this.booked,
                date: this.date,
                book: this.book,
                status: this.status,
            };
            if (this.validateB()) {
                axios
                    .post("http://localhost:3000/bookList", data)
                    .then((response) => {
                        this.data = response.data;
                    })
                    .catch((error) => {
                        console.error(error);
                    });

                console.log(this.booked);
            }
        },
        validate() {
            // Kiểm tra xem ngày đã chọn có nằm trong khoảng thời gian cho phép hay không
            const today = new Date();
            const minDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
            const maxDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 2);
            return this.date >= minDate && this.date <= maxDate;
        },
        format(date) {
            // Định dạng ngày theo yêu cầu
            const day = new Date(date).getDay();
            const dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            return `${dayName[day]}, August ${new Date(date).getDate()}`;
        },
        handleClick(id) {
            this.time = this.times.find((time) => time.id === id).time;
        },
        selectTime(time) {
            this.booked.selectedTime = time;
        },
        hide() {
            this.isVisible = false;
            this.isInputVisible = true;
        },
        show() {
            this.isVisible = true;
            this.isInputVisible = false;
        },
    },
};
</script>

<style>
.errorinput {
    border: #dd2840 1px solid;
}
.selected {
    background: #3b58b81f;
    border: rgb(37, 37, 221) 1px solid;
}
/* .mx-calendar {
    width: 500px;
} */
</style>
