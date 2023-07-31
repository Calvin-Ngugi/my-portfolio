import { BiRightArrowCircle } from "react-icons/bi";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Header = ({ isDark }: any) => {
  return (
    <>
      <div
        className="grid md:grid-cols-2 gap-2 md:h-[70%] max-w-[70%] m-auto"
        id="home"
      >
        {/* left */}
        <div className="flex flex-col mt-16 md:mt-30">
          <p className="text-[40px]">Hi there!👋🏽 I'm</p>
          <p className="font-bold text-[45px]">Calvin</p>
          <p className="text-gray-600 md:w-[80%]">
            A full-stack developer with a passion for developing with experience
            building out applications, web and mobile, with the latest
            technologies. Connect with me on:
          </p>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/calvin-ngugi-9a50a61b7/"
              className="me-4 mt-2"
            >
              <BsLinkedin className="h-5 w-5" />
            </a>
            <a href="https://github.com/Calvin-Ngugi" className="me-4 mt-2">
              <BsGithub className="h-5 w-5" />
            </a>
          </div>
          <a href="#contact">
            <div
              className={`sm:w-[170px] cursor-pointer flex items-center justify-between mt-7 ps-4 pe-4 pt-2 pb-2 sm:p-2 border-2 rounded-xl ${
                isDark
                  ? `border-white hover:bg-slate-100 hover:text-slate-900`
                  : `border-black hover:bg-slate-900 hover:text-slate-100`
              }`}
            >
              <button className={`border-transparent`}>Contact Me</button>
              <BiRightArrowCircle className="w-8 h-7 ms-4" />
            </div>
          </a>
        </div>
        {/* right */}
        <div className="flex flex-col md:justify-end items-start md:items-center">
          <div className="flex ">
            <img
              src="urahara.jpeg"
              alt=""
              className="max-h-80 max-w-80 rounded-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
