import Image from 'next/image';

const Testimony = ({ name, role, testimony, avatar }: Testimony) => {
  const src = `/users/${avatar}`;
  const alt = `${name.split(' ')[0]}'s avatar`;

  return (
    <article className="grid grid-rows-3 justify-items-center gap-8 text-center">
      <Image
        src={src}
        alt={alt}
        width={144}
        height={144}
        className="rounded-full h-16 w-16"
      />

      <p className="max-w-xs font-barlow text-neutral-600">{testimony}</p>

      <div>
        <h3 className="font-fraunces font-black text-slate-800">{name}</h3>
        <span className="font-barlow text-sm text-neutral-400">{role}</span>
      </div>
    </article>
  );
};

export default Testimony;
