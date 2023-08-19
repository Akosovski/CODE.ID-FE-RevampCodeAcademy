import axios from "axios";
import config from "@/config/config";

export const GetData = async () => {
  try {
    const result = await axios.get(`${config.domain}/talent`);
    return result.data;
  } catch (error) {
    return error;
  }
};

const GetTalent = async (payload: any) => {
  try {
      const { page = 1, limit = 10} = payload;
      const result = await axios.get(`${config.domain}/talent/paging?page=${page}&limit=${limit}`);

      return result;
  } catch (error) {
      return error;
  }
};

export default {
  GetData,
  GetTalent,
};