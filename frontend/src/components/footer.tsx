import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-cover bg-center relative text-white py-4" style={{ backgroundImage: `url('/images/footer-bg.jpeg')` }}>
      {/* Overlay */}
      <div className="bg-[#0C834E] absolute"></div>

      {/* Content */}
      <div className="flex mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} CBC Kericho Primary and Junior Secondary School. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;