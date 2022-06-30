import { parseRequestUrl } from "./utils";
import { Request } from "./request";
export const GearDetailPage = {
  render: async () => {
    const req = parseRequestUrl();
    const request = new Request(`https://valorant-api.com/v1/gear`);

    const { data } = await request.getById(req.id);

    return `
         gear
        `;
  },
};
