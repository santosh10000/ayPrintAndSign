import Footer from "../components/footer/Footer";
import Header from "../components/Header";
import { Link, useParams } from "react-router-dom";
import { products } from "../components/data/Data";

const ProductRoute = () => {
  let params = useParams();
  if (!params) {
    params = "business";
  }
  const product = products.filter((data) => data.id === params.id);

  return (
    <>
      <Header />
      <div className="py-6">
        {product.map((list, index) => (
          <div key={index} className="flex flex-col px-4 ">
            <span className="">
              <img
                src={list.img}
                alt=""
                className="h-fit sm:h-111 w-fit space-x-12 rounded-3xl"
              />
            </span>

            <div className={`px-3 md:px-12`}>
              <h2 className="font-extrabold text-2xl md:text-3xl xl:text-5xl text-bannerText m-6">
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
      </div>
      <Footer />
    </>
  );
};
export default ProductRoute;
