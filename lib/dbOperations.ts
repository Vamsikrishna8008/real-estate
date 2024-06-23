// const token = localStorage.getItem("token");

import { ErrorToast, SuccessToast } from "@/components/Toaster";
import { axiosInstance } from "./axiosInstance";

export const getAllDetails = async ({ uri }: { uri: string }) => {
  try {
    const res = await axiosInstance.get(uri);

    return res.data;
  } catch (error: any) {
    ErrorToast(error.response.data.msg);
  }
};
export const postAll = async ({ uri, data }: { uri: string; data: any }) => {
  try {
    const res = await axiosInstance.post(uri, data);
    return res.data;
  } catch (error: any) {
    console.log(error, "errr");
    ErrorToast(error.response.data.msg);
  }
};
export const editMethod = async ({ uri, data }: { uri: string; data: any }) => {
  try {
    const res = await axiosInstance.patch(uri, data);
    return res.data;
  } catch (error: any) {
    ErrorToast(error.response.data.msg);
  }
};
export const deleteMethod = async (uri: string) => {
  try {
    const res = await axiosInstance.delete(uri);
    SuccessToast(res.data.msg);
  } catch (error: any) {
    ErrorToast(error.response.data.msg);
  }
};

export const updateMethod = async (uri: string) => {
  try {
    const res = await axiosInstance.patch(uri);
    return res.data;
  } catch (error: any) {
    ErrorToast(error.response.data.msg);
  }
};
