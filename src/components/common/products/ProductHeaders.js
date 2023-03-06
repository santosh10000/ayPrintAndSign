import { Link } from "react-router-dom";

const ProductHeaders = () => {
  return (
    <div className="p-12 pt-12 ">
      <div className="flex md:flex-row flex-col ">
        <h1 className="text-2xl md:text-4xl text-bannerText mb-4 md:mb-auto">
          Products That We Offer
        </h1>
        <Link
          to="/product"
          className=" py-1 px-3   bg-buttonBg hover:bg-navBackground text-navBackground hover:text-headerText text-sm md:text-lg"
        >
          VIEW OUR PRODUCT
        </Link>
      </div>
      <p className=" py-6 text-subText text-xl">
        Few of our most popular products
      </p>
    </div>
  );
};
export default ProductHeaders;
