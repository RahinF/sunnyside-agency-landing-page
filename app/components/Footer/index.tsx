import Link from 'next/link';
import Logo from '../Logo';
import Icons from './Icons';
import links from './data/links';

const Footer = () => {
  return (
    <footer className="bg-tile-teal text-teal-800 flex flex-col items-center py-24">
      <Logo
        fill="#115e59"
        className="w-40"
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
