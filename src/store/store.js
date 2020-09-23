import Vue from "vue";
import Vuex from 'vuex'
import {listEl, listElModule} from "@/store/list/listEl";

Vue.use(Vuex)

export const store = new Vuex.Store({
    modules:{
        [listElModule]:listEl
    }
})
