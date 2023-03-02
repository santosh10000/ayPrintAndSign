import Banner from "../components/common/banner/Banner";
import ProductHeaders from "../components/common/products/ProductHeaders";
import Products from "../components/common/products/Products";
import ContactLink from "../components/contact/ContactLink";
import Footer from "../components/footer/Footer";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <ProductHeaders />
      <Products />
      <ContactLink />
      <Footer />
    </>
  );
};
export default Home;
