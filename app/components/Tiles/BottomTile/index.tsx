import clsx from 'clsx';

interface Props {
  backgroundColor: string;
  src: string;
  alt: string;
  heading: string;
  paragraphText: string;
}

const BottomTile = ({
  alt,
  backgroundColor,
  heading,
  paragraphText,
  src,
}: Props) => {
  return (
    <div
      className={clsx(
        [
          'grid',
          'lg:first:col-start-1 lg:first:col-end-3 lg:first:justify-end',
          'lg:last:col-start-3 lg:last:col-end-5 lg:last:justify-start',
        ],
        {
          'bg-tile-teal': backgroundColor === 'teal',
          'bg-tile-blue': backgroundColor === 'blue',
        },
      )}
    >
      <picture className="flex justify-center">
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

      <div className="-mt-48 items-center text-center flex flex-col gap-4">
        <h1 className="font-fraunces text-2xl text-slate-800">{heading}</h1>
        <p className="max-w-sm font-barlow">{paragraphText}</p>
      </div>
    </div>
  );
};

export default BottomTile;
