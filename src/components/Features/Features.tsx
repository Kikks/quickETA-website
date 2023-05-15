const Features = () => {
  return (
    <section id="features" className="w-full bg-primary-main">
      <div className="max-w-container flex items-center space-x-20 px-7 pb-10 pt-40">
        <figure className="aspect-square w-full max-w-[470px] overflow-hidden rounded-2xl">
          <img
            src="/assets/images/features-image.png"
            alt="Man holding phone"
            className="h-full w-full object-cover"
          />
        </figure>

        <div className="flex flex-1 flex-col space-y-10">
          <h2 className="max-w-[40ch] text-4xl font-bold leading-[1] text-[#202327] md:text-[4rem]">
            Spend less time traveling...
          </h2>

          <div className="flex w-full flex-col space-y-5">
            <div className="flex items-start space-x-3">
              <div className="mt-2 h-3 w-3 bg-secondary-dark" />
              <p className="max-w-[40ch] text-lg">
                Get real time traffic update and set your desired ETA to get
                notified on the best time to move
              </p>
            </div>

            <div className="flex items-start space-x-3">
              <div className="mt-2 h-3 w-3 bg-secondary-dark" />
              <p className="max-w-[40ch] text-lg">
                Share <span className="font-semibold">ETA</span> with friends to
                track your trips
              </p>
            </div>

            <div className="flex items-start space-x-3">
              <div className="mt-2 h-3 w-3 bg-secondary-dark" />
              <p className="max-w-[40ch] text-lg">
                Plan future trips in order to get the best time to travel within
                that space of time
              </p>
            </div>

            <div className="flex items-start space-x-3">
              <div className="mt-2 h-3 w-3 bg-secondary-dark" />
              <p className="max-w-[40ch] text-lg">
                Save Destination <span className="font-semibold">ETA</span> for
                future trips
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
