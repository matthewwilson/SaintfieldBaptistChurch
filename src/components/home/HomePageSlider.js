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
          "type":"LEADERSHIP STATEMENT",
          "title":"COVID-19",
          "subtitle": "In-building services suspended",
          "backgroundColor":"#ff5a34",
          "internalLink":true,
          "url":"/covid19",
          "buttonText": "READ MORE"
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
          "title":"In Christ Alone",
          "subtitle":"Studies in Philippians",
          "imageUrl":"img/slides/in-christ-alone.jpg",
          "internalLink":true,
          "url":"/sermons/series/In%20Christ%20Alone",
          "backgroundPosition":"center"
        },{
          "type":"GOSPEL SERIES",
          "title":"The Romance of Redemption",
          "subtitle":"Studies in Ruth",
          "imageUrl":"img/slides/romance.jpg",
          "internalLink":true,
          "url":"/sermons/series/The%20Romance%20of%20Redemption"
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
