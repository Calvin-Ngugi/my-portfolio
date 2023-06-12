const Header = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 h-[50%] w-[90%]">
        {/* left */}
        <div className="flex flex-col justify-center">
          <p className="text-[40px]">My Name is</p>
          <p className="font-bold text-[45px]">Calvin Ngugi</p>
        </div>
      </div>
    </>
  );
};

export default Header;
