import ProductHeaders from "./ProductHeaders";
import { products } from "../../data/Data";
import { Navigate, Link } from "react-router-dom";
import { useState } from "react";

const Products = () => {
  return (
    <>
      <section className=" mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12  gap-x-32 md:mx-12 ">
          {products.map((list, index) => {
            // We are conditional returning only 8 of our products, depending on index
            if (index <= 7) {
              return (
                <div key={index} className="pb-6">
                  <Link to={`/product/${list.id}`}>
                    <img
                      src={list?.img}
                      alt=""
                      className="h-60 ml-8  w-4/5  shadow-2xl shadow-black"
                    />
                  </Link>
                  <div className={`px-12`}>
                    <Link to={`/product/${list.id}`}>
                      <h2 className="font-extrabold text-2xl md:text-2xl xl:text-3xl pt-4 m-2">
                        {list.title}
                      </h2>
                    </Link>
                    <p className="text-sm md:text-md px-4">{list.text}</p>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </section>

      <button className="block mx-auto mb-12">
        <Link
          to="/product"
          className=" px-2 py-2  bg-buttonBg  hover:bg-navBackground hover:text-headerText text-navBackground md:text-bse"
        >
          VIEW ALL OF OUR PRODUCT
        </Link>
      </button>
    </>
  );
};
export default Products;
