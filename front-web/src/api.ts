import axios from "axios";

const API_URl ='http://localhost:8080'
export function fetchProducts(){
   return axios(`${API_URl}/products`) 
}