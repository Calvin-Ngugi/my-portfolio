import { BiSend } from "react-icons/bi";

const Contact = () => {
  return (
    <div
      className="w-[80%] md:w-[70%] pt-28 pb-5 m-auto"
      id="contact"
    >
      <h1 className="text-center mb-5 font-bold text-[32px]">Contact Me</h1>
      <form
        action="https://getform.io/f/547cd68f-ff16-44b7-b8a3-ddee7b7c6ee5"
        method="POST"
      >
        <div className="flex flex-col gap-3 items-center">
          <div className="flex flex-col lg:w-[50%] sm:w-[60%] rounded-lg p-2">
            <label className="font-semibold ps-2" htmlFor="name">
              Name:
            </label>
            <input
              className="h-10 p-3 rounded-lg"
              type="text"
              name="name"
              required
              placeholder="Enter your name"
            />
          </div>
          <div className="flex flex-col lg:w-[50%] sm:w-[60%] rounded-lg p-2">
            <label className="font-semibold ps-2" htmlFor="email">
              Email:
            </label>
            <input
              className="h-10 p-3 rounded-lg"
              type="email"
              name="email"
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="flex flex-col lg:w-[50%] sm:w-[60%] rounded-lg p-2">
            <label className="font-semibold ps-2" htmlFor="textarea">
              Message:
            </label>
            <textarea
              className="h-24 p-3 rounded-lg"
              name="message"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <button
            className="cursor-pointer w-[50%] md:w-[20%] flex justify-around items-center font-semibold p-2 border-none rounded-xl bg-blue-600 hover:bg-blue-700"
            type="submit"
          >
            Send Message
            <BiSend className="w-5 h-5" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
