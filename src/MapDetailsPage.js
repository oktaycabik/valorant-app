import { parseRequestUrl } from "./utils";
import { Request } from "./request";
export const MapDetailPage = {
  render: async () => {
    const req = parseRequestUrl();
    const request = new Request(`https://valorant-api.com/v1/maps`);

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
        <h5 class="card-title">${
          data?.displayName ? data.displayName : ""
        } </h5>
    
    
      </div>
      
    </div>
    
        `;
  },
};
