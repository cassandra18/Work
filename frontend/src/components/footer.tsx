import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-cover bg-center relative text-white py-4 poppins-regular" style={{ backgroundImage: `url('/images/footer-bg.jpeg')` }}>
      {/* Overlay */}
      <div className="bg-[#0C834E] absolute"></div>

      {/* Content */}
      <div className="flex mx-auto">
        <div className="flex justify-center items-center mb-4">
            <div    className="relative">
                <img src="/images/school-logo.png" alt="Logo" className="h-48 w-48 mr-2 relative" />
                <h2 className="text-2xl poppins-bold absolute bottom-0 left-1/2 -translate-x-1/2 whitespace-nowrap text-[#9dffd3]">C.B.C KERICHO</h2>
            </div>
        </div>

        {/* links */}

        <div>
            <h3 className="text-[#9dffd3] font-bold text-lg mb-3">Contact Information</h3>
            <ul className="my-2">
                <li>P.O BOX</li>
                <li>0113120575</li>
                <li>cassandralelei013@gmail.com</li>
                <li>Opening hours: Mon - Sat 8:00 am - 5:00 am</li>
            </ul>
        </div>
      </div>

        <p className=" text-center text-sm">
          &copy; {new Date().getFullYear()} CBC Kericho Primary and Junior Secondary School. All rights reserved.
        </p>
    </footer>
  );
};

export default Footer;