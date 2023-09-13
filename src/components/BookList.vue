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
        <div class="tabs">
            <div class="tabLinks">
                <span
                    class="tab"
                    v-for="tab in tabs"
                    :key="tab.id"
                    @click="selectedTabs = tab"
                    :class="{ activeTab: selectedTabs === tab }"
                    >{{ tab.status }}</span
                >
            </div>
            <div class="tab-content">
                <slot name="content">
                    <p v-if="selectedTabs">Nội dung của tab {{ selectedTabs.content }}</p>
                </slot>
            </div>
        </div>
        <!-- <div>
            <ul class="tabs">
                <li v-for="tab in tabs" :key="tab.id" :class="{ active: tab.active }">
                    <a @click="selectTab(tab)">{{ tab.label }}</a>
                </li>
            </ul>
            <div class="tab-content">
                <div v-for="tab in tabs" :key="tab.id" :class="{ active: tab.active }">
                    {{ tab.content }}
                </div>
            </div>
        </div> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedTabs: "Đã mua",
            tabs: [
                {
                    id: 1,
                    status: "Đã mua",
                    content: "tab 1",
                },
                {
                    status: "Đã mua",
                    content: "tab 111",
                },
                {
                    id: 2,
                    status: "Đã hoàn thành",
                    content: "tab 2",
                },
                {
                    id: 3,
                    status: "Đã hủy",
                    content: "tab 3",
                },
            ],
        };
    },
    methods: {},
};
</script>

<style>
.tabs .activeTab {
    background: wheat;
}
/* .tabs {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

.tabs li {
    cursor: pointer;
    padding: 10px;
    border-bottom: 1px solid #ccc;
}

.tabs li.active {
    background-color: #ccc;
}

.tab-content {
    display: none;
}

.tab-content.active {
    display: block;
} */
</style>
