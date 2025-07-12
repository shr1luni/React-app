import "boxicons/css/boxicons.min.css";

const Header = () => {
  //simple function to toggle mobile menu
  const toggleMobileMenu = () => {
    const mobileMenu = document.getElementById("mobileMenu");

    //if it has the 'hidden' class, remove it.otherwise add it
    if (mobileMenu.classList.contains("hidden")) {
      mobileMenu.classList.remove("hidden");
    } else {
      mobileMenu.classList.add("hidden");
    }
  };

  return (
    <header
      className="flex justify-between 
    items-center py-4 px-4 lg:px-20"
    >
      <h1
        className="text-2xl md:text-4xl
        lg:text-5xl font-light m-0"
      >
        Aakash Labs
      </h1>

      {/*Navigation */}
      <nav
        className="hidden md:flex items-center
      gap-12"
      >
        <a
          className="text-base tracking-wider
      transition-colors hover:text-gray-300"
          href="#"
        >
          Home
        </a>

        <a
          className="text-base tracking-wider
      transition-colors hover:text-gray-300"
          href="#"
        >
          About Us
        </a>

        <a
          className="text-base tracking-wider
      transition-colors hover:text-gray-300"
          href="#"
        >
          Our Team
        </a>

        <a
          className="text-base tracking-wider
      transition-colors hover:text-gray-300"
          href="#"
        >
          Contact Us
        </a>
      </nav>

      <button
        className="hidden md:block bg-[#a7a7a7]
      text-black py-3 px-8 rounded-full
      border-none font-medium transition-all
      duration-500 hover:bg-white cursor-pointer
      z-50"
      >
        START A PROJECT
      </button>

      {/*Mobile Navigation */}
      <button onClick={toggleMobileMenu} className="md:hidden text-3xl p-2 z-50">
        <i className="bx bx-menu"></i>
      </button>

      {/*Moble Menu- hidden by default */}
      <div
        id="mobileMenu"
        className="fixed top-16 bottom-0 right-0
      left-0 p-5 md:hidden x-40 bg-black bg-opacity-70
      backdrop-blur-md"
      >
        <nav className="flex flex-col gap-6 items-center">
          <a
            className="text-base tracking-wider
      transition-colors hover:text-gray-300"
            href="#"
          >
            Home
          </a>

          <a
            className="text-base tracking-wider
      transition-colors hover:text-gray-300"
            href="#"
          >
            About Us
          </a>

          <a
            className="text-base tracking-wider
      transition-colors hover:text-gray-300"
            href="#"
          >
            Our Team
          </a>

          <a
            className="text-base tracking-wider
      transition-colors hover:text-gray-300"
            href="#"
          >
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  );
};
export default Header;
