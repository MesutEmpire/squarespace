<template>
  <div class="bg-black h-96 text-white">
    <nav class="px-2 sm:px-4 py-2.5 rounded">
      <div
        class="container flex flex-wrap justify-between items-center mx-auto"
      >
        <a href="https://flowbite.com" class="flex items-center">
          <img
            src="../assets/Screenshot_from_2022-06-13_16-38-41-removebg-preview.png"
            class="mr-3 h-6 sm:h-9"
            alt="Squarespace Logo"
          />
          <span
            class="self-center text-xl font-semibold whitespace-nowrap uppercase"
            >Squarespace</span
          >
        </a>
      </div>
    </nav>

    <form class="flex justify-center items-center mt-24">
      <label for="simple-search" class="sr-only">Search</label>
      <div class="relative w-96">
        <div
          class="flex absolute inset-y-0 right-0 items-center pl-3 pointer-events-none"
        >
          <svg
            class="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <input
          v-model="search"
          type="text"
          id="search"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search"
          required=""
        />
      </div>
     
    </form>
    {{searchedTopics}}

    <div class="mt-10">
      <p>Popular Topic:</p>
    </div>
  </div>
</template>
<script>
import { computed, ref, watchEffect } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const search = ref();

    // const searchData = () => {
      
    // };

    watchEffect(() => {
      console.log(search.value)
        store.commit('topicsStore/searchData',search.value)
      
    });

    return {
      search,
      
      
    };
  },
};
</script>
