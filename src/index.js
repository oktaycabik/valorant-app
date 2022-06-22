import { Error404Screen } from "./Error404Screen";
import { HomeScreen } from "./HomeScreen";
import { PostScreen } from "./PostScreen";

import { parseRequestUrl } from "./utils";


const routes={
    "/":HomeScreen,
    "post/:id":PostScreen
}

const getAllPost =async()=>{
    const request=parseRequestUrl()
    const parseUrl=(request.resource ? `${request.resource}`:"/") +
    (request.id ? "/:id" : '') +
    (request.verb ?`/${request.verb}`:"")
    console.log('parseUr', parseUrl)
    const screen=routes[parseUrl]? routes[parseUrl]:Error404Screen
    const postList = document.getElementById("posts");
    postList.innerHTML=await screen.render()
   console.log('process.env.PORT', process.env.PORT)
}
window.addEventListener("load",getAllPost)
window.addEventListener("hashchange",getAllPost)