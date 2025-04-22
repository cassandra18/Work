const PrincipalMessage: React.FC = () => {
    return (
      <div className="rounded-2xl shadow-xl poppins-regular px-2 py-4 max-w-5xl mx-auto mt-10">
        <h3 className="text-2xl md:text-3xl font-bold text-green-700 mb-10  gap-2">
          <span>🎓</span> Principal's Welcome Message
        </h3>
        <p className="text-gray-800 mb-4   md:text-lg text-start md:text-center">
        Welcome to Kericho’s CBC-based school—where learning meets purpose and every learner is empowered to grow, explore, and lead. We strive to create a nurturing environment that cultivates innovation, responsibility, and character.
      
        <br />
        <p className="pt-2">
        Our learners are the heartbeat of our community. Together with passionate educators and a vibrant support system, we’re redefining education with creativity, competence, and care.
        </p>
        </p>
        <p className="text-right font-semibold text-green-800 pr-1">– Mr. Kiptoo, Principal</p>
      </div>
    );
  };
  
  export default PrincipalMessage;
  