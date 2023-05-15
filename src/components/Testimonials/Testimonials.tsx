import { Icon } from '@iconify/react';
import { testimonials } from './data';

const Testimonials = () => {
  return (
    <section id="testimonials" className="w-full">
      <div className="max-w-container flex flex-col items-center space-y-10 px-7 pb-40 pt-20">
        <h2 className="text-4xl font-bold leading-[1] text-primary-light md:text-5xl">
          Testimonials
        </h2>

        <div className="flex w-full items-center space-x-5">
          <button className="flex h-16 w-16 items-center justify-center rounded-full bg-[#1F2324] shadow-[0_6px_4px_rgba(0,0,0,0.25)]">
            <Icon
              icon={'mdi:chevron-left'}
              className="text-4xl text-primary-main"
            />
          </button>

          <div className="grid flex-1 grid-cols-3 gap-10">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="col-span-1 flex flex-col items-center space-y-5 rounded-2xl bg-primary-main px-5 py-10"
              >
                <div className="flex flex-col items-center text-center">
                  <figure className="h-14 w-14 overflow-hidden rounded-full">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="h-full w-full object-cover"
                    />
                  </figure>

                  <h3 className="mt-2 text-xl font-medium">
                    {testimonial.name}
                  </h3>
                  <span className="text-sm">{testimonial.title}</span>
                </div>

                <Icon
                  icon="icomoon-free:quotes-left"
                  className="text-2xl text-secondary-dark"
                />

                <p className="text-center text-sm">
                  {testimonial.desc.length > 150 ? (
                    <>
                      {testimonial.desc.slice(0, 150)}{' '}
                      <span className="">...</span>
                    </>
                  ) : (
                    testimonial.desc
                  )}
                </p>
              </div>
            ))}
          </div>

          <button className="flex h-16 w-16 items-center justify-center rounded-full bg-[#1F2324] shadow-[0_6px_4px_rgba(0,0,0,0.25)]">
            <Icon
              icon={'mdi:chevron-right'}
              className="text-4xl text-primary-main"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
