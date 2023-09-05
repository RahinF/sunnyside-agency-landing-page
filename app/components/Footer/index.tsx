import Image from 'next/image';
import Link from 'next/link';
import Icons from './Icons';
import links from './data/links';

const Footer = () => {
  return (
    <footer className="bg-teal-500 text-teal-800 flex flex-col items-center py-24">
      <Image
        src="/logo.svg"
        alt="sunnyside logo"
        height={175}
        width={175}
      />

      <ul className="flex gap-10 mt-10 mb-20">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              href="#"
              className="font-barlow capitalize hover:text-white transition duration-300"
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex gap-6">
        <Icons />
      </div>
    </footer>
  );
};

export default Footer;
