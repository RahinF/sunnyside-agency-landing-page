import Logo from '@app/components/Logo';
import clsx from 'clsx';
import Link from 'next/link';
import links from '../data';

const DesktopNavigation = () => {
  return (
    <nav className="bg-header hidden sm:block">
      <div className="max-w-screen-xl flex justify-between m-auto pt-12 pb-4 items-center px-4 ">
        <Logo className="w-40" />

        <ul className="flex gap-8 text-white font-barlow items-center">
          {links.map((link, index) => {
            const isLastLink = index === links.length - 1;

            return (
              <li
                key={index}
                className={clsx(['capitalize'], {
                  ['bg-white hover:bg-header-active transition duration-300 rounded-full p-3 group']:
                    isLastLink,
                })}
              >
                <Link
                  href="#"
                  className={clsx({
                    'p-3 font-fraunces uppercase text-black group-hover:text-white transition duration-300':
                      isLastLink,
                  })}
                >
                  {link}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default DesktopNavigation;
