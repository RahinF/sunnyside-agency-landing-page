import clsx from 'clsx';
import Testimony from './Testimony';
import testimonials from './data';

const Testimonials = () => {
  return (
    <section className="py-32 bg-yellow-50/20">
      <h1
        className={clsx([
          'font-fraunces font-black',
          'text-center text-xl text-neutral-400',
          'uppercase tracking-widest',
        ])}
      >
        client testimonials
      </h1>
      <div
        className={clsx([
          'max-w-screen-xl m-auto',
          'mt-12 px-4 lg:px-0',
          'grid grid-cols-1 md:grid-cols-3 gap-14',
        ])}
      >
        {testimonials.map((testimonial) => (
          <Testimony
            key={testimonial.name}
            {...testimonial}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
