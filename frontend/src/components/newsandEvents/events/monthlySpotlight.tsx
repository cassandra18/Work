import React from "react";
import "swiper/css";

const MonthlySpotlight: React.FC = () => {
  return (
    <section className="bg-gradient-to-b to-green-100 from-green-50" id="monthlySpotlight">
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-10 ">
      {/* Teacher Tip */}
      <div className="">
        <h2 className="text-2xl md:text-4xl font-bold text-green-800 mb-6 text-center">
          🧑‍🏫 Teacher Tip of the Month
        </h2>

            <div className="max-w-xl mx-auto bg-[#23b97526] p-6 rounded-2xl shadow-lg text-center">
              <p className="text-xl italic text-gray-800 mb-4">
                “Let learners own the project journey. Observe, don’t dictate.”
              </p>
              <p className="text-sm text-green-700 font-semibold">— Teacher Wisdom 🌟</p>
            </div>
      </div>

      {/* Student + Group Project */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Student of the Month */}
        <div className="bg-yellow-50 p-6 rounded-2xl shadow-md">
            
          <h3 className="text-2xl font-bold text-yellow-700 mb-2">
            ⭐ Student of the Month
          </h3>
          {/* Image + name + description */}
          <div className="flex items-center space-x-4 md:my-10 my-5">
            <img src="/images/head-boy-primary.jpeg" alt="head-boy-primary" loading="lazy" className="w-32 md:w-48 h-auto rounded-full"></img>
          
            <div>
            <p className="text-gray-700">
            <p className="text-lg text-gray-800 font-semibold mb-1">
                John Kiplangat, Grade 5
            </p>
                “Always helping others & excelling in Science Club”
            </p>
            </div>
          </div>
          
        </div>

        {/* Best Group Project */}
        <div className="bg-blue-50 p-6 rounded-2xl shadow-md">
          <h3 className="text-2xl font-bold text-blue-700 mb-2">
            🎨 Best Group Project
          </h3>
          {/* solar image + text */}
          <div className="flex items-center space-x-4 md:my-10 my-5">
            <img src="/images/solar.png" alt="solar" className="w-32 md:w-48 h-auto rounded-full mb-4" loading="lazy"></img>
          
            <div>
            <p className="text-lg text-gray-800 font-medium mb-1">
                JSS 7A – “Solar Water Purifier”
            </p>
            <p className="text-gray-700">
                Innovative and eco-conscious solution to clean water access.
            </p>
            </div>
          </div>
         
        </div>
      </div>
    </div>
    </section>
  );
};

export default MonthlySpotlight;
