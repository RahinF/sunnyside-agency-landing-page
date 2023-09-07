import clsx from 'clsx';

interface Props {
  imagePosition: string;
  backgroundColor: string;
  src: string;
  alt: string;
  heading: string;
  paragraphText: string;
  link: string;
  linkText: string;
}

const TopTile = ({
  imagePosition,
  backgroundColor,
  src,
  alt,
  heading,
  link,
  linkText,
  paragraphText,
}: Props) => {
  return (
    <div className="grid grid-cols-1 lg:full-width-split-screen">
      <div
        className={clsx(
          [
            'flex flex-col gap-10 justify-center order-2',
            'py-20 px-8',
            'items-center lg:items-start text-center lg:text-start',
          ],
          {
            'lg:col-start-2 lg:order-1 lg:pr-20': imagePosition === 'end',
            'lg:col-start-3 lg:order-2 lg:pl-20': imagePosition === 'start',
          },
        )}
      >
        <h1 className="font-fraunces font-black capitalize text-4xl text-slate-800">
          {heading}
        </h1>
        <p className="font-barlow text-neutral-600 text-lg max-w-prose">
          {paragraphText}
        </p>
        <a
          href={link}
          className={clsx(
            [
              'uppercase font-fraunces w-max relative',
              `before:content[''] before:block before:h-2 before:w-full`,
              `before:rounded-xl before:absolute before:bottom-px before:left-0 before:-z-10`,
              'before:opacity-30 hover:before:opacity-100 before:transition before:duration-300',
            ],
            {
              'before:bg-tile-yellow': backgroundColor === 'yellow',
              'before:bg-tile-red': backgroundColor === 'red',
            },
          )}
        >
          {linkText}
        </a>
      </div>
      <picture
        className={clsx(['order-1 flex justify-center'], {
          'lg:col-start-3 lg:col-end-5 lg:order-2 lg:justify-start':
            imagePosition === 'end',
          'lg:col-start-1 lg:col-end-3 lg:order-1 lg:justify-end':
            imagePosition === 'start',
          'bg-tile-yellow': backgroundColor === 'yellow',
          'bg-tile-red': backgroundColor === 'red',
        })}
      >
        <source
          srcSet={`desktop/${src}`}
          media="(min-width: 768px)"
          width={720}
          height={600}
        />
        <img
          src={`mobile/${src}`}
          alt={alt}
          width={750}
          height={624}
        />
      </picture>
    </div>
  );
};

export default TopTile;
