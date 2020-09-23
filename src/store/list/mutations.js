import {SET_CURRENCY, SET_NEW_STATE} from "@/store/list/type";

export const mutations = {
    [SET_CURRENCY]: (state, data) => {
        state.currency.push(data);

    },

    [SET_NEW_STATE]: (state, days) => {
      state.currency  =  state.currency.filter(el => el.value !== days);
    }
}
