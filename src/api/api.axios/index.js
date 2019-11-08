import {apiServer} from "./api.service";
const baseURL = 'http://localhost:3000'
export const ERR_OK=200

export const EData =(url,type ='get')=>(params)=>apiServer[type](baseURL+url,params)

