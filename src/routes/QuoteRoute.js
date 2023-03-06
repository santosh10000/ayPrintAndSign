const QuoteRoute = () => {
  return (
    <>
      <>
        <h1 className="text-center text-2xl md:text-5xl text-iconColor pt-4">
          Get your printing Quote!
        </h1>
        <div className="contactsContainer mx-auto px-auto md:px-32">
          <div className="contact-box rounded-3xl p-0 md:p-9">
            {/* <div className="left hidden md:block"></div> */}
            <div className="right w-fit md:w-full">
              <h2></h2>

              <form>
                <input
                  type="text"
                  className="field w-96 md:w-full"
                  placeholder="Your Name"
                  name="name"
                />
                <input
                  type="email"
                  className="field"
                  placeholder="Your Email"
                  name="email"
                />
                <input
                  type="text"
                  className="field"
                  placeholder="Phone"
                  name="phone"
                />
                <textarea
                  placeholder="Please place your query"
                  className="field"
                  name="message"
                ></textarea>
                <button type="submit" className="btn ">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    </>
  );
};
export default QuoteRoute;
