import axios from "axios";
import config from "@/config/config";

const GetUser = async (userId: number) => {
  try {
    const result = await axios.get(`${config.domain}/users/${userId}`);
    return result.data;
  } catch (error) {
    throw error;
  }
};

const GetUserResume = async (userId: number) => {
  try {
    const result = await axios.get(`${config.domain}/users/${userId}/resume`);
    return result.data;
  } catch (error) {
    throw error;
  }
};

export default {
  GetUser,
};