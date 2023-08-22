/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
import config from "@/config/config";

const GetTalent = async (payload: any) => {
  try {
      const { pages = 1, limit = 5} = payload;
      const result = await axios.get(`${config.domain}/talent/paging?page=${pages}&limit=${limit}`);

      return result;
  } catch (error) {
      return error;
  }
};

const GetOneTalent = async (payload: any) => {
  try {
      const { id = 1} = payload;
      const result = await axios.get(`${config.domain}/talent/details/${id}`);
      
      return result;
  } catch (error) {
      return error;
  }
};

export default {
  GetTalent,
  GetOneTalent,
};