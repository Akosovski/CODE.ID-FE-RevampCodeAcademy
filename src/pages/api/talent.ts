/* eslint-disable import/no-anonymous-default-export */
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
      const { pages = 1, limit = 4} = payload;
      const result = await axios.get(`${config.domain}/talent/paging?page=${pages}&limit=${limit}`);

      return result;
  } catch (error) {
      return error;
  }
};

const findOneTalent = async (payload: any) => {
  try {
      const result = await axios.get(`${config.domain}/talent/details/${payload}`);
      return result;
  } catch (error) {
      return error;
  }
};


export default {
  GetData,
  GetTalent,
  findOneTalent,
};