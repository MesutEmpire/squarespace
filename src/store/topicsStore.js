import {topics} from "../topics";

export const topicsStore = {
    namespaced: true,
    state: {
        inputValue : false,
        allTopics : topics,
        searchedTopic : null,

    },
    getters: {
        getAllTopics (state){
            return state.allTopics;
        },
        getSearchedTopics(state){
            return state.searchedTopic
        },
        getdisplayTopics(state){
         
            if (state.inputValue == false) {
                return state.allTopics;
            }
            else {
                return state.searchedTopic
            }
            
        }
    },
    mutations: {
        searchData(state,payload){
        if(payload == undefined){
            state.inputValue = false
        }
        else{
            state.inputValue = true
            state.searchedTopic = state.allTopics.filter((topic) =>
            topic.title.toLowerCase().includes(payload.toLowerCase())
          );
        }
      
      
        }
    },
    actions: {

    },
    modules: {
    }
  }
  