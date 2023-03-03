import axios from "axios";

const baseURL = "http://192.168.0.3:4523/m1/2362426-0-default/";

export const service = {
  list: {
    types: () => axios({
      baseURL,
      method: "GET",
      url: "/list/types",
    })
  },
}