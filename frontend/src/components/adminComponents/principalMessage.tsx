const PrincipalMessage: React.FC = () => {
    return (
      <div className="bg-gradient-to-br from-white to-gray-300 border-green-200 rounded-2xl shadow-xl poppins-regular px-2">
        <h3 className="text-2xl md:text-3xl font-bold text-green-800 mb-4 flex items-center gap-2">
          <span>🎓</span> Principal's Welcome Message
        </h3>
        <blockquote className="text-green-800 italic border-l-4 md:text-lg border-green-400 pl-4 mb-4 kanit-regular">
          "Welcome to Kericho’s CBC-based school—where learning meets purpose and every learner is empowered to grow, explore, and lead. We strive to create a nurturing environment that cultivates innovation, responsibility, and character."
        </blockquote>
        <p className="text-gray-500 mb-4 text-sm md:text-base">
          Our learners are the heartbeat of our community. Together with passionate educators and a vibrant support system, we’re redefining education with creativity, competence, and care.
        </p>
        <p className="text-right font-semibold text-green-800 pr-1">– Mr. Kiptoo, Principal</p>
      </div>
    );
  };
  
  export default PrincipalMessage;
  