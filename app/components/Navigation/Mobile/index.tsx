'use client';

import Logo from '@app/components/Logo';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import links from '../data';

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="bg-header sm:hidden">
      <div className="flex justify-between pt-12 pb-4 items-center px-4">
        <Logo className="w-40" />

        <button
          className="hover:bg-header-active p-3 rounded-full transition duration-300"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="main-menu"
        >
          <div className="h-6 w-6 grid place-items-center">
            <Image
              src="/icon-hamburger.svg"
              alt="hamburger icon"
              width={24}
              height={16}
              className="h-4 w-6"
              aria-hidden={true}
            />
          </div>
        </button>
      </div>

      {isOpen && (
        <div
          className="px-6"
          id="main-menu"
        >
          <div className="border-t-[25px] border-x-[25px] border-l-transparent border-r-white border-t-transparent" />
          <div className="bg-white py-8 px-4">
            <ul className="flex flex-col gap-8 text-neutral-600 font-barlow items-center">
              {links.map((link, index) => {
                const isLastLink = index === links.length - 1;

                return (
                  <li
                    key={index}
                    className={clsx(['capitalize'], {
                      ['bg-tile-yellow rounded-full p-3']: isLastLink,
                    })}
                  >
                    <Link
                      href="#"
                      onClick={() => setIsOpen(false)}
                      className={clsx({
                        'p-3 font-fraunces uppercase text-black ': isLastLink,
                      })}
                    >
                      {link}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default MobileNavigation;
