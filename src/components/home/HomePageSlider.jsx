import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import HomePageSlide from './HomePageSlide';
import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';
import './HomePageSlider.css';

const slides = [
  {
    type: 'BIBLE STUDY',
    title: 'ABRAHAM',
    subtitle: 'The friend of God',
    imageUrl: 'img/slides/abraham.png',
    url: '/sermons/series/Abraham%20The%20Friend%20of%20God',
    backgroundPosition: 'center',
    buttonText: 'LISTEN AGAIN',
    internalLink: true,
  },
  {
    type: 'SUNDAY MORNING SERIES',
    title: 'Building from Burdens',
    subtitle: 'Studies in the Book of Nehemiah',
    url: '/sermons/series/Building%20from%20Burdens',
    imageUrl: 'img/slides/nehemiah.png',
    internalLink: true,
    buttonText: 'LISTEN AGAIN',
  },
  {
    type: 'SUNDAY EVENING SERIES',
    title: 'The Seven Churches',
    subtitle: 'Letters in Revelation',
    imageUrl: 'img/slides/seven-churches.png',
    url: '/sermons/series/Letters%20to%20the%20Seven%20Churches',
    backgroundPosition: 'center',
    buttonText: 'LISTEN AGAIN',
    internalLink: true,
  },
  {
    type: 'SUNDAY EVENING SERIES',
    title: 'Seven Cries from the Cross',
    imageUrl: 'img/slides/seven-cries.png',
    url: '/sermons/series/Seven%20Cries%20from%20the%20Cross',
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
