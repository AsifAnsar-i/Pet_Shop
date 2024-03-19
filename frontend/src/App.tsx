import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import NotFound from "./pages/NotFound";
import { useAppContext } from "./contexts/AppContext";
import AddPet from "./pages/AddPet";
import MyPets from "./pages/MyPets";
import EditPetDetails from "./pages/EditPetDetails";
import SinglePet from "./pages/SinglePet";
import Search from "./pages/Search";
import Adoption from "./pages/Adoption";



const App = () => {
  const {isLoggedIn} = useAppContext();
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/register"
        element={
          <Layout>
            <SignUp />
          </Layout>
        }
      />
      <Route
        path="/search"
        element={
          <Layout>
            <Search />
          </Layout>
        }
      />
      <Route
        path="/login"
        element={
          <Layout>
            <SignIn />
          </Layout>
        }
      />
      <Route
        path="/detail/:petId"
        element={
          <Layout>
            <SinglePet />
          </Layout>
        }
      />

      {  
      isLoggedIn &&
      <>
      <Route
        path="/pet/:petId/adoption"
        element={
          <Layout>
           <Adoption />
          </Layout>
        }/>
        <Route
        path="/add-pet"
        element={
          <Layout>
           <AddPet/>
          </Layout>
        }/>
        <Route
        path="/my-pets"
        element={
          <Layout>
           <MyPets/>
          </Layout>
        }/>
        <Route
        path="/edit-pet/:petId"
        element={
          <Layout>
            <EditPetDetails />
          </Layout>
        }/>
      </>
        
      }

      
     
      <Route
        path="*"
        element={
          <Layout>
            <NotFound />
          </Layout>
        }
      />
    </Routes>
  );
};

export default App;
