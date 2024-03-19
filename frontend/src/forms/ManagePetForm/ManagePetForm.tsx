import { FormProvider, useForm } from "react-hook-form";
import DetailsSection from "./DetailsSection";
import { PetType } from "../../../../backend/src/shared/types";
import { useEffect } from "react";


export type PetFormData = {
    name:string,
    age:string,
    size:string,
    gender:string,
    breed:string,
    imageFiles:FileList,
    imageUrls:string[],
    description:string,
    isAdopted:string,
    
}

type Props = {
    pet?:PetType
    onSave:(petFormData:FormData)=>void,
    isLoading:boolean
} 

const ManagePetForm = ({onSave,isLoading,pet}:Props) => {
    const formMethods = useForm<PetFormData>();
    const {handleSubmit,reset} = formMethods;
    useEffect(()=>{
      reset(pet)
    },[pet,reset])
    const onSubmit = handleSubmit((formDataJson:PetFormData)=>{
        const formData = new FormData();
        if(pet){
            formData.append("petId",pet._id)
        }
        formData.append('name',formDataJson.name);
        formData.append('age',formDataJson.age);
        formData.append('size',formDataJson.size);
        formData.append("gender",formDataJson.gender)
        formData.append("breed",formDataJson.breed)
        formData.append("description",formDataJson.description)

       
        if(formDataJson.imageUrls){
          formDataJson.imageUrls.forEach((url,index)=>{
            formData.append(`imageUrls[${index}]`,url)
          })
        }


        Array.from(formDataJson.imageFiles).forEach((imageFile)=>{
            formData.append("imageFiles",imageFile)
        })

        onSave(formData);

    });
  return <FormProvider {...formMethods}>
    <form onSubmit={onSubmit}>
      <DetailsSection/>
    
      <section className="-mt-72 bg-gray-1 py-20 dark:bg-dark lg:py-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white px-10 py-16 text-center dark:bg-dark-2 sm:px-12 md:px-[60px]">
            <div className="mb-10">
                  <button
                    disabled={isLoading}
                    type="submit"
                    className="w-full cursor-pointer rounded-md border border-primary bg-primary px-5 py-3 text-base font-medium text-white transition hover:bg-opacity-90 disabled:bg-gray-500"
                  >
                 {isLoading?"Saving...":"Save "}
                  </button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    </form>
  </FormProvider>;
};

export default ManagePetForm;
