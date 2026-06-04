import { useState, useCallback } from "react";
import { ToastContext } from "./ToastContextProvider";

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);
  const showToast = useCallback((message, type = "success") => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(
      () => setToasts((prev) => prev.filter((t) => t.id !== id)),
      3000,
    );
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="fixed z-50 space-y-2 bottom-4 right-4">
        {toasts.map((t) => (
          <div
            key={t.id}
            className={`px-4 py-3 rounded shadow-lg text-white animate-slide-up ${t.type === "success" ? "bg-green-500" : "bg-blue-500"}`}
          >
            {t.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};
