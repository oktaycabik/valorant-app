import { Request } from "./request";
import { parseRequestUrl } from "./utils";


export const HomeScreen = {
  render: async () => {
    const req = parseRequestUrl();
    const request = new Request(`https://valorant-api.com/v1/${req.resource}`);
    const { data } = await request.get();
    

    return `
    
    ${data.map(
      (data) =>
        `
        <div class="col-lg-3 mt-3">
          <div class="card" style="width: 18rem;">
            <img src="${data.displayIcon}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${data.displayName}</h5>
              <p class="card-text">${data.description? data.description : ""}</p>
              <a href="/#/${req.resource}/${data.uuid}" class="btn btn-danger">Go somewhere</a>
            </div>
          </div>
        </div>
        `
    ) .join('\n')}

    `;
  },
};
