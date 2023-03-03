import { Link } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import { FiPrinter } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { nav } from "../components/data/Data";
import { useState } from "react";
import logo from "../assets/logo.jpeg";

const Header = () => {
  // Setting useState for toggle button
  const [open, setOpen] = useState(true);
  const toggleMenu = () => {
    setOpen(!open);
  };
  return (
    <>
      <header className="bg-navBackground ">
        <div className="container  justify-around ">
          <button
            className="inline-block md:hidden text-headerText py-6 text-3xl sm:text-4xl "
            onClick={toggleMenu}
          >
            {/* Setting menu icon on basis of useState  */}
            {open ? <GiHamburgerMenu /> : <AiOutlineClose />}
          </button>

          <div className="flex flex-col md:flex-row ml-8 md:ml-auto">
            <div className="-mt-20 md:mt-auto mb-6 md:mb-auto">
              <Link to="/">
                <img
                  src={logo}
                  alt=""
                  className="w-40 rounded-full px-2 border-8 border-black"
                />
              </Link>
            </div>
            <div>
              <nav
                // Conditional toggle option of hamburger menu
                className={` 
                sm:${open ? "hidden" : "block"}
               
                  flex md:flex-row flex-col ${
                    !open ? "space-y-8 pb-4" : "space-y-0"
                  }
                 md:space-x-4  xl:space-x-12 justify-around text-l`}
              >
                {/* We are fetching the list from Data.s js, using simple map function to return all list  */}
                {nav.map((list, index) => (
                  <div key={index} className={`px-2 lg:px-12 text-headerText`}>
                    <Link
                      to={list.path}
                      className={` text-bannerText hover:text-subText md:block xl:text-lg ${
                        list?.blocks
                      } ${open ? "hidden" : "block"}`}
                    >
                      {list.text}
                    </Link>
                  </div>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
