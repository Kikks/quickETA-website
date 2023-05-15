import { Icon } from '@iconify/react';
import './Pricing.css';

const Pricing = () => {
  return (
    <section id="pricing" className="pricing w-full">
      <div className="max-w-container flex min-h-screen items-start justify-center space-x-20 px-7 py-20">
        <div className="flex w-full max-w-[400px] flex-col overflow-hidden rounded-2xl">
          <div className="flex w-full flex-col items-center bg-secondary-main p-10 text-center text-white">
            <span className="text-xl uppercase">Basic Plan</span>
            <h1 className="text-4xl font-bold uppercase md:text-7xl">Free</h1>
          </div>

          <div className="min-h-[250px] bg-white p-10">
            <div className="flex items-start space-x-3">
              <Icon
                icon="material-symbols:done-rounded"
                className="text-2xl text-primary-main"
              />
              <span className="flex-1 font-medium text-[#444851]">
                Set up to 7 ETA’s monthly
              </span>
            </div>
          </div>
        </div>

        <div className="flex w-full max-w-[400px] flex-col overflow-hidden rounded-2xl">
          <div className="flex w-full flex-col items-center bg-primary-dark p-10 text-center text-white">
            <div className="flex items-start space-x-3">
              <Icon icon="ph:crown-simple-fill" className="text-2xl" />
              <span className="text-xl uppercase">UPGRADE TO PRO</span>
            </div>
            <h1 className="text-4xl font-bold uppercase md:text-7xl">$1.50</h1>
            <p className="mt-2 text-lg">/ month unlimited</p>
          </div>

          <div className="flex min-h-[250px] flex-col space-y-5 bg-white p-10">
            <div className="flex items-start space-x-3">
              <Icon
                icon="material-symbols:done-rounded"
                className="text-2xl text-primary-main"
              />
              <span className="flex-1 font-medium text-[#444851]">No Ads</span>
            </div>

            <div className="flex items-start space-x-3">
              <Icon
                icon="material-symbols:done-rounded"
                className="text-2xl text-primary-main"
              />
              <span className="flex-1 font-medium text-[#444851]">
                Save trip history for repeat use e.g home to office 
              </span>
            </div>

            <div className="flex items-start space-x-3">
              <Icon
                icon="material-symbols:done-rounded"
                className="text-2xl text-primary-main"
              />
              <span className="flex-1 font-medium text-[#444851]">
                Quickbites → meals that get to you in 10mins or less ?
              </span>
            </div>

            <div className="flex items-start space-x-3">
              <Icon
                icon="material-symbols:done-rounded"
                className="text-2xl text-primary-main"
              />
              <span className="flex-1 font-medium text-[#444851]">
                Delivery services to easily share ETA with customer for
                satisfaction
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
