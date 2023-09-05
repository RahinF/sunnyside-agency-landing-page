'use client';

import icons from '../data/icons';

const Icons = () => {
  return (
    <>
      {Object.entries(icons).map(([key, { Icon, ...props }]) => (
        <Icon
          key={key}
          size={32}
          {...props}
          className="hover:text-white cursor-pointer transition duration-300"
        />
      ))}
    </>
  );
};

export default Icons;
