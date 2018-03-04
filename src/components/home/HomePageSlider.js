import React from 'react';
import Slider from 'react-slick';
import $ from 'jquery';
import HomePageSlide from './HomePageSlide'
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";


class HomePageSlider extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      padding: this.getPadding(),
      slides: [{
          "type":"GOSPEL SERIES",
          "title":"7 CRIES OF THE CROSS",
          "subtitle":"",
          "url":"https://www.sermonaudio.com/search.asp?seriesOnly=true&currSection=sermonstopic&sourceid=saintfieldbaptist&keyword=The+7+Cries+of+the+Cross&keyworddesc=The+7+Cries+of+the+Cross",
          "imageUrl":"img/slides/isaiah.jpg"
        },{
          "type":"GOSPEL MEETINGS",
          "title":"TESTIMONY MEETINGS",
          "subtitle":"Let the redeemed of the Lord say so",
          "url":"https://www.sermonaudio.com/search.asp?seriesOnly=true&currSection=sermonstopic&sourceid=saintfieldbaptist&keyword=Testimony+Meetings+2018&keyworddesc=Testimony+Meetings+2018",
          "imageUrl":"img/slides/james.jpg"
        },{
          "type":"SUNDAY SERIES",
          "title":"JOURNEYING WITH JOSEPH",
          "url":"https://www.sermonaudio.com/search.asp?seriesOnly=true&currSection=sermonstopic&sourceid=saintfieldbaptist&keyword=Journeying+with+Joseph&keyworddesc=Journeying+with+Joseph",
          "imageUrl":"img/slides/joseph.jpg"
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
      arrows:false
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
