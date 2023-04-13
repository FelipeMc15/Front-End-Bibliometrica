import axios, { AxiosRequestConfig } from "axios";
export default function axiosInterceptor() {

  function updateHeaders(request: AxiosRequestConfig) {
    const user = localStorage.getItem("user")
    const token = user ? JSON.parse(user).email : ""
    const newHeaders = {
      Authorization: token,
      "Content-Type": "application/json",
    };
    request.headers = newHeaders;
    return request;
  }
  axios.interceptors.request.use((request) => {
    if (request.url?.includes("richard")) {
      return request;
    } else {
      updateHeaders(request);
      return request;
    }
  });
  axios.interceptors.response.use(
    (response) => {
      console.log("response1", response);
      return response
    },
    (error) => {
        console.log("error",error)
        Promise.reject(error)
    }
  );
}
