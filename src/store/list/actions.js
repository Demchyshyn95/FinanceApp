import {GET_CURRENCY_TODAY, GOT_CURRENCY,} from "@/store/list/type";
import axios from 'axios'
import {getDataToComponent} from "@/components/getDataToComponent/getDataToComponent";

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
            const year = data.getFullYear();
            const months = function () {
                const month = (data.getMonth() + 1).toString()
                if (month >= 10) {
                    return month
                } else {
                    return ziro + month
                }
            }
            const day = data.getDate();
            if (el.target.value === 'today') {
                const fullData = year.toString() + months().toString() + day.toString()
                const {data} = await axios.get(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=${defaultValue}&date=${fullData}&json`);
                let mapData = new Map();
                mapData.set(el.target.value, data)
                commit(GOT_CURRENCY, mapData);
                {
                    getDataToComponent(mapData)
                }

            } else if (el.target.value === 'yesterday') {
                const sevenDaysAgo = year.toString() + months().toString() + (day - 1).toString()
                const {data} = await axios.get(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=${defaultValue}&date=${sevenDaysAgo}&json`);
                let mapData = new Map();
                mapData.set(el.target.value, data)
                commit(GOT_CURRENCY, mapData);
                {
                    getDataToComponent(mapData)
                }

            } else if (el.target.value === 'week') {
                const weekAgo = year.toString() + months().toString() + (day - 7).toString()
                const {data} = await axios.get(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=${defaultValue}&date=${weekAgo}&json`);
                let mapData = new Map();
                mapData.set(el.target.value, data)
                commit(GOT_CURRENCY, mapData);
                {
                    getDataToComponent(mapData)
                }

            } else if (el.target.value === 'month') {
                const monthAgo = year.toString() + months() - 1 + day.toString()
                const {data} = await axios.get(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=${defaultValue}&date=${monthAgo}&json`);
                let mapData = new Map();
                mapData.set(el.target.value, data)
                commit(GOT_CURRENCY, mapData);
                {
                    getDataToComponent(mapData)
                }
            }
        }
        else if (!el.target.checked){
            getDataToComponent(el.target.value,'!cheaked',)
        }
    }
}
