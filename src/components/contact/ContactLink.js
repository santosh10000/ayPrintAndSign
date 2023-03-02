import { Link } from "react-router-dom";

const ContactLink = () => {
  return (
    <>
      <section className="flex flex-col md:flex-row justify-between px-12 bg-subText py-8">
        <div className=" text-xl mb-6 md:mb-auto md:text-2xl text-headerText">
          <h1>Can't find what you're after?</h1>
          <h1> We can quote any custom job!</h1>
        </div>

        <Link
          className="text-lg text-headerText px-4 py-1 bg-bannerText"
          to="/contact"
        >
          CONTACT US
        </Link>
      </section>
    </>
  );
};
export default ContactLink;
