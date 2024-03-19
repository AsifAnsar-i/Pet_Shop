import Hero from "../components/Hero";
import { useSearchContext } from "../contexts/SearchContext";
import * as apiClient from "../api-client";
import { useQuery } from "react-query";
import { useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../components/Pagination";

const Search = () => {
    const search =  useSearchContext( );
    const [page, setPage] = useState<number>(1);
    const searchParams = {
        age: search.age,
        size: search.size,
        breed: search.breed,
         gender:search.gender,
            page:page.toString()
    };
    const {data:petSearchData} = useQuery(["searchPets",searchParams],()=>apiClient.searchPets(searchParams));
    console.log(" Search Pet data: ",petSearchData)
     return <>
     <Hero/>
     <div className="container mx-auto">
     
     </div>
     <section className="bg-gray-2 pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
       <div className="container">
         <div className="flex items-center justify-between mb-10">
           <h2 className="text-3xl font-semibold text-dark dark:text-dark-6">
           {petSearchData?.pagination.total} Pets Found
           </h2>
       
         </div>
       </div>
       <div className="container">
         <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {petSearchData && petSearchData.data.map((pet) => {
 return <div key={pet._id}>
   <div className="mb-10 overflow-hidden rounded-lg bg-white shadow-1 duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3">
           <Link to={`/detail/${pet._id}`}><img src={pet.imageUrls[0]} alt="" className="w-full" /></Link> 
            <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
              <h3>
                <a
                  className="mb-4 block text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                >
                  {pet.breed}
                </a>
              </h3>
              <div className="mb-7 text-base  leading-relaxed text-body-color dark:text-dark-6">
             <p className="">PetAge:{" "}<span className="font-semibold text-green-400">{pet.age}</span></p>  
               <p className=""> Adoption Status:{" "}<span className="ont-semibold text-red-400">{ pet.isAdopted}</span></p>
              </div>
    
             <Link to={`/edit-pet/${pet._id}`} className="inline-block rounded-full border border-gray-3 px-7 py-2 text-base font-medium text-body-color transition hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-dark-6">
               View More about <p className="text-pink font-semibold">{pet.name}</p> 
             </Link>
              
            </div>
          </div>
 </div>
} )

   
          }
         </div>
       </div>
       <Pagination page={petSearchData?.pagination.page || 1} pages={petSearchData?.pagination.pages || 1} onPageChange={(page)=>setPage(page)}/>
     </section>
   </>;
};

export default Search;
