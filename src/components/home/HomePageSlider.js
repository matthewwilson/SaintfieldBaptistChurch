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
          "type":"MINISTRY MEETINGS",
          "title":"WHAT ON EARTH IS GOING ON?",
          "subtitle":"Sunday 22nd - Friday 27th April (D.V.)",
          "imageUrl":"img/slides/ministry.png",
          "url":"media/SBC_Ministry_Meetings_Invite.pdf",
          "buttonText":"MORE INFO",
          "target":"_blank"
        },{
          "type":"CELEBRATING",
          "title":"THIRTY YEARS",
          "subtitle":"of God's Faithfulness",
          "imageUrl":"img/slides/anniversary.png",
          "subsubtitle":"1988 - 2018"
        },{
          "type":"SUNDAY SERIES",
          "title":"JOURNEYING WITH JOSEPH",
          "url":"/sermons/series/Journeying%20with%20Joseph",
          "imageUrl":"img/slides/journey.jpg",
          "internalLink":true
        },{
          "type":"GOSPEL SERIES",
          "title":"WHERE DID IT ALL GO WRONG?",
          "url":"/sermons/series/Where%20did%20it%20all%20go%20wrong",
          "imageUrl":"img/slides/gowrong.jpg",
          "internalLink":true
        },{
          "type":"ENCOUNTERS WITH GOD",
          "title":"REDEMPTION FROM RELIGION",
          "subtitle":"The lifestory of Donald Fleming",
          "url":"/sermon/325181516593/Redemption%20from%20religion%20-%20Donald%20Fleming",
          "imageUrl":"img/slides/D_Flemming_TestimonyImage-01.png",
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
