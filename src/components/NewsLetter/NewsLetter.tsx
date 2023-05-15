const NewsLetter = () => {
  return (
    <section id="newsletter" className="w-full">
      <div className="max-w-container flex flex-col items-center space-y-10 px-7 py-20">
        <h2 className="text-4xl font-bold !leading-[0.9] text-primary-light md:text-7xl">
          Join Our Newsletter
        </h2>

        <p className="max-w-[50ch] text-center text-xl font-light text-white">
          Subscribe to our newsletter to receive the latest news and exclusive
          offers weekly. No spam
        </p>

        <div className="!mt-16 flex w-full max-w-[550px] flex-col gap-5">
          <input
            placeholder="Enter your email"
            className="w-full rounded-md border-none bg-[#2E2D2D] p-5 text-center text-[#DADADA] shadow-[0_3px_4px_rgba(0,0,0,0.15)] focus:outline-dashed focus:outline-primary-main"
          />
          <button className="w-full rounded-md border-none bg-primary-dark p-5 text-center text-lg font-bold uppercase text-black shadow-[0_3px_4px_rgba(0,0,0,0.15)]">
            {' '}
            Subscribe{' '}
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
