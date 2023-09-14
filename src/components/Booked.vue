<template>
    <div class="container mx-auto px-4 py-4 h-screen">
        <!-- Header -->
        <!-- <div class="py-5">
            <router-link :to="{ name: 'book' }" class="flex items-center"
                ><i class="fa-solid fa-chevron-left mr-2"></i>
                <p>Back</p>
            </router-link>
        </div> -->
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
                                type="text"
                                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            />
                        </div>
                        <div class="">
                            <label for="" class="text-xl font-light block mb-2">Email *</label>
                            <input
                                type="text"
                                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            />
                        </div>
                        <div class="col-span-2">
                            <label for="" class="text-xl font-light block mb-2">Phone Number</label>
                            <input
                                type="text"
                                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            />
                        </div>
                        <div class="col-span-2">
                            <label for="" class="text-xl font-light block mb-2">Add Your Message</label>
                            <textarea
                                type="text"
                                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            ></textarea>
                        </div>
                    </div>
                </div>

                <!-- Credit Card -->
                <!-- <div>
                    <div>
                        <p class="py-4">Book Details</p>
                        <div class="py-2">
                             <p>{{ book.title }}</p>
                            <p>at{{ slectedTime }}</p>
                        </div>
                         <div class="py-4">
                            <p>San Francisco</p>
                            <p>Staff Member #1</p>
                            <p>{{ book.time }}</p>
                            <p>{{ book.price }}</p>
                        </div> 
                        <hr />
                        <div class="px-6 py-5 pt-9">
                            <button
                                class="border w-full px-8 py-2 text-lg text-white font-light bg-[#c63f60] hover:bg-[#78343b] hover:text-white border-[#78343b] transition duration-500"
                            >
                                Book Now
                            </button>
                        </div>
                    </div>
                </div> -->
            </div>
        </form>
    </div>
</template>

<script>
import { reactive, computed } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, email, helpers } from "@vuelidate/validators";
import axios from "axios";
import Datepicker from "vue2-datepicker";

export default {
    name: "BookForm",
    props: ["times"],
    components: {
        Datepicker,
    },

    // data() {
    //     return {
    //         booked: {
    //             name: "",
    //             email: "",
    //             phone: "",
    //             message: "",
    //         },
    //     };
    // },
    mounted() {
        // axios
        //     .get("http://localhost:3000/books/" + this.id)
        //     .then((response) => {
        //         this.book = response.data;
        //     })
        //     .catch((error) => {
        //         console.error(error);
        //     });
    },
    methods: {
        // async save() {
        //     this.v$.$validate();
        //     if (!this.v$.$error) {
        //         console.log("valid");
        //         const data = {
        //             name: this.state.name,
        //             phone: this.state.phone,
        //             message: this.state.message,
        //             email: this.state.email,
        //         };
        //         console.log(data);
        //         let results = await axios.post(" http://localhost:3000/booked", data);
        //         if (results.status == 201) {
        //             localStorage.setItem("book", JSON.stringify(results.data));
        //         }
        //     } else {
        //         console.log("invalid");
        //     }
        // },
    },
    // methods: {
    //     save() {
    //         console.log(this.booked);
    //     },
    // },
};
</script>

<style>
/* .selected {
    background: #3b58b81f;
    border: rgb(37, 37, 221) 1px solid;
} */
/* .mx-calendar {
    width: 500px;
} */
</style>
