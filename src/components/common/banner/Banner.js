import { Link } from "react-router-dom";
import "./banner.css";
import uuid from "react-uuid";
const Banner = () => {
  console.log(uuid());
  return (
    <>
      <section className="banner   md:mt-auto pt-20 md:pt-12 md:p-auto">
        <div className="container relative bottom-20 ">
          <div className="block mx-auto font-extrabold text-2xl md:text-4xl lg:text-5xl xl:text-7xl text-headerText p-2 text-center border-solid box-content  border-2 bg-slate-700 border-black w-fit opacity-90">
            <div className="">
              <h4>Print Made Easy,</h4>
              <h4>In Ay Print & Sign !</h4>
            </div>
          </div>

          <div className="flex flex-row  pt-24 ">
            <Link
              to="/contact"
              className="absolute sm:ml-2 md:ml-0 -left-6 sm:-left-16 xl:-left-24 px-2 py-1 md:px-4  bg-buttonBg hover:bg-navBackground text-navBackground hover:text-headerText text-sm md:text-lg"
            >
              CONTACT US
            </Link>
            <Link
              to="/product"
              className="absolute sm:mr-2 md:mr-0 -right-6 sm:-right-16 xl:-right-24 px-2 py-1   bg-buttonBg hover:bg-navBackground text-navBackground hover:text-headerText text-sm md:text-lg"
            >
              VIEW OUR PRODUCT
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
export default Banner;
