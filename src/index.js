import { Error404Screen } from "./Error404Screen";

import { HeaderCompenent } from "./HeaderCompenent";
import { HomeScreen } from "./HomeScreen";


import { parseRequestUrl } from "./utils";
import { MainScreen } from "./MainScreen";
import { AgentDetailPage } from "./AgentDetailsPage";
import { WeaponDetailPage } from "./WeaponDetailsPage";
import { GearDetailPage } from "./GearDetailPage";
import { MapDetailPage } from "./MapDetailsPage";


const routes = {
  "/":MainScreen,
  "agents": HomeScreen,
  "weapons": HomeScreen,
  "gear": HomeScreen,
  "maps": HomeScreen,
  "agents/:id": AgentDetailPage,
   "weapons/:id": WeaponDetailPage,
   "gear/:id": GearDetailPage,
   "maps/:id": MapDetailPage,
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
