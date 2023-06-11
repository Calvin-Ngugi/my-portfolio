const Navbar = ({ setIsDark, isDark }: any) => {
  return (
    <div className="flex justify-between w-screen m-auto pt-2">
      <ul className="flex ms-3 justify-between w-[20%]">
        <li className="cursor-pointer ">Home</li>
        <li className="cursor-pointer ">About</li>
        <li className="cursor-pointer ">Projects</li>
        <li className="cursor-pointer ">Contact</li>
      </ul>
      <div className="me-3">
        <button
          className={`border-2 bg-secondary text-white cursor-pointer hover:text-black hover:bg-primary p-1`}
          onClick={() => setIsDark(!isDark)}
        >
          {isDark ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
