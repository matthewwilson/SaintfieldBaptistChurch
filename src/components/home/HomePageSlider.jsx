import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import HomePageSlide from './HomePageSlide';
import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';
import './HomePageSlider.css';

const slides = [
  {
    type: 'BIBLE STUDY',
    title: 'Daniel',
    subtitle: 'Living Today',
    imageUrl: 'img/slides/daniel-living-today.webp',
    url: '/sermons/series/Daniel%20-%20Living%20Today',
    backgroundPosition: 'center',
    buttonText: 'LISTEN AGAIN',
    internalLink: true,
  },
  {
    type: 'SUNDAY MORNING SERIES',
    title: 'Questions for the Christian',
    subtitle: 'Biblical answers for everyday life',
    url: '/sermons/series/Questions%20For%20the%20Christian',
    imageUrl: 'img/slides/questions-christian.webp',
    internalLink: true,
    buttonText: 'LISTEN AGAIN',
  },
  {
    type: 'SUNDAY EVENING SERIES',
    title: 'The Gospel in Every Book',
    subtitle: 'Tracing God’s good news through Scripture',
    imageUrl: 'img/slides/gospel-every-book.webp',
    url: '/sermons/series/The%20Gospel%20In%20Every%20Book',
    backgroundPosition: 'center',
    buttonText: 'LISTEN AGAIN',
    internalLink: true,
  },
  {
    type: 'SERMON SERIES',
    title: 'Summer Psalms',
    subtitle: 'Finding refuge and rest in God',
    imageUrl: 'img/slides/summer-psalms.webp',
    url: '/sermons/series/Summer%20Psalms%202026',
    backgroundPosition: 'center',
    buttonText: 'LISTEN AGAIN',
    internalLink: true,
  },
  {
    type: 'CHILDRENS & YOUTH WORK',
    title: "What's On?",
    subtitle: 'Term-time activities for tots, tweens and teens',
    url: '/about/whats-on',
    imageUrl: 'img/slides/events.png',
    internalLink: true,
    buttonText: 'FIND OUT MORE',
  },
];

const getPadding = () => {
  if (window.innerWidth > 700) {
    return (window.innerWidth - 700) / 2;
  }
  return 0;
};

const HomePageSlider = () => {
  const [padding, setPadding] = useState(getPadding);

  useEffect(() => {
    const updateDimensions = () => {
      setPadding(getPadding());
    };
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const settings = {
    centerMode: true,
    centerPadding: `${padding}px`,
    slidesToShow: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 5000,
    dots: true,
  };

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index}>
          <HomePageSlide {...slide} />
        </div>
      ))}
    </Slider>
  );
};

export default HomePageSlider;
