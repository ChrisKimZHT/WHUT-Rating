import axios from "axios";

const baseURL = "http://192.168.0.3:4523/m1/2362426-0-default/";

export const service = {
  list: {
    types: () => axios({
      baseURL,
      method: "GET",
      url: "/list/types",
    }),
    regions: () => axios({
      baseURL,
      method: "GET",
      url: "/list/regions",
    }),
    board: (regionId, typeId, optionId, methodId, page = 0) => axios({
      baseURL,
      method: "GET",
      url: "/list/board",
      params: {
        regionId,
        typeId,
        optionId,
        methodId,
        page,
      }
    }),
    search: (keyword, page) => axios({
      baseURL,
      method: "GET",
      url: "/list/search",
      params: {
        keyword,
        page,
      }
    }),
  },
  shop: {
    detail: (shopId) => axios({
      baseURL,
      method: "GET",
      url: "/shop/detail",
      params: {
        shopId,
      }
    }),
  }
}