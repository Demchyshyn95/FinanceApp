import {GOT_CURRENCY, RESET_STATE} from "@/store/list/type";

export const mutations = {
    [GOT_CURRENCY]: (state, data) => {
        state.currency.push(data);

    },

    [RESET_STATE]: (state, data) => {
        state.currency = data

    }
}
