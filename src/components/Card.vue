<template>
  <div class="bg-gray-100 ">
      <div class="max-w-auto mx-64 py-20">
      <div><h1 class="text-4xl mb-5">Browse All Topics</h1></div>
    <div class="mt-8 grid lg:grid-cols-4 gap-10 container mx-auto px-4">
      <div v-for="topic in Topics" :key="topic.id" class="card ">
        <div class="group relative ">
          <div class=""><i :class="topic.icon" ></i></div>
          <div class="font-semibold mb-2">{{ topic.title }}</div>
          <div v-for="content in topic.content" :key="content">
            <p class="truncate leading-7 ">{{content}}</p>
          </div>
        </div>
        <p class="font-semibold">See all guides</p>
      </div>
    </div>
  </div></div>
</template>

<script>
import { useStore } from "vuex";
import { ref, reactive, computed } from "vue";
export default {
  setup() {
    const store = useStore();

    return {
      Topics: computed(() => store.getters["topicsStore/getdisplayTopics"]),
      // searchedTopics: computed(() => store.getters["topicsStore/getSearchedTopics"]),
    };
  },
};
</script>
<style></style>
