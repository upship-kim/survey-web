import axios from "axios";

export const client = axios.create({
    baseURL: "https://upship-survey.herokuapp.com/",
    withCredentials: true,
   
});
