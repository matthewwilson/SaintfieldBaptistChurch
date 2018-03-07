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
          "type":"CELEBRATING",
          "title":"THIRTY YEARS",
          "subtitle":"of God's Faithfulness",
          "imageUrl":"img/slides/anniversary.png",
          "subsubtitle":"1988 - 2018"
        },{
          "type":"GOSPEL SERIES",
          "title":"WHERE DID IT ALL GO WRONG?",
          "url":"https://www.sermonaudio.com/search.asp?seriesOnly=true&currSection=sermonstopic&sourceid=saintfieldbaptist&keyword=Where+did+it+all+go+wrong&keyworddesc=Where+did+it+all+go+wrong",
          "imageUrl":"img/slides/gowrong.jpg"
        },{
          "type":"SUNDAY SERIES",
          "title":"JOURNEYING WITH JOSEPH",
          "url":"https://www.sermonaudio.com/search.asp?seriesOnly=true&currSection=sermonstopic&sourceid=saintfieldbaptist&keyword=Journeying+with+Joseph&keyworddesc=Journeying+with+Joseph",
          "imageUrl":"img/slides/journey.jpg"
        },{
          "type":"ENCOUNTERS WITH GOD",
          "title":"A LIFE CHANGING DAY",
          "subtitle":"The lifestory of Billy Patterson",
          "url":"https://www.sermonaudio.com/sermoninfo.asp?m=t&s=22518159328",
          "imageUrl":"img/slides/testimony.png"
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
