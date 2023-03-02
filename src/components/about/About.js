import about from "../../assets/about.webp";
const About = () => {
  return (
    <>
      <section>
        <h1 className="font-extrabold text-2xl md:text-5xl text-center text-subText p-8 mb-6">
          Welcome to Ay Print & Sign
        </h1>
        <h1 className="text-xl text-bannerText md:2xl -mt-12 md:pl-4 p-2 md:p-6 md:hidden">
          About the Ay Print & Sign
        </h1>
        <div className="first flex flex-col-reverse md:flex-row content-between  p-4 md:p-8">
          <div className=" w-full md:w-2/3 mr-8">
            <h1 className="text-3xl p-4  text-bannerText hidden md:block">
              About the Ay Print & Sign
            </h1>
            <p className="pb-4 md:pb-12 p-4 text-sm md:text-xl">
              Ay Print & Sign is founded from the need to make print better,
              easier and more convenient for our customers. Everything we do
              aligns with our tagline, 'great print, made easy’.
            </p>
            <p
              className="p-4 text-sm
            md:text-xl"
            >
              Based in Canberra, Ay Print & Sign is experienced in the print
              industry. Our staff and printers are experts in their fields, and
              our mission is to make printing stress free. So sit back, relax
              and let us show you how printing should be done.
            </p>
          </div>
          <div>
            <img
              src={about}
              alt=""
              className=" px-6  md:px-auto md:w-fit md:h-111"
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
