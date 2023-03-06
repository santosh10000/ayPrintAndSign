import business from "../../assets/product/business.jpg";
import flyers from "../../assets/product/flyer.jpg";
import vinyl from "../../assets/product/vinyl.jpg";
import mesh from "../../assets/product/mesh.jpg";
import rollup from "../../assets/product/rollup.jpg";
import board from "../../assets/product/board.jpg";
import window from "../../assets/product/window.jpg";
import oneway from "../../assets/product/oneway.png";
import custom from "../../assets/product/custom.jpg";
import corflute from "../../assets/product/corflute.jpg";
import sign from "../../assets/product/sign.jpg";
import asign from "../../assets/product/asign.jpg";

import uuid from "react-uuid";
//Quote images

// We have static dta for all the navlink, products and it's images.

export const nav = [
  {
    text: "HOME",
    path: "/",
  },
  {
    text: "ABOUT US",
    path: "/about",
  },
  {
    text: "PRODUCT",
    path: "/product",
  },
  {
    text: "QUOTE",
    path: "/contact",
  },

  {
    text: "CONTACT",
    path: "/contact",
  },
];

export const products = [
  {
    id: "business",
    img: business,
    title: "Business Cards",
    text: "Looking to make a lasting impression with your business cards? Look no further than Ay print & Sign! Our high-quality business card printing services are designed to help you stand out from the crowd and make a lasting impression on potential customers and clients",
  },
  {
    id: uuid(),
    img: vinyl,
    title: "Vinyl Banners",
    text: "Looking for an effective way to promote your business, event, or special offer? Look no further than Ay print & Sign's high-quality flyers and brochures! Our printing services allow you to create custom-designed flyers and brochures that truly reflect your brand and message",
  },
  {
    id: uuid(),
    img: flyers,
    title: "Flyers | Brochures",
    text: "Our printing services allow you to create custom-designed flyers and brochures that truly reflect your brand and message. Whether you're promoting a sale, a new product, or an upcoming event, we have the expertise and experience to help you create a piece that stands out and grabs attention.",
  },
  {
    id: uuid(),
    img: mesh,
    title: "Mesh Banners",
    text: "Are you looking for an effective way to advertise your business or event outdoors, without sacrificing visibility? Consider a high-quality mesh banner from Ay print & Sign! Our mesh banners are made with a specialized material that allows for maximum air flow, making them perfect for outdoor use in windy conditions.",
  },
  {
    img: rollup,
    title: "Pull Up Banners",
    text: "Our roll up banners are designed to be lightweight, portable, and easy to set up, making them the perfect choice for trade shows, conferences, and events. With a range of sizes and custom design options available, you can create a banner that truly reflects your brand and message. ",
  },
  {
    id: uuid(),
    img: board,
    title: "A Board",
    text: "Looking for a flexible and eye-catching way to promote your business or event outside your store or on the sidewalk? Our Boards are designed to be lightweight, portable, and easy to set up, making them the perfect choice for retail stores, cafes, restaurants, and more",
  },
  {
    id: uuid(),
    img: window,
    title: "Window Stickers",
    text: "Looking for an effective way to promote your business or add a unique touch to your storefront windows? Look no further than Ay print & Sign's high-quality window stickers! At Ay print & Sign, we offer a range of custom design options for your window stickers, including different sizes, shapes, and finishes.",
  },
  {
    id: uuid(),
    img: oneway,
    title: "One Way Vision Stickers",
    text: "Our one way vision stickers are made with specialized materials that allow for one-way visibility. This means that your message or design is visible from the outside, while still allowing those inside to see out. This makes them perfect for storefronts, offices, and vehicles.",
  },
  {
    id: uuid(),
    img: custom,
    title: "Custom Stickers",
    text: "Looking for a fun and creative way to promote your business, show off your brand, or add a personal touch to your products or packaging? Look no further than Ay print & Sign's high-quality custom stickers! Our stickers are easy to apply and remove, making them a flexible and cost-effective advertising option.",
  },
  {
    id: uuid(),
    img: corflute,
    title: "Corflute Sign Boards",
    text: "At Ay print & Sign, we offer a range of custom design options for your corflute signs, including different sizes, shapes, and finishes. Whether you're promoting a sale, a new product, or simply directing traffic to your event, we have the expertise and experience to help you create a sign that stands out and grabs attention.",
  },
  {
    id: uuid(),
    img: sign,
    title: "ACP Sign Boards",
    text: "Our ACP sign boards are made with durable aluminum composite materials, making them perfect for outdoor advertising, building signage, directional signage, and more. Plus, our state-of-the-art printing technology ensures that your message or design is displayed with exceptional clarity and vibrancy, even in harsh weather conditions.",
  },
  {
    id: uuid(),
    img: asign,
    title: "Acrylic Sign Boards",
    text: "Our acrylic sign boards are made with durable and versatile materials, making them perfect for indoor advertising, office signage, directional signage, and more. Plus, our state-of-the-art printing technology ensures that your message or design is displayed with exceptional clarity and vibrancy, making a lasting impression on your audience.",
  },
];
