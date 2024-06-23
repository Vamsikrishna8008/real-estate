import { toast } from "react-hot-toast";
export const SuccessToast = (message: string) => {
  toast.success(message, {
    position: "top-center",
    duration: 2300,
  });
};
export const ErrorToast = (message: string) => {
  toast.error(message, {
    position: "top-center",
    duration: 2300,
  });
};
