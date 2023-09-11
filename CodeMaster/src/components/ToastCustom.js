import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const showErrorToast = (msg) => {
  toast.error(msg || `Error`, {
    position: "top-center",
    autoClose: 1500,
    theme: "dark",
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const showSuccessToast = (msg) => {
  toast.success(msg || `Success`, {
    position: "top-center",
    autoClose: 1500,
    theme: "dark",
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const showWarningToast = (msg) => {
  toast.warning(msg || `Something went wrong! Please try again.`, {
    position: "top-center",
    autoClose: 1500,
    theme: "dark",
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
