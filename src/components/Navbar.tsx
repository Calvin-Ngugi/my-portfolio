import {BsToggle2On, BsToggle2Off} from "react-icons/bs";

const Navbar = ({ setIsDark, isDark }: any) => {
  return (
    <div className="flex justify-between w-screen m-auto pt-2">
      <ul className="flex ms-3 justify-between w-[400px]">
        <li className="cursor-pointer ">Home</li>
        <li className="cursor-pointer ">About</li>
        <li className="cursor-pointer ">Projects</li>
        <li className="cursor-pointer ">Contact</li>
      </ul>
      <div className="me-3">
        <button
          className={`border-2 p-1`}
          onClick={() => setIsDark(!isDark)}
        >
          {isDark ? <BsToggle2On className="border-none w-[50px] h-6"/> : <BsToggle2Off className="border-none w-[50px] h-6"/>}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
