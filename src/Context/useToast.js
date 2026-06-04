import { useContext } from "react";
import { ToastContext } from "./ToastContextProvider";

export const useToast = () => useContext(ToastContext);
