import axios from 'axios'
const  instance = axios.create({
    baseURL:'https://api.cat-shop.penkuoer.com'

})

export function get(url,config){
  return instance.get(url,config)
}
export function post(url,data,config){
  return instance.post(url,data,config)
}
export function put(url,data,config){
  return instance.put(url,data,config)
}
export function del(url,config){
  return instance.delete(url,config)
}
