/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
import config from "@/config/config";

const GetTalent = async (payload: any) => {
  try {
      const { pages = 1 } = payload;
      const result = await axios.get(`${config.domain}/hr/talent/paging?page=${pages}`);

      return result;
  } catch (error) {
      return error;
  }
};

const GetOneTalent = async (payload: any) => {
  try {
      const { id = 0 } = payload;
      const result = await axios.get(`${config.domain}/hr/talent/view/${id}`);
      
      return result;
  } catch (error) {
      return error;
  }
};

const SearchTalent = async (payload: any) => {
  try {
      const { name = '', status = ''} = payload;
      const result = await axios.get(`${config.domain}/hr/talent/search?name=${name}&status=${status}`);
      
      return result;
  } catch (error) {
      return error;
  }
};

const EditStatus = async (payload: any) => {
  try {
      const { id = 0 } = payload;
      console.log(`Payload: ${JSON.stringify(payload)}`);
      
      const result = await axios.put(`${config.domain}/hr/talent/switchStatus/${id}`, payload);
      return result;
  } catch (error) {
      return error;
  }
}

const CreateContract = async (payload: any) => {
  try {
      const { id = 0 } = payload;
      console.log(`Payload: ${JSON.stringify(payload)}`);
      
      const result = await axios.put(`${config.domain}/hr/talent/create/${id}`, payload);
      return result;
  } catch (error) {
      return error;
  }
}

export default {
  GetTalent,
  GetOneTalent,
  SearchTalent,
  EditStatus,
  CreateContract,
};