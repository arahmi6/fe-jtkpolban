import axios from "axios";
//sconst getters = {};
const instance = axios.create({
  headers: {
    "Content-Type": "application/json"
  },
  baseURL: process.env.VUE_APP_CMS_API
 
});

export default instance;