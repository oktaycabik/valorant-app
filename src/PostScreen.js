import { parseRequestUrl } from "./utils"
import { Request } from "./request"
export const PostScreen ={
 
 render:async()=>{
    const request=new Request("http://localhost:5000/api/post")
    const req=parseRequestUrl()
    const post =await request.getById(req.id)
    
    return (
    `<div>${post?.content}</div>`
    )
 }
}