import axios from "axios";
import config from "@/config/config";

const GetEmployee = async (payload: any) => {
    try {
        const { pageno = 1, pagesize = 4} = payload;
        const result = await axios.get(`${config.domain}/employees/paging?pageno=${pageno}&pagesize=${pagesize}`);
        return result.data;
    } catch (error) {
        return error;
    }
}

export default {
    GetEmployee, 
};