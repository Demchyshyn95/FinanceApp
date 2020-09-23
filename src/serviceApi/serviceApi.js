import axios from "axios";
import {SET_CURRENCY} from "@/store/list/type";

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
        else if (el.target.value === 'month') {
            return year.toString() + month-1 + day.toString()
        }
    }
    const {data} = await axios.get(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=${defaultValue}&date=${fullData()}&json`);
    let mapData = {value:el.target.value,data:data}

    commit(SET_CURRENCY, mapData);

    /*getDataToComponent(mapData)*/
}
