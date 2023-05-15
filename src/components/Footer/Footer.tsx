import { Icon } from '@iconify/react';

const Footer = () => {
  return (
    <footer className="relative w-full bg-[#171717]">
      <div className="max-w-container px-7 py-20">
        <div className="mx-auto flex max-w-[650px] flex-col items-center space-y-7">
          <div className="flex items-center justify-center space-x-10">
            <Icon
              icon="akar-icons:facebook-fill"
              className="text-4xl text-white"
            />

            <Icon icon="mdi:instagram" className="text-4xl text-white" />

            <Icon
              icon="ant-design:twitter-circle-filled"
              className="text-4xl text-white"
            />
          </div>

          <hr className="w-full border-[#FFC770]" />

          <div className="flex items-center justify-center space-x-7">
            <a href="#" className="text-sm font-light text-white">
              Info
            </a>

            <div className="h-1 w-1 bg-[#424242]" />

            <a href="#" className="text-sm font-light text-white">
              Support
            </a>

            <div className="h-1 w-1 bg-[#424242]" />

            <a href="#" className="text-sm font-light text-white">
              Marketting
            </a>

            <div className="h-1 w-1 bg-[#424242]" />

            <a href="#" className="text-sm font-light text-white">
              Terms of Use
            </a>

            <div className="h-1 w-1 bg-[#424242]" />

            <a href="#" className="text-sm font-light text-white">
              Privacy Policy
            </a>
          </div>

          <span className="!mt-10 text-sm text-[#D9D9D9B2]">
            &copy; 2023 QuickETA
          </span>
        </div>
      </div>

      <figure className="absolute bottom-5 right-5 h-10 w-10">
        <img
          src="/assets/icons/logo-small.svg"
          alt="Logo"
          className="h-full w-full object-cover"
        />
      </figure>
    </footer>
  );
};

export default Footer;
