import {GET_STATE} from "@/store/list/type";

export const getters = {
[GET_STATE]:(state)=>{
    return state.currency;
}
}

