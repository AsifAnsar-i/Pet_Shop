import { useMutation } from "react-query";
import ManagePetForm from "../forms/ManagePetForm/ManagePetForm";
import { useAppContext } from "../contexts/AppContext";
import * as apiClient from "../api-client"
import { useNavigate } from "react-router-dom";

const AddPet = () => {
  const navigate=useNavigate()
  const {showToast} = useAppContext()
  const {mutate,isLoading} = useMutation(apiClient.addMyPet, {
     onSuccess: () => {
      showToast({message:"Pet added successfully",type:"SUCCESS"})
      navigate("/my-pets")

  },
  onError: () => {
    showToast({message:"Error Saving Pet",type:"ERROR"})
  }
});
const handleSave =(petFormData:FormData)=>{
     mutate(petFormData);
} 
  return <div>
    <ManagePetForm onSave={handleSave} isLoading={isLoading} />
  </div>;
};

export default AddPet;
