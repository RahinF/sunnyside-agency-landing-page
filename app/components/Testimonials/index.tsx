import clsx from 'clsx';
import Testimony from './Testimony';
import testimonials from './data';

const Testimonials = () => {
  return (
    <section className="py-32 bg-yellow-50/20">
      <h1 className="font-fraunces text-center tracking-widest text-xl uppercase font-black text-neutral-400">
        client testimonials
      </h1>
      <div
        className={clsx([
          'max-w-screen-xl m-auto',
          'mt-12 px-4 lg:px-0',
          'grid grid-cols-1 md:grid-cols-3 gap-14',
        ])}
      >
        {testimonials.map(({ name, role, testimony, avatar }) => (
          <Testimony
            key={name}
            name={name}
            role={role}
            testimony={testimony}
            avatar={avatar}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
