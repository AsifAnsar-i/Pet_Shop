import { FormEvent, useState } from "react";
import { useSearchContext } from "../contexts/SearchContext";
import { useNavigate } from "react-router-dom";

 
 const SearchBar = () => {
    const search = useSearchContext();
    const navigate = useNavigate();
  
    const [age, setAge] = useState<string>(search.age);
    const [size, setSize] = useState<string>(search.size);
    const [breed, setBreed] = useState<string>(search.breed);
    const [gender, setGender] = useState<string>(search.gender);

    const handleSubmit =(event:FormEvent)=>{
        event.preventDefault();
        search.saveSearchValues(
            age,
            size,
            breed, 
            gender
        );
        navigate("/search")
    }

   return <form onSubmit={handleSubmit} className="-mt-8 p-3 bg-gray-800 rounded shadow-md grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 items-center gap-4">
      <div className="flex flex-row items-center flex-1 bg-white p-2 ">
        <label htmlFor="age" className="w-1/3">Age</label>
        <select id="age" name="age" value={age} onChange={(e) => setAge(e.target.value)} className="w-2/3">
          <option value="">Select</option>
          <option value="Puppy">Puppy</option>
          <option value="young">Young</option>
          <option value="adult">Adult</option>
          <option value="senior">Senior</option>
        </select>
        
      

      </div>
      <div className="flex flex-row items-center flex-1 bg-white p-2 ">
      <label htmlFor="size" className="w-1/3">Size</label>
        <select id="size" name="size" value={size} onChange={(e) => setSize(e.target.value)} className="w-2/3">
        <option value="">Select</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </div>
      <div className="flex flex-row items-center flex-1 bg-white p-2 ">
      <label htmlFor="breed" className="w-1/3">Breed</label>
<select id="breed" name="breed" value={breed} onChange={(e) => setBreed(e.target.value)} className="w-2/3">
<option value="">Select</option>
  <option value="Labrador Retriever">Labrador Retriever</option>
  <option value="Golden Retriever">Golden Retriever</option>
  <option value="German Shepherd">German Shepherd</option>
  <option value="Pug">Pug</option>
  <option value="Beagle">Beagle</option>
  <option value="Bulldog">Bulldog</option>
  <option value="Poodle">Poodle</option>
</select>
      </div>
      <div className="flex flex-row items-center flex-1 bg-white p-2 ">
  
      <label htmlFor="gender" className="w-1/3">Gender</label>
        <select id="gender" name="gender" value={gender} onChange={(e) => setGender(e.target.value)} className="w-2/3">
        <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
         
      </div>
      <div className="flex gap-3">
        <button  className="bg-primary text-white rounded py-2 px-6">Search</button>
        <button  className="bg-red-600 text-white rounded py-2 px-6">Clear</button>
      </div>
   </form>;
 };
 
 export default SearchBar;
 