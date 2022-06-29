import { Error404Screen } from "./Error404Screen";

import { HeaderCompenent } from "./HeaderCompenent";
import { HomeScreen } from "./HomeScreen";
import { DetailsPage } from "./DetailsPage";

import { parseRequestUrl } from "./utils";
import { MainScreen } from "./MainScreen";


const routes = {
  "/":MainScreen,
  "agents": HomeScreen,
  "weapons": HomeScreen,
  "gear": HomeScreen,
  "maps": HomeScreen,
  "agents/:id": DetailsPage,
  "weapons/:id": DetailsPage,
  "gear/:id": DetailsPage,
  "maps/:id": DetailsPage,
};

const getAllPost = async () => {
  const request = parseRequestUrl();
  const parseUrl =
    (request.resource ? `${request.resource}` : "/") +
    (request.id ? "/:id" : "") +
    (request.verb ? `/${request.verb}` : "");
  console.log("parseUrl", parseUrl);
  const screen = routes[parseUrl] ? routes[parseUrl] : Error404Screen;

  const navbarList = document.getElementById("navbar-list");
  navbarList.innerHTML = await HeaderCompenent.render();
  const postList = document.getElementById("posts");

  postList.innerHTML = await screen.render();
};

window.addEventListener("load", getAllPost);
window.addEventListener("hashchange", getAllPost);
