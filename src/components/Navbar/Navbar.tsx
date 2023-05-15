const Navbar = () => {
  return (
    <nav className="w-full">
      <div className="max-w-container flex w-full items-center justify-between p-5 pl-1">
        <figure className="aspect-[4/1] w-[200px]">
          <img
            src="/assets/icons/logo.svg"
            alt="Quick ETA Logo"
            className="h-full w-full object-contain"
          />
        </figure>

        <div className="flex items-center space-x-10">
          <a
            href="#"
            className="uppercase text-primary-main hover:text-primary-main/70"
          >
            Home
          </a>

          <a
            href="#features"
            className="uppercase text-white hover:text-primary-main/70"
          >
            Features
          </a>

          <a
            href="#testimonials"
            className="uppercase text-white hover:text-primary-main/70"
          >
            Testimonials
          </a>

          <a
            href="#pricing"
            className="uppercase text-white hover:text-primary-main/70"
          >
            Premium
          </a>

          <a
            href="#newsletter"
            className="uppercase text-white hover:text-primary-main/70"
          >
            Email
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
