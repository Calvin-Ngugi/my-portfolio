import { BiSend } from "react-icons/bi";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

const Contact = () => {
  return (
    <div
      className="xl:w-[70%] md:w-[80%] w-[100%] pt-28 pb-5 m-auto"
      id="contact"
    >
      <h1 className="text-center mb-5 font-bold text-[32px]">Contact Me</h1>
      <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-1 gap-4">
        <div className="w-[40%] flex flex-col gap-7 mx-auto">
          <div className="grid grid-cols-2 items-center gap-4">
            <FiPhoneCall className="w-10 h-10 text-blue-600" />
            <div className="flex flex-col">
              <p className="text-[20px]">Call Me</p>
              <p>0701141934</p>
            </div>
          </div>
          <div className="grid grid-cols-2 items-center gap-4">
            <MdOutlineMailOutline className="w-10 h-10 text-blue-600" />
            <div className="flex flex-col">
              <p className="text-[20px]">Email</p>
              <p>ncalvin67@gmail.com</p>
            </div>
          </div>
          <div className="grid grid-cols-2 items-center gap-4">
            <IoLocationOutline className="w-10 h-10 text-blue-600" />
            <div className="flex flex-col">
              <p className="text-[20px]">Location</p>
              <p>Nairobi</p>
            </div>
          </div>
        </div>
        <form
          action="https://getform.io/f/547cd68f-ff16-44b7-b8a3-ddee7b7c6ee5"
          method="POST"
          className="w-[80%] flex flex-col m-auto"
        >
          <div className="flex flex-col gap-3 items-center">
            <div className="flex flex-col rounded-lg p-2">
              <label className="font-semibold ps-2" htmlFor="name">
                Name:
              </label>
              <input
                className="h-10 lg:w-[300px] p-3 rounded-lg text-black"
                type="text"
                name="name"
                required
                placeholder="Enter your name"
              />
            </div>
            <div className="flex flex-col rounded-lg p-2">
              <label className="font-semibold ps-2" htmlFor="email">
                Email:
              </label>
              <input
                className="h-10 p-3 lg:w-[300px] rounded-lg text-black"
                type="email"
                name="email"
                required
                placeholder="Enter your email"
              />
            </div>
            <div className="flex flex-col rounded-lg p-2 ">
              <label className="font-semibold ps-2" htmlFor="textarea">
                Message:
              </label>
              <textarea
                className="h-24 p-3 lg:w-[300px] rounded-lg text-black"
                name="message"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button
              className="cursor-pointer flex justify-around items-center font-semibold p-2 border-none rounded-xl bg-blue-600 hover:bg-blue-700"
              type="submit"
            >
              Send Message
              <BiSend className="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
