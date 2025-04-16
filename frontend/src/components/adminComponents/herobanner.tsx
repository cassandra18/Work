import Slider from 'react-slick';

const quotes = [
  {
    text: "Education is the passport to the future, for tomorrow belongs to those who prepare for it today.",
    author: "Malcolm X"
  },
  {
    text: "The beautiful thing about learning is that no one can take it away from you.",
    author: "B.B. King"
  },
  {
    text: "Success is no accident. It is hard work, perseverance, learning, studying, and most of all, love of what you are doing.",
    author: "Pelé"
  },
  {
    text: "Learning never exhausts the mind.",
    author: "Leonardo da Vinci"
  }
];

const settings = {
  dots: true,
  infinite: true,
  speed: 800,
  autoplay: true,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true
};

const HeroBanner = () => {
  return (
    <div
    className=" relative py-12 md:py-24 px-4  text-white h-96 text-center"
    style={{
      backgroundImage: `url('/images/bg2.jpeg')`,
    }}
  >
    <div className="inset-0 absolute bg-black opacity-60"></div>
      <Slider {...settings}>
        {quotes.map((quote, index) => (
          <div key={index} className="max-w-4xl mx-auto">
            <p className="text-2xl  poppins-bold  mb-4">"{quote.text}"</p>
            <p className="text-lg  md:text-lg text-[#9dffd3] poppins-extrabold">— {quote.author}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroBanner;
