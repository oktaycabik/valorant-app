import { parseRequestUrl } from "./utils";
import { Request } from "./request";
export const WeaponDetailPage = {
  render: async () => {
    const req = parseRequestUrl();
    const request = new Request(`https://valorant-api.com/v1/weapons`);

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
        <h5 class="card-title text-danger">${data?.displayName}</h5>
        <h5 class="card-title text-danger">${data?.shopData.cost} Cost</h5>
        <div class="row">
        <div class="d-flex flex-column col-12 col-md-3">
        <h5 class="card-title text-danger mt-3">Weapon Stats</h5>
        <div class="d-flex flex-row justify-content-between">
        <div class="card-text">Fire Rate:</div>
        <div class="badge bg-danger">${data.weaponStats?.fireRate}</div>
        </div>
   

        <div class="d-flex flex-row pt-1 justify-content-between">
        <div class="card-text">Magazine Size: </div>
        <span class="badge bg-danger">${data.weaponStats?.magazineSize}</span>
        </div>
        <div class="d-flex flex-row pt-1 justify-content-between">
        <div class="card-text">Run Speed Multiplier: </div>
        <span class="badge bg-danger">${
          data.weaponStats?.runSpeedMultiplier
        }</span>
        </div>
        <div class="d-flex flex-row pt-1 justify-content-between">
        <div class="card-text">Equip Time Seconds:</div>
        <span class="badge bg-danger">${
          data.weaponStats?.equipTimeSeconds
        }</span>
        </div>
        <div class="d-flex flex-row pt-1 justify-content-between">
        <div class="card-text">Reload Time Seconds: </div>
        <span class="badge bg-danger">${
          data.weaponStats?.reloadTimeSeconds
        }</span>
        </div>
        <div class="d-flex flex-row pt-1 justify-content-between">
        <div class="card-text">First Bullet Accuracy: </div>
        <span class="badge bg-danger">${
          data.weaponStats?.firstBulletAccuracy
        }</span>
        </div>
        <div class="d-flex flex-row pt-1 justify-content-between">
        <div class="card-text">Shotgun Pellet Count:</div>
        <span class="badge bg-danger">${
          data.weaponStats?.shotgunPelletCount
        }</span>
        </div>
        </div>
        <div class="d-flex flex-column  col-12 col-md-3 ">
        <h5 class="card-title text-danger  mt-3">Ads Stats</h5>
        <div class="d-flex flex-row pt-1 justify-content-between">
        <div class="card-text">Zoom Multiplier:</div>
        <span class="badge bg-danger">${
          data.weaponStats.adsStats?.zoomMultiplier ? data.weaponStats?.adsStats?.zoomMultiplier :"0"
        }</span>
        </div>
        <div class="d-flex flex-row pt-1 justify-content-between">
        <div class="card-text">Fire Rate:</div>
        <span class="badge bg-danger">${
          data.weaponStats?.adsStats?.fireRate ?   data.weaponStats?.adsStats?.fireRate:"0"
        }</span>
        </div>
        <div class="d-flex flex-row pt-1 justify-content-between">
        <div class="card-text">Run Speed Multiplier:</div>
        <span class="badge bg-danger">${
          data.weaponStats?.adsStats?.runSpeedMultiplier ?   data.weaponStats?.adsStats?.runSpeedMultiplier :"0"
        }</span>
        </div>
        <div class="d-flex flex-row pt-1 justify-content-between">
        <div class="card-text">Burst Count:</div>
        <span class="badge bg-danger">${
          data.weaponStats?.adsStats?.burstCount ? data.weaponStats?.adsStats?.burstCount:"0"
        }</span>
        </div>
        <div class="d-flex flex-row pt-1 justify-content-between">
        <div class="card-text">First Bullet Accuracy:</div>
        <span class="badge bg-danger">${
          data.weaponStats?.adsStats?.firstBulletAccuracy ?  data.weaponStats?.adsStats?.firstBulletAccuracy :"0"
        }</span>
        </div>
     
     
      </div>
    </div>
        `;
  },
};
