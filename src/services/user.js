import axios from "../utils/axios";

export function getUsers(){
  return axios.get('list_user')
}