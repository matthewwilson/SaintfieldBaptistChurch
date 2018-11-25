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
          "type":"30/09 - 14/10",
          "title":"BEHOLD!",
          "subtitle":"Gospel Mission",
          "subsubtitle":"Sundays 7pm + Weeknights 8pm",
          "imageUrl":"img/slides/behold.png",
          "url":"/media/BEHOLD.pdf",
          "buttonText":"MORE INFO"
        },{
          "type":"CELEBRATING",
          "title":"THIRTY YEARS",
          "subtitle":"of God's Faithfulness",
          "imageUrl":"img/slides/anniversary.png",
          "subsubtitle":"1988 - 2018"
        },{
          "type":"SUNDAY SERIES",
          "title":"The Rare Jewel of Contentment ",
          "url":"/sermons/series/The%20Rare%20Jewel%20of%20Contentment",
          "imageUrl":"img/slides/jewel.jpg",
          "internalLink":true
        },{
          "type":"GOSPEL SERIES",
          "title":"WHERE DID IT ALL GO WRONG?",
          "url":"/sermons/series/Where%20did%20it%20all%20go%20wrong",
          "imageUrl":"img/slides/gowrong.jpg",
          "internalLink":true
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
