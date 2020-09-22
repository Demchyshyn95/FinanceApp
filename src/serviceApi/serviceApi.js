import axios from "axios";
import {GOT_CURRENCY} from "@/store/list/type";
import {getDataToComponent} from "@/components/getDataToComponent/getDataToComponent";

export const serviceApi = async (year, month, day, defaultValue, el, commit) => {

    const fullData = () => {
        if (el.target.value === 'today') {
            return year.toString() + month.toString() + day.toString()
        } else if (el.target.value === 'yesterday') {
            return year.toString() + month.toString() + (day-1).toString()
        }
        else if (el.target.value === 'week') {
            return year.toString() + month.toString() + (day-7).toString()
        }
        else if (el.target.value === 'month') {debugger
            return year.toString() + month-1 + day.toString()
        }
    }
    const {data} = await axios.get(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=${defaultValue}&date=${fullData()}&json`);
    let mapData = new Map();
    mapData.set(el.target.value, data)
    commit(GOT_CURRENCY, mapData);

    getDataToComponent(mapData)
}
