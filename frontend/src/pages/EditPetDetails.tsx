import { useMutation, useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import * as apiClient from '../api-client';
import ManagePetForm from "../forms/ManagePetForm/ManagePetForm";
import { useAppContext } from "../contexts/AppContext";


const EditPetDetails = () => {
  const navigation = useNavigate();
   const {showToast} = useAppContext()
  const {petId} = useParams();
  const {data: pet} = useQuery("fetchMyPetById",()=>apiClient.fetchMyPetById(petId||'') ,{
    enabled: !!petId
  
  });
  const {mutate,isLoading} = useMutation(apiClient.updateMyPetById,{
    onSuccess() {
       showToast({message:"Pet Saved!",type:"SUCCESS"})
        navigation("/my-pets")
    },
    onError() {
      showToast({message:"Error saving pet",type:"ERROR"})
    }
  });
  const handleSave = (petFormData:FormData) => {
    mutate(petFormData);
  }
  return <ManagePetForm pet={pet} onSave={handleSave} isLoading={isLoading} />;
};

export default EditPetDetails;
