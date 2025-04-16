const FilterTabs = () => {
    const handleScroll = (id: string) => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
    const buttons = [
      { label: 'Leadership', id: 'leadership' },
      { label: 'Heads of Departments', id: 'hods' },
      { label: 'Support & Wellness', id: 'support' },
      { label: 'Student Leaders', id: 'students' }
    ];
  
    return (
      <div className="flex flex-wrap justify-center gap-4  pt-16 pb-6 px-4 shadow-md">
        {buttons.map((btn, idx) => (
          <button
            key={idx}
            onClick={() => handleScroll(btn.id)}
            className="bg-green-800 text-white px-4 py-2 rounded-full hover:bg-green-600 transition duration-300 text-sm md:text-base"
          >
            {btn.label}
          </button>
        ))}
      </div>
    );
  };
  
  export default FilterTabs;
  