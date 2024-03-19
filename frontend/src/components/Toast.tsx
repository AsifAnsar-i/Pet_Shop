import { useEffect } from "react";

type ToastProps = {
  message: string;
  type: "ERROR" | "SUCCESS";
  onClose: () => void;
};

export const Toast = ({ message, type, onClose }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`fixed z-40 top-4 right-4 rounded-md ${
        type === "SUCCESS" ? "bg-green-600" : "bg-red-600"
      } max-w-md text-white shadow-md p-4`}
      style={{ backgroundColor: type === "SUCCESS" ? "#13C296" : "#FF5733" }}
    >
      <div className="flex items-center justify-between z-40">
        <span className="text-lg font-semibold mr-4">{message}</span>
        <button
          onClick={onClose}
          className="text-white hover:text-gray-300 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
