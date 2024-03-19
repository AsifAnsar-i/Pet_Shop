import { useState } from "react";
import { useAppContext } from "../contexts/AppContext";
import { Link } from "react-router-dom";
import SignOutButton from "./SignOutButton";
import logo1 from "../assets/2.png"


const Navbar = () => {
  const { isLoggedIn } = useAppContext();
  const [open, setOpen] = useState(false);

  return (
  
    <header className={`flex w-full items-center bg-white dark:bg-dark`}>
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4">
            <Link to="/" className="block w-full py-5">
              <img
                src={logo1}
                alt="logo"
                className="dark:hidden"
              />
              <img
                src={logo1}
                alt="logo"
                className="hidden dark:block"
              />
            </Link>
          </div>
          <div className="flex w-full items-center justify-between px-4">
            <div>
              <button
                onClick={() => setOpen(!open)}
                id="navbarToggler"
                className={` ${
                  open && "navbarTogglerActive"
                } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
              >
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
              </button>
              <nav
                // :className="!navbarOpen && 'hidden' "
                id="navbarCollapse"
                className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none lg:dark:bg-transparent ${
                  !open && "hidden"
                } `}
              >
                <ul className="block lg:flex">
                  <Link
                    className="flex py-2 text-base font-medium text-body-color hover:text-dark dark:text-dark-6 dark:hover:text-white lg:ml-12 lg:inline-flex"
                    to="/#"
                  >
                    Home
                  </Link>
                  <Link
                    className="flex py-2 text-base font-medium text-body-color hover:text-dark dark:text-dark-6 dark:hover:text-white lg:ml-12 lg:inline-flex"
                    to="/#"
                  >
                    Payment
                  </Link>
                  <Link
                    className="flex py-2 text-base font-medium text-body-color hover:text-dark dark:text-dark-6 dark:hover:text-white lg:ml-12 lg:inline-flex"
                    to="/#"
                  >
                    About
                  </Link>
                  <Link
                    className="flex py-2 text-base font-medium text-body-color hover:text-dark dark:text-dark-6 dark:hover:text-white lg:ml-12 lg:inline-flex"
                    to="/#"
                  >
                    Blog
                  </Link>
                </ul>
              </nav>
            </div>
            {isLoggedIn ? (
              <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
                 <Link
                  to="/my-pets"
                  className="rounded-md  px-7 py-3 -mr-4 text-base font-semibold text-white hover:text-primary/90"
                >
                  My Pets
                </Link>
                
                <Link
                  to="/my-orders"
                  className="rounded-md  px-7 py-3 text-base font-semibold text-white hover:text-primary/90"
                >
                  My Orders
                </Link>
                <SignOutButton />
              </div>
            ) : (
              <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
                <Link
                  to="/login"
                  className="px-7 py-3 text-base font-medium text-dark hover:text-primary dark:text-white"
                >
                  Sign In
                </Link>

                <Link
                  to="/register"
                  className="rounded-md bg-primary px-7 py-3 text-base font-medium text-white hover:bg-primary/90"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
   
  );
};

export default Navbar;
