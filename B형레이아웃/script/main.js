$(document).ready(function(){
// 메인 탭 메뉴 - 각각
  $('.gnb > ul > li').mouseenter(function(){
    $(this).find('.submenu').stop().slideDown();
  })

  $('.gnb > ul > li').mouseleave(function(){
    $('.submenu').stop().slideUp();
  })

  
// 이미지 슬라이드 상하
  setInterval(function(){
    $('.slideWrap').animate({'marginTop':'-300px'},function(){
      $('.slide:first').appendTo('.slideWrap');
      $('.slideWrap').css({'marginTop':'0px'});
    })
  },3000);

  //탭메뉴
  $('.tabmenu li').click(function(){
    var i = $(this).index();

    $('.tabitem >*').hide().removeClass('on');
    $('.tabitem >*').eq(i).show().addClass('on');

    $('.tabmenu li').removeClass('on');
    $(this).addClass('on');
  });

  // popup
  $('.notice > li:first-child').click(function(){
    $('.popup').show()
  })

  $('.popup > a').click(function(){
    $('.popup').hide()
  })


});







