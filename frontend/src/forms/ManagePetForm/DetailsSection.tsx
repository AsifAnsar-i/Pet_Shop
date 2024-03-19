import logo1 from "../../assets/2.png"
import { useFormContext } from "react-hook-form";
import { PetFormData } from "./ManagePetForm";
import ImagesSection from "./ImagesSection";

const DetailsSection = () => {
  const {register,formState:{errors}}=useFormContext<PetFormData>();
  return (
    <section className="-mt-14 bg-gray-1 py-20 dark:bg-dark lg:py-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white px-10 py-16 text-center dark:bg-dark-2 sm:px-12 md:px-[60px]">
              <div className="mb-10 text-center md:mb-16">
                <a href="/#" className="mx-auto inline-block max-w-[160px]">
                  <img
                    src={logo1}
                    alt="logo"
                  />
                </a>
              </div>
              <form>
                <div className="mb-6"></div>
                <label className="text-gray-400 text-sm font-thin "> 
                  Name
                  <input
                  className="w-full mb-6 rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-white"
                  type="text"
                 
                 
              {...register("name",{required:"This field is required"})}  ></input>
               {errors.name && <p className="text-red-500">{errors.name.message}</p>}</label>
               <label className="text-gray-400 text-sm font-thin ">
                Age
                 <select
                  className="w-full mb-6 rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-white"
                  {...register("age",{required:"This field is required"})}>
                  
                  {["Puppy", "Young", "Adult", "Senior"].map((age) => (
                    <option className="bg-slate-800" key={age} value={age}>
                      {age}
                    </option>
                  ))}

                  </select>
                  {errors.age && <p className="text-red-500">{errors.age.message}</p>}
              </label>

              <label  className="text-gray-400 text-sm font-thin "> 
              Size
               <select  className="w-full mb-6 rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-white" 
              {...register("size",{required:"This field is required"})}
              >
               
                {["Small", "Medium", "Large"].map((size) => (
                  <option className="bg-slate-800" key={size} value={size}>
                    {size}</option>
                    ))}
                    
              
              </select>
                {errors.size && <p className="text-red-500">{errors.size.message}</p>}</label>
               
              <label className="text-gray-400 text-sm font-thin ">
              Breed 
              <select
                  className="w-full mb-6 rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-white"
                 {...register("breed",{required:"This field is required"})}
                >
                    {["Labrador Retriever","Golden Retriever", "German Shepherd","Pug", "Beagle", "Bulldog", "Poodle"].map(
                    (breed) => (
                      <option className="bg-slate-800" key={breed} value={breed}>
                        {breed}
                      </option>
                    )
                  )}
                </select>
                {errors.breed && <p className="text-red-500">{errors.breed.message}</p>}
              </label>
               <label className="text-gray-400 text-sm font-thin "> 
               Gender
               <select
                  className="w-full mb-6 rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-white"
                 {...register("gender",{required:"This field is required"})}
                >
                 {["Male","Female"].map(
                    (gender) => (
                      <option className="bg-slate-800" key={gender} value={gender}>
                        {gender}
                      </option>
                    )
                  )}
                </select>
                {errors.gender && <p className="text-red-500">{errors.gender.message}</p>}
               
                </label>
                 <label className="text-gray-400 text-sm font-thin ">
                Description

                 <textarea
                  className="w-full mb-6 rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-white"
                   rows={2}
                 {...register("description",{required:"This field is required"})}
                  ></textarea>
                   {errors.description && <p className="text-red-500">{errors.description.message}</p>}

               
                </label>
                <ImagesSection/>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;
