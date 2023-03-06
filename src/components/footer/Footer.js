import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { RiFacebookLine } from "react-icons/ri";
import { CgInstagram } from "react-icons/cg";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <footer className="flex flex-col lg:flex-row bg-navBackground text-headerText px-auto sm:px-6 py-2 xl:px-12">
        <div className="">
          {/* location and contacts details */}
          <div className="">
            <span className="text-4xl text-iconColor">
              <Link to="/">
                <img
                  src={logo}
                  alt=""
                  className="w-32 rounded-full px-2 border-8 border-black"
                />
              </Link>
            </span>

            <p>
              <span className="font-bold ">Ay Print & Sign, ACT</span>
              <div className="flex flex-row w-2/4">
                <span>
                  <BsFillTelephoneFill />
                </span>
                <span>
                  <a href="tel:+61401122107" className="text-headerText">
                    0401122107
                  </a>
                </span>
              </div>
              <div className="flex flex-row w-2/4">
                <span>
                  <MdEmail className="mr-6" />
                </span>
                <span> sales@ayprintandsign.com.au</span>
              </div>
            </p>
          </div>

          {/* Social media Links */}
          <div className="socials text-headerText  flex flex-row justify-evenly w-1/4 ">
            <a
              href="https://www.facebook.com/santosh.kharel.33/"
              target="_blank"
              rel="noreferrer"
              className="w-10 p-4 px-2 mx-2 text-headerText text-3xl"
            >
              <RiFacebookLine />
            </a>

            <a
              href="https://www.instagram.com/kharel13/"
              target="_blank"
              rel="noreferrer"
              className="w-10  p-4 px-2 mx-2 text-headerText text-3xl "
            >
              <CgInstagram />
            </a>

            <a
              href="https://www.instagram.com/kharel13/"
              target="_blank"
              rel="noreferrer"
              className="w-10 p-4 px-2 mx-2 text-headerText text-3xl "
            >
              <BsFillTelephoneFill />
            </a>

            <a
              href="https://www.instagram.com/kharel13/"
              target="_blank"
              rel="noreferrer"
              className="w-10 p-4 px-2 mx-2 text-headerText text-3xl "
            >
              <MdEmail />
            </a>
          </div>
          {/* end of first 2 div */}
        </div>

        <div className="flex flex-row  space-x-24 xl:space-x-60 mt-8 md:mt-3">
          {/* information */}
          <div className="-mt-12 sm:-mt-0">
            <span className="information text-left ">
              <h2 className=" md:text-2xl text-bannerText  ">Information</h2>
            </span>

            <ul className="space-y-2 text-xs sm:text-base">
              <li>
                <Link
                  className="text-headerText hover:text-bannerText"
                  to="/about"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className="text-headerText hover:text-bannerText"
                  to="/product"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  className="text-headerText hover:text-bannerText"
                  to="/contact"
                >
                  Contacts
                </Link>
              </li>
            </ul>
          </div>

          {/* Shop Products */}

          <div className="shopProducts sm:mt-10">
            <h2 className="text-bannerText md:text-2xl">Shop Products</h2>
            <div className="flex flex-row space-x-3 sm:space-x-12">
              <ul className="space-y-1 text-xs sm:text-base">
                <li>Business Cards</li>
                <li>Flyers | Brochures</li>
                <li>Vinyl Banners</li>
                <li>Mesh Banners</li>
                <li>Pull Up Banners</li>
                <li className="block md:hidden">Many more.....</li>
              </ul>

              <ul className="space-y-1 text-xs sm:text-base hidden md:block">
                <li>A Board</li>
                <li>Window Stickers</li>
                <li>Custom Stickers</li>
                <li>Sign Boards</li>
                <li>One Way Vision Stickers</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-navBackground text-headerText text-center p-4">
        <hr className="mx-auto  color-headerText mb-2" />
        <div className="font-bold p-4 w-full bg-navBackground">
          Copyright © 2023 All rights reserved | Ay print & sign
        </div>
      </div>
    </>
  );
};
export default Footer;
