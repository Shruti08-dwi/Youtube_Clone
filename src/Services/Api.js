import axios from "axios";
const KEY ="AIzaSyBqxpPHn06ywzlBTUU916sMXKnaM2sBzes";

// Axios library
// promise based library to perform http request like get , post , put , patch , delete ,head methods
 export const baseParams = {
     part : "snippet",
     maxResult : 10,
     key : KEY,
 };
 export default axios.create({
 baseURL : "https://www.googleapis.com/youtube/v3",
 });
//  window.fetch()
//  axios.get()
//  axios.post()
//  axios.push()
//  axios.put()
//  axios.delete()
