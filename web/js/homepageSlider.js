function getPadding() {
  if($(window).width() > 700) {
    return ($(window).width() - 700) / 2
  } else {
    return 0;
  }
}

$('.center').slick({
  centerMode: true,
  centerPadding: getPadding()+'px',
  slidesToShow: 1,
  autoplay:true,
  arrows:false
});

$(window).resize(function(){
    $('.center').slick('slickSetOption',"centerPadding", getPadding()+'px', true);
});
