import Footer from "../components/footer/Footer";
import Header from "../components/Header";
import { Link, useParams } from "react-router-dom";
import { products } from "../components/data/Data";
import oops from "../assets/oops.jpg";

const ProductRoute = () => {
  let params = useParams();
  if (!params) {
    params = "business";
  }
  const product = products.filter((data) => data.id === params.id);

  return (
    <>
      <Header />
      {/* <div className="py-6">
        {product.map((list, index) => (
          <div key={index} className="flex flex-col px-4 ">
            <span className="">
              <img
                src={list.img}
                alt=""
                className="h-fit sm:h-111 w-fit space-x-12 rounded-3xl shadow-2xl shadow-black"
              />
            </span>

            <div className={`px-3 md:px-12`}>
              <h2 className="font-extrabold text-2xl md:text-3xl xl:text-5xl  m-6">
                {list.title}
              </h2>

              <p className="text-center text-lg md:text-2xl">{list.text}</p>
            </div>
          </div>
        ))}
        <Link to="/contact">
          <button className="block mx-auto mt-8 px-4 py-2 mb-12 bg-subText  hover:bg-bannerText text-headerText md:text-xl">
            Get a Quote
          </button>
        </Link>
      </div> */}
      <div className="py-6">
        {!product.length > 0 && (
          <div>
            <img src={oops} alt="" className="mx-auto w-32" />
            <p className="text-center p-4 text-lg">
              We couldn't find the product, please click{" "}
              <Link to="/product" className="text-bannerText">
                _here
              </Link>
              to browse all our product
            </p>
          </div>
        )}
        {product.map((list, index) => (
          <div
            key={index}
            className="flex  md:flex-row flex-col-reverse md:space-x-24 px-12 py-6"
          >
            <div className={`px-3 md:px-12 md:-mt-24`}>
              <h2 className="font-extrabold text-2xl md:text-3xl xl:text-5xl  m-6">
                {list.title}
              </h2>

              <p className="text-center text-lg md:text-xl">{list.text}</p>
            </div>
            <span className="flex md:flex-col sm:flex-row flex-col pt-6 md:pt-auto">
              <img
                src={list.img}
                alt=""
                className=" w-64 space-x-12 rounded-3xl shadow-2xl shadow-black"
              />
              <form action="" className="p-5">
                <div className="p-2 ">
                  <label htmlFor="" className="p-2 text-xl">
                    Size
                  </label>
                  <select name="" id="">
                    <option>Please Choose..</option>
                    <option>360 * 760</option>
                    <option>1280 * 720</option>
                  </select>
                </div>
                <div className="p-2">
                  <label htmlFor="" className="p-2 text-xl">
                    Quantity
                  </label>
                  <select name="" id="">
                    <option>Please Choose..</option>
                    <option>100</option>
                    <option>500</option>
                    <option>1000</option>
                  </select>
                </div>
                <Link to="/contact">
                  <button
                    type="submit"
                    className="px-2 m-3 mb-12 bg-subText  hover:bg-bannerText text-headerText "
                  >
                    Proceed Order
                  </button>
                </Link>
              </form>
            </span>
          </div>
        ))}
        {/* {product.length > 0 && (
          <Link to="/contact">
            <button className="block mx-auto mt-8 px-4 py-2 mb-12 bg-subText  hover:bg-bannerText text-headerText md:text-xl">
              Get a Quote
            </button>
          </Link>
        )} */}
      </div>

      <Footer />
    </>
  );
};
export default ProductRoute;
