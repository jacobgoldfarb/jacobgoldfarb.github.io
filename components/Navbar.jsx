import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


const Navbar = () => {
  const navbarItems = [
    { name: 'Projects', path: '/' },
    { name: 'Resumé', path: '/about-us' },
  ];

  return (
    <nav className="px-10 py-4 z-20">
      <ul className="flex items-center space-x-4 text-md md:text-xl">
        <div className="ml-30 rounded-lg w-full">
          <Link href={'/'} legacyBehavior>
            <a className={'text-5xl'}>{'Jacob Goldfarb'}</a>
          </Link>
        </div>
        <div className="flex justify-end">
          {navbarItems.map((item, index) => (
            <li key={index} className="px-6">
              <Link href={item.path} legacyBehavior>
                <a className="hover:text-gray-900">{item.name}</a>
              </Link>
            </li>
          ))}
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;