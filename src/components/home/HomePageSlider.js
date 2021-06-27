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
          "subsubtitle":"SAINTFIELD COMMUNITY CENTRE CARPARK",
          "subtitle": "Every Sunday @ 6:30PM"
          "title":"DRIVE-IN CHURCH",
          "imageUrl":"img/slides/drive-in.jpeg",
          "internalLink":true,
          "url":"/sermons/series/Drive-In%20Church%202021",
          "backgroundPosition":"center"
        },{
          "type":"SUNDAY NIGHT SERIES",
          "title":"CHRIST IN ALL THE SCRIPTURES",
          "imageUrl":"img/slides/christ-in-all-the-scriptures.jpeg",
          "internalLink":true,
          "url":"/sermons/series/Christ%20In%20All%20The%20Scriptures",
          "backgroundPosition":"center"
        },{
          "type":"SUNDAY SERIES",
          "title":"STRENGTH RENEWED",
          "imageUrl":"img/slides/strength-renewed.jpeg",
          "internalLink":true,
          "url":"/sermons/series/Strength%20Renewed",
          "backgroundPosition":"center"
        },{
          "type":"SUNDAY SERIES",
          "title":"SOLOMON",
          "subtitle":"The story of history’s wisest fool",
          "imageUrl":"img/slides/solomon.jpeg",
          "internalLink":true,
          "url":"/sermons/series/The%20Life%20Of%20Solomon",
          "backgroundPosition":"center"
        },{
          "type":"SUNDAY SERIES",
          "title":"Family Ties",
          "subtitle": "God's design for our homes",
          "imageUrl":"img/slides/family.jpg",
          "backgroundPosition":"center",
          "internalLink":true,
          "url":"/sermons/series/Family%20Ties"
        },{
          "type":"BIBLE STUDY SERIES",
          "title":"UNSEARCHABLE RICHES",
          "subtitle":"Studies in Ephesians",
          "url":"/sermons/series/Unsearchable%20Riches",
          "imageUrl":"img/slides/riches.jpg",
          "internalLink":true
        },{
          "type":"BIBLE STUDY SERIES",
          "title":"WHAT IS A BIBLICAL BAPTIST?",
          "url":"/sermons/series/What%20is%20a%20Biblical%20Baptist%3F",
          "imageUrl":"img/slides/baptist.jpg",
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
