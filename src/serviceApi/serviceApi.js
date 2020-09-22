import axios from "axios";
import {GOT_CURRENCY} from "@/store/list/type";
import {getDataToComponent} from "@/components/getDataToComponent/getDataToComponent";

export const serviceApi = async (year,month,day,defaultValue,el,commit) => {
    const fullData = year.toString() + month.toString() + day.toString()
    const {data} = await axios.get(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=${defaultValue}&date=${fullData}&json`);
    let mapData = new Map();
    mapData.set(el.target.value, data)
    commit(GOT_CURRENCY, mapData);

    getDataToComponent(mapData)
}
