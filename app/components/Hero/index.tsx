import clsx from 'clsx';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="bg-header">
      <div className="relative max-w-screen-2xl m-auto">
        <div
          className={clsx([
            'md:w-full',
            'flex flex-col items-center gap-20 md:gap-16',
            'absolute transform',
            'top-[55%] -translate-y-[55%]',
            'sm:top-[60%] sm:-translate-y-[60%]',
            'md:top-[30%] md:-translate-y-[30%]',
            'lg:top-[45%] lg:-translate-y-[45%]',
            'left-1/2 -translate-x-1/2',
          ])}
        >
          <h1
            className={clsx([
              'font-fraunces font-black',
              'text-white text-5xl xl:text-6xl text-center',
              'uppercase tracking-widest',
            ])}
          >
            we are creatives
          </h1>
          <Image
            src="/icon-arrow-down.svg"
            alt="arrow"
            width={35}
            height={110}
          />
        </div>
        <picture>
          <source
            srcSet="desktop/image-header.jpg"
            media="(min-width: 768px)"
            width={2880}
            height={1600}
          />
          <img
            src="mobile/image-header.jpg"
            alt="header background"
            width={750}
            height={1076}
          />
        </picture>
      </div>
    </div>
  );
};

export default Hero;
