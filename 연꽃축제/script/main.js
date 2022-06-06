$(document).ready(function(){
  //헤더 메뉴
  $('.gnb > ul').mouseenter(function(){
    $('.submenu').stop().slideDown()
  });

  $('.gnb > ul').mouseleave(function(){
    $('.submenu').stop().slideUp()
  });

  //슬라이드
  $('.slide:gt(0)').hide()

  setInterval(function(){
    $('.slide:first').fadeOut(1500).next().fadeIn(1500);
    $('.slide:first').appendTo('.slideWrap');
  },3000);

  //팝업
  $('.notice li:first-child').click(function(){
    $('.popup').show();
  })

  $('.popup a').click(function(){
    $('.popup').hide();
  })
});