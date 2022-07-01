import { Request } from "./request";
import { parseRequestUrl } from "./utils";

export const MainScreen = {
  render: async () => {
    const req = parseRequestUrl();
    const request = new Request(`https://valorant-api.com/v1/agents`);
    const { data } = await request.get();

    return `
    
    ${data
      .map(
        (data) =>
          `
        <div class="col-lg-3 col-md-4 col-sm-6 col-12 mt-3">
          <div class="card" style="width: 18rem;">
            <img src="${data.displayIcon}" class="card-img-top p-2"  alt="...">
            <div class="card-body">
              <h5 class="card-title">${data.displayName}</h5>
              <p class="card-text">${
                data.description ? data.description : ""
              }</p>
              <a href="/#/agents${req.resource}/${
            data.uuid
          }" class="btn btn-danger">Go somewhere</a>
            </div>
          </div>
        </div>
        `
      )
      .join("\n")}

    `;
  },
};
