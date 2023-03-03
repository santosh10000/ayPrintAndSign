import { products } from "../../data/Data";
import { Navigate, Link } from "react-router-dom";
const Allproducts = () => {
  return (
    <>
      {/* In all products page, we are rendering all our products */}
      <h1 className=" text-4xl text-subText mb-12 p-8 underline underline-offset-8 decoration-bannerText ">
        Our Products
      </h1>
      <section className=" mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-32 md:mx-12  ">
          {products.map((list, index) => (
            <div key={index} className="">
              <Link to={`/product/${list.id}`}>
                <img
                  src={list?.img}
                  alt=""
                  className="h-60 ml-8  w-4/5  shadow-2xl shadow-black"
                />
              </Link>
              <div className={`px-12`}>
                <Link to={`/product/${list.id}`}>
                  <h2
                    className="font-extrabold
                  text-xl md:text-3xl xl:text-4xl  m-2 pt-2"
                  >
                    {list.title}
                  </h2>
                </Link>
                <p className=" text-sm md:text-md lg:w-full  xl:px-4 xl:w-4/5">
                  {list.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <button className="block mx-auto mb-12">
        <Link
          to="/contact"
          className=" px-4 py-3   text-raleway bg-subText  hover:bg-bannerText text-headerText md:text-bse"
        >
          Get A Quote
        </Link>
      </button>
    </>
  );
};
export default Allproducts;
