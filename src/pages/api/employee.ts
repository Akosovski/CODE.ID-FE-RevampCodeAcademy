/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
import config from "@/config/config";

const GetEmployee = async (payload: any) => {
    try {
        const { pages = 1 } = payload;
        const result = await axios.get(`${config.domain}/employee/paging?page=${pages}`);

        return result;
    } catch (error) {
        return error;
    }
}

export default {
    GetEmployee, 
};