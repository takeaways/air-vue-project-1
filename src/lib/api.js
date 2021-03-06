import axios from "axios";
import router from "../router";
const DOMAIN = "http://localhost:3000";
const UNAUTHORIZED = 401;

const instance = axios.create({
  baseURL: DOMAIN
});

const setAuthInHeader = () => {
  const token = localStorage.getItem("token");
  return token ? token : null;
};

instance.interceptors.request.use(config => {
  return {
    ...config,
    headers: {
      Authorization: setAuthInHeader()
    }
  };
});

const onUnauthorized = () => {
  router.replace("/login");
};

const request = (method, url, data) => {
  return instance({
    method,
    url,
    data
  })
    .then(({ data }) => data)
    .catch(error => {
      const { status } = error.response;

      if (status === UNAUTHORIZED) return onUnauthorized();
      throw Error(error);
    });
};

export const board = {
  getAll() {
    return request("get", "/boards");
  }
};

export const user = {
  login(email, password) {
    return request("post", "/login", { email, password });
  }
};
