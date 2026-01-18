import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className=" text-center py-4 mt-auto">
      <p>&copy; {currentYear} Jacob Goldfarb. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
