import React from "react";
import Slider from "react-slick";
import $ from "jquery";
import HomePageSlide from "./HomePageSlide";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import "./HomePageSlider.css";

class HomePageSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      padding: this.getPadding(),
      slides: [{
          "type":"REGISTRATION OPEN",
          "title":"Holiday Bible Club",
          "subtitle":"9th - 13th June",
          "imageUrl":"img/slides/hbc.png",
          "url":"/hbc",
          "backgroundPosition":"center",
          "internalLink":true,
          "buttonText":"Register Now"
        },{
          "type":"REGISTRATION OPEN",
          "title":"Sports 4 Christ",
          "subtitle": "18th - 21st August",
          "url":"/s4c",
          "imageUrl":"img/slides/sports.jpg",
          "internalLink":true,
          "buttonText":"REGISTER NOW"
        },
        {
          type: "BIBLE STUDY",
          title: "CHRIST-CENTERED LIVING",
          subtitle: "A study in the book of Colossians",
          imageUrl: "img/slides/center.jpg",
          url: "/sermons/series/Christ-Centred%20Living",
          backgroundPosition: "center",
          buttonText: "LISTEN AGAIN",
          internalLink: true,
        },
        {
          type: "GOSPEL MISSION",
          title: "WHERE IS GOD?",
          subtitle: "The search for reason in a troubled world",
          imageUrl: "img/slides/where-is-god.jpeg",
          url: "/sermons/series/Where%20is%20God%3F",
          backgroundPosition: "center",
          buttonText: "LISTEN AGAIN",
          internalLink: true,
        },
        {
          type: "SUNDAY MORNING SERIES",
          title: "An Open Letter to the Church",
          subtitle: "Studies in the Book of Titus",
          url: "/sermons/series/Titus",
          imageUrl: "img/slides/titus.jpeg",
          internalLink: true,
          buttonText: "LISTEN AGAIN",
        },
        {
          type: "CHILDRENS & YOUTH WORK",
          title: "What's On",
          subtitle: "Term-time activities for tots, tweens and teens",
          url: "/about/whats-on",
          imageUrl: "img/slides/events.jpg",
          internalLink: true,
          buttonText: "FIND OUT MORE",
        },
      ],
    };
  }

  getPadding = () => {
    if ($(window).width() > 700) {
      return ($(window).width() - 700) / 2;
    } else {
      return 0;
    }
  };

  updateDimensions = () => {
    this.setState({
      padding: this.getPadding(),
    });
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render() {
    var settings = {
      centerMode: true,
      centerPadding: this.state.padding + "px",
      slidesToShow: 1,
      autoplay: true,
      arrows: false,
      autoplaySpeed: 5000,
      dots: true,
    };

    const slides = this.state.slides.map((slide, index) => {
      return (
        <div key={index}>
          <HomePageSlide {...slide} />
        </div>
      );
    });

    return <Slider {...settings}>{slides}</Slider>;
  }
}

export default HomePageSlider;
