import {actions} from "@/store/list/actions";
import {mutations} from "@/store/list/mutations";
import {getters} from "@/store/list/gettes";
import {state} from "@/store/list/statee";

const namespaced = true
export const listElModule = 'listEl';
export const listEl = {
    namespaced,
    actions,
    mutations,
    getters,
    state
}
