import { BiRightArrowCircle } from "react-icons/bi";

const Header = ({ isDark }: any) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 h-screen md:h-[60%] max-w-[70%] m-auto">
        {/* left */}
        <div className="flex flex-col justify-center">
          <p className="text-[40px]">Hi there! I'm</p>
          <p className="font-bold text-[45px]">Calvin</p>
          <p className="text-base text-gray-600 md:w-[80%]">
            A full-stack developer with a passion for developing 
            with experience building out applications, web and mobile, with the
            latest technologies.
          </p>
          <div
            className={`sm:w-[160px] cursor-pointer flex justify-between mt-5 ps-4 pe-4 pt-2 pb-2 sm:p-2 border-2 rounded-xl ${
              isDark
                ? `border-white hover:bg-slate-100 hover:text-slate-900`
                : `border-black hover:bg-slate-900 hover:text-slate-100`
            }`}
          >
            <button className={`border-transparent`}>Contact Me</button>
            <BiRightArrowCircle className="w-8 h-7 ms-4" />
          </div>
        </div>
        {/* right */}
        <div className="flex flex-col md:justify-center items-start md:items-center">
          <div className="flex relative">
            <img
              src="urahara.PNG"
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
