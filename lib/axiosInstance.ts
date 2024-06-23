import { ErrorToast } from "@/components/Toaster";
import axios from "axios";

export const imgUrl = "http://localhost:5001/";
export const baseUrl = "http://localhost:5001/api/";

const createAxiosInstance = () => {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  const instance = axios.create({
    baseURL: baseUrl,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  instance.interceptors.request.use(
    async (config) => {
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response.status === 401) {
        localStorage.clear();
        window.location.reload();
      }
      if (error.response && error.response.data && error.response.data.msg) {
        ErrorToast(error.response.data.msg || error?.message || error?.msg);
      }
      return Promise.reject(error);
    }
  );

  return instance;
};

export const axiosInstance = createAxiosInstance();
