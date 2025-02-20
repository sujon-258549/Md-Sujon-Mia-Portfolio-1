import Image from "next/image";
import "./contact.css";

const Contact = () => {
  return (
    <div className=" md:pb-20">
      <div className="text-center md:mb-20 mb-10">
        <h1
          className="
          text-3xl text-white font-bold -mb-8 md:mb-10  md:text-5xl text-center "
        >
          Contact Us Section
        </h1>
        <div className=" max-w-[80%] md:max-w-[500px] border-b md:border-b-[2px] border-white mx-auto mt-3 md:mt-5"></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-10 ">
        <div className="relative">
          <Image
            fill
            alt="Contact image"
            src={
              "https://cdn.pixabay.com/photo/2023/06/01/07/59/call-8033050_1280.png"
            }
          />
        </div>
        <form
          style={{ boxShadow: "1px 1px 30px #00ADB5" }}
          className="px-8 py-10 rounded-md"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white">
            Contact From
          </h2>
          <div>
            <div className="formContainer mt-5">
              <input placeholder="Enter Your Name" type="text" />
              <label>Name</label>
            </div>
            <div className="formContainer mt-5">
              <input placeholder="Enter your email" type="text" />
              <label>Email</label>
            </div>
            <div className="formContainer mt-5">
              <input placeholder="Enter your mobil/phone" type="text" />
              <label>Phone</label>
            </div>
            <div className="formContainer mt-5">
              <textarea
                id="message"
                rows={5}
                style={{
                  fontFamily: "Basier Square",
                  border: "2px solid rgb(85, 85, 85)",
                }}
                className="block p-2.5 w-full text-[18px] text-gray-900  rounded-lg  focus:ring-blue-500 focus:border-blue-500 dark:bg-customBg dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-white-500 dark:focus:border-customBg"
                placeholder="Write your thoughts here..."
                defaultValue={""}
              />
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your message
              </label>
            </div>
            <button className="text-[16px] font-medium py-2 rounded-md text-white mt-10 w-full bg-customSion">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
