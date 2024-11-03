import React from 'react';
import Slider from 'react-slick';
import $ from 'jquery';
import HomePageSlide from './HomePageSlide'
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import "./HomePageSlider.css"


class HomePageSlider extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      padding: this.getPadding(),
      slides: [{
          "type":"GOSPEL MISSION",
          "title":"WHERE IS GOD?",
          "subtitle": "10th-17th November",
          "imageUrl":"img/slides/where-is-god.jpeg",
          "url":"/media/Mission_Invitation_Nov24.pdf",
          "backgroundPosition":"center",
          "buttonText":"FIND OUT MORE",
          "target":"_blank"
        }, {
          "type":"SUNDAY MORNING SERIES",
          "title":"An Open Letter to the Church",
          "subtitle": "Studies in the Book of Titus",
          "url":"/sermons/series/Titus",
          "imageUrl":"img/slides/titus.jpeg",
          "internalLink":true,
          "buttonText":"LISTEN AGAIN"
        }, {
          "type":"CHILDRENS & YOUTH WORK",
          "title":"What's On",
          "subtitle": "Term-time activities for tots, tweens and teens",
          "url":"/about/whats-on",
          "imageUrl":"img/slides/events.jpg",
          "internalLink":true,
          "buttonText":"FIND OUT MORE"
        }
      ]
    }
  }

  getPadding = () => {
    if($(window).width() > 700) {
      return ($(window).width() - 700) / 2
    } else {
      return 0;
    }
  }

  updateDimensions = () => {
    this.setState({
      padding: this.getPadding()
    })
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render(){
    var settings = {
      centerMode: true,
      centerPadding: this.state.padding+'px',
      slidesToShow: 1,
      autoplay:true,
      arrows:false,
      autoplaySpeed:5000,
      dots:true
    };

    const slides = this.state.slides.map((slide,index)=>{
      return(
        <div key={index}>
          <HomePageSlide {...slide}/>
        </div>
      )
    })

    return (
      <Slider {...settings}>
        {slides}
      </Slider>
    );
  }
}

export default HomePageSlider;
