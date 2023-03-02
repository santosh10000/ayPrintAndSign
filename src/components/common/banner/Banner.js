import { Link } from "react-router-dom";
import "./banner.css";
import uuid from "react-uuid";
const Banner = () => {
  console.log(uuid());
  return (
    <>
      <section className="banner   md:mt-auto pt-20 md:pt-12 md:p-auto">
        <div className="container relative bottom-20 ">
          <div className="font-extrabold text-2xl md:text-4xl lg:text-5xl xl:text-7xl text-headerText  mb-8 p-2 text-center">
            <h4>Print Made Easy,</h4>
            <h4>In Ay Print & Sign !</h4>
          </div>

          <Link
            to="/product"
            className="-ml-6 md:-ml-20 px-4 py-2 md:px-6 md:py-2 bg-buttonBg hover:bg-navBackground text-navBackground hover:text-headerText text-sm md:text-lg"
          >
            VIEW OUR PRODUCT
          </Link>
        </div>
      </section>
    </>
  );
};
export default Banner;
