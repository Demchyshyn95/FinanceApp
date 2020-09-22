import {GET_CURRENCY_TODAY} from "@/store/list/type";
import {getDataToComponent} from "@/components/getDataToComponent/getDataToComponent";
import {serviceApi} from "@/serviceApi/serviceApi";

export const actions = {

    [GET_CURRENCY_TODAY]: async ({commit}, el) => {
        const usd = document.getElementById('inlineChecbox1');
        const eur = document.getElementById('inlineChecbox2');
        const rub = document.getElementById('inlineChecbox3');
        const pln = document.getElementById('inlineChecbox4');

        if (el.target.checked) {
            const currencyArray = []
            currencyArray.push(usd, eur, rub, pln)
            const {defaultValue} = currencyArray.find(el => el.checked);
            const ziro = '0'
            const data = new Date();
            const day = data.getDate();
            const months = function () {
                const month = (data.getMonth() + 1).toString()
                if (month >= 10) {
                    return month
                } else {
                    return ziro + month
                }
            }
            const year = data.getFullYear();

            if (el.target.value === 'today') {
                serviceApi(year,months().toString(),day,defaultValue,el,commit)
            } else if (el.target.value === 'yesterday') {
                serviceApi(year,months().toString(),day,defaultValue,el,commit)

            } else if (el.target.value === 'week') {
                serviceApi(year,months().toString(),day,defaultValue,el,commit)

            } else if (el.target.value === 'month') {
                serviceApi(year,months().toString(),day,defaultValue,el,commit)

            }
        }
        else if (!el.target.checked){
            getDataToComponent(el.target.value,'!cheaked',)
        }
    }
}
