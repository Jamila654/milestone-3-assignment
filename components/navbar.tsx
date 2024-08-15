const Navbar = () => {
  return (
    <main>
      <div className=" fixed top-0 right-0 bg-orange-950 text-white h-8 md:h-12 w-full flex items-center justify-between p-2 sm:p-5 md:p-7">
        <div className=" text-[8px] sm:text-[15px] md:text-[20px] text-nowrap">
          Milestone 2
        </div>
        <div className=" flex gap-5 text-[8px] sm:text-[15px] md:text-[20px] cursor-pointer">
          <span className="hover:opacity-45">
            <a href="/">Home</a>
          </span>
          <span className="hover:opacity-45">
            <a href="#about">About</a>
          </span>
          <span className="hover:opacity-45">
            <a href="#blog">Blog</a>
          </span>
        </div>
      </div>
    </main>
  );
};

export default Navbar;
