import {defineStore} from "pinia";

export const useGlobalStore = defineStore({
    id: "global",
    state: () => ({
        recentlyView: [],
    }),

    actions:{
        addToMyRecentlyViewed(index){
            this.recentlyView.unshift(index);
        },
    }
    
});