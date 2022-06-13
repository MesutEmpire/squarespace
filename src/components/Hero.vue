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
            class="self-center text-white text-xl font-semibold whitespace-nowrap uppercase"
            >Squarespace</span
          >
        </a>
      </div>
    </nav>

    <form class="flex justify-center items-center mt-24">
      <label for="search" class="sr-only">Search</label>
      <div class="relative w-96 md:w-3/5 mx-3">
        <div
          class="flex absolute inset-y-0 right-5 items-center pl-3 pointer-events-none text-xl text-black"
        >
         <i class="bi bi-search"></i>
        </div>
        <input
          v-model="search"
          type="text"
          id="search"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search"
          required=""
        />
      </div>
     
    </form>
    {{searchedTopics}}

    <div class="mt-10">
      <div class="inline-block">Popular topics: 
        <span  class="inline-block" v-for="popular in popularTopics" :key="popular.id">
        <p v-if="popular.id <4" class="font-semibold"> {{ popular.title }},  </p>
        </span>
      </div>
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
    watchEffect(() => {
    
        store.commit('topicsStore/searchData',search.value)
      
    });

    return {
      search,
      popularTopics: computed(() => store.getters["topicsStore/getAllTopics"]),
      
    };
  },
};
</script>
