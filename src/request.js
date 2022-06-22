import axios from "axios";
export class Request {
  constructor(url) {
    this.url = url;
  }
  get = async () => {
    const res = await axios(this.url);
    return res.data.posts;
  };
  getById=async(id)=>{
    const res = await axios(this.url+"/"+id);
    return res.data.post;
  }
}
