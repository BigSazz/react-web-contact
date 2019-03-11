import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <footer className="bg-light text-black mt-5 p-4 text-center">
        Copyright &copy; {new Date().getFullYear()} Quick-Save
      </footer>
    </div>
  );
};

export default Footer;
