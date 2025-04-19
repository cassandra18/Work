const FilterTabs = () => {
    const handleScroll = (id: string) => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
    const filters = [
      { label: 'Upcoming Events', id: 'upcomingEvents' },
      { label: 'Latest Highlights', id: 'higlights' },
      { label: 'Monthly spotlight', id: 'monthlySpotlight' },
    ];
  
    return (
      <div className="flex flex-nowrap justify-center gap-4 pt-16 pb-6 px-4 shadow-md sticky top-0 z-20">
        {filters.map((filter, idx) => (
          <button
            key={idx}
            onClick={() => handleScroll(filter.id)}
            className="bg-green-800 text-white px-2 py-2 rounded-full hover:bg-green-600 transition duration-300 text-sm md:text-lg"
          >
            {filter.label}
          </button>
        ))}
      </div>
    );
  };
  
  export default FilterTabs;
  