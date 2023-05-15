import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="max-w-container flex h-[88vh] max-h-[800px] min-h-[600px] w-full items-center p-7">
        <div className="flex flex-col space-y-10 text-white">
          <h1 className="max-w-[10ch] text-4xl font-bold !leading-[0.9] md:text-7xl xl:text-[6rem]">
            Know when to move...
          </h1>

          <p className="max-w-[35ch] text-xl font-light">
            Say goodbye to traffic and confusion with our user-friendly
            navigation app. Download now!"
          </p>

          <div className="flex space-x-5">
            <a href="/" className="aspect-[3.5/1] w-[170px]">
              <img src="/assets/icons/playstore.svg" alt="Google Play" />
            </a>

            <a href="/" className="aspect-[3.5/1] w-[170px]">
              <img src="/assets/icons/appstore.svg" alt="App Store" />
            </a>
          </div>
        </div>

        <div className="flex w-1/2 items-center justify-end">
          <figure className="-mb-52 mr-20 aspect-[1/2] w-[60%]">
            <img
              src="/assets/images/app-preview.png"
              alt="App Preview"
              className="h-full w-full object-contain"
            />
          </figure>
        </div>
      </div>
    </header>
  );
};

export default Header;
