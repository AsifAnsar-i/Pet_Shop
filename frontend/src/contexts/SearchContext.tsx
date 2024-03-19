import React, { useContext, useState } from "react";

type SearchContext ={
    age:string;
    size:string;
    breed:string;
    gender:string;
    petId:string;
    saveSearchValues:(age:string, size:string,  breed:string, gender:string,)=>void
}


const SearchContext = React.createContext<SearchContext | undefined>(undefined);

type SearchContextProviderProps = {
    children:React.ReactNode

}

export const SearchContextProvider = ({children}:SearchContextProviderProps)=>{

        const [age,setAge] = useState<string>("")
        const [size,setSize] = useState<string>("")
        const [breed,setBreed] = useState<string>("")
        const [gender,setGender] = useState<string>("")
        const [petId,setPetId] = useState<string>("")
   
        const saveSearchValues = (
            age:string, size:string , breed:string ,gender:string,petId?:string)=>{
            setAge(age)
            setSize(size)
            setBreed(breed)
            setGender(gender)
            if(petId){
                setPetId(petId)
            }
              }


    return (
        <SearchContext.Provider value={{
            age,
            size,
            breed,
            gender,
            petId,
            saveSearchValues
        }}>
            {children}
        </SearchContext.Provider>
    )
}

export const useSearchContext =()=>{
    const context = useContext(SearchContext)
    return context as SearchContext;
}