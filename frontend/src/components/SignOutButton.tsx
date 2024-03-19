import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api-client";
import { useAppContext } from "../contexts/AppContext";
const SignOutButton = () => {
    const queryClient = useQueryClient();
  const { showToast } = useAppContext();
  const mutation = useMutation(apiClient.logout, {
    onSuccess: async() => {
        await queryClient.invalidateQueries("validateToken");
      showToast({ message: "Sign out successful", type: "SUCCESS" });
    },
    onError: (error:Error) => {
      showToast({ message: error.message, type: "ERROR" });
    },
  });
  const handleClick = () => {
    mutation.mutate();
  };
  return (
    <button
      onClick={handleClick}
      className="rounded-md bg-primary px-7 py-3 text-base font-medium text-white hover:bg-primary/90"
    >
      Sign Out
    </button>
  );
};

export default SignOutButton;
