import logo1 from "../assets/3.png"
import SearchBar from "./SearchBar";
const Hero = () => {
  return (
    <>
      <section className="py-20 -mt-24 lg:py-[120px] bg-white dark:bg-dark">
        <div className="container mx-auto">
          <div className="relative z-10 overflow-hidden rounded bg-primary py-12 px-8 md:p-[70px]">
            <div className="flex flex-wrap items-center -mx-4">
              <div className="w-full px-4 lg:w-1/2">
                <span className="block mb-4 text-base font-medium text-white">
                Find A Dog To Adopt
                </span>
                <h2 className="mb-6 text-3xl font-bold leading-tight text-white sm:mb-8 sm:text-[40px]/[48px] lg:mb-0">
                  <span className="xs:block"> Start your Dog Adoption Journey!!</span>
                </h2>
              </div>
              
              <div className="w-full px-4 lg:w-1/2">
                <div className="flex flex-wrap lg:justify-end ">
                  {/* <a
                    href="javascript:void(0)"
                    className="inline-flex py-3 my-1 mr-4 text-base font-medium transition bg-white rounded-md hover:bg-shadow-1 text-primary px-7"
                  >
                    Get Pro Version
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="inline-flex py-3 my-1 text-base font-medium text-white transition rounded-md bg-secondary px-7 hover:bg-opacity-90"
                  >
                    Start Free Trial
                  </a> */}
             
                 <img
                // https://images.pexels.com/photos/1124002/pexels-photo-1124002.jpeg?auto=compress&cs=tinysrgb&w=400&h=200
                    src={logo1}
                    alt="logo"
                    className="rounded-br-3xl rounded-tl-3xl h-[200px] w-[200px]"
                  />
                </div>
              </div>
            </div>
           
            <div>
            
              <span className="absolute top-0 left-0 z-[-1]">
                <svg
                  width="189"
                  height="162"
                  viewBox="0 0 189 162"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    cx="16"
                    cy="-16.5"
                    rx="173"
                    ry="178.5"
                    transform="rotate(180 16 -16.5)"
                    fill="url(#paint0_linear)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear"
                      x1="-157"
                      y1="-107.754"
                      x2="98.5011"
                      y2="-106.425"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="white" stop-opacity="0.07" />
                      <stop offset="1" stop-color="white" stop-opacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span className="absolute bottom-0 right-0 z-[-1]">
                <svg
                  width="191"
                  height="208"
                  viewBox="0 0 191 208"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    cx="173"
                    cy="178.5"
                    rx="173"
                    ry="178.5"
                    fill="url(#paint0_linear)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear"
                      x1="-3.27832e-05"
                      y1="87.2457"
                      x2="255.501"
                      y2="88.5747"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="white" stop-opacity="0.07" />
                      <stop offset="1" stop-color="white" stop-opacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </div>
            <div className="absolute mt-10 z-auto ">
               <SearchBar/>
               </div>
           
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;


