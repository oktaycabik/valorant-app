import { parseRequestUrl } from "./utils";
import { Request } from "./request";
export const AgentDetailPage = {
  render: async () => {
    const req = parseRequestUrl();
    const request = new Request(`https://valorant-api.com/v1/agents`);

    const { data } = await request.getById(req.id);

    return `
      <div class="card mt-3">
      <div className="d-flex"> 
        <img style="width: 200px;" src="${
          data.displayIcon
        }" class="card-img-top" alt="...">
        <img style="width: 200px;" src="${
          data.bustPortrait ? data.bustPortrait : data.displayIcon
        }" class="card-img-top p-3" alt="...">
        <img style="width: 200px;" src="${
          data.fullPortrait ? data.fullPortrait : data.displayIcon
        }" class="card-img-top" alt="...">
        <img style="width: 200px;" src="${
          data.fullPortraitV2 ? data.fullPortraitV2 : data.displayIcon
        }" class="card-img-top" alt="...">
        </div>
        <div class="card-body">
          <h5 class="card-title text-danger">${
            data?.displayName }</h5>
          <p class="card-text">${data.description}</p>
          <p class="card-text">${
            data.developerName
          }</p>
          <p class="card-text">${
            data?.role?.displayName
          }</p>
          <div class="row">
          <div class="col">
          <h5 class="card-title text-danger">Abilities</h5>
  
        
         
          ${
            data?.abilities
              ? data?.abilities
                  ?.map(
                    (abili) =>
                      `
                 <p class="card-text">${
                   abili.displayName ? abili.displayName : ""
                 }</p>
            `
                  )
                  .join("\n")
              : ""
          }
          
          
          </div>
          <div class="col">
          <h5 class="card-title text-danger">Role</h5>
          <div className="card-text">${data?.role.displayName}</div>
          <div className="card-text">${data?.role.description}</div>
          </div>
          
          
        
        </div>
      </div>
        `;
  },
};
