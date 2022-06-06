$(document).ready(function(){
  // 탭메뉴 - 배경없는 가로형
  $('.gnb > ul').mouseenter(function(){
    $('.submenu').stop().slideDown();
  });

  $('.gnb > ul').mouseleave(function(){
    $('.submenu').stop().slideUp();
  });

  // 메인메뉴 - 상하
  setInterval(function(){
    $('.slideWrap').animate({'marginTop': '-300px'},function(){
      $('.slide:first').appendTo('.slideWrap');
      $('.slideWrap').css({'marginTop': '0'});
      
    });
  },3000);

  //탭
  $('.tabmenu li').click(function(){
    var i = $(this).index();
    $('.tabmenu li').removeClass('on')
    $(this).addClass('on')

    $('.tabitem>*').hide().removeClass('on');
    $('.tabitem>*').eq(i).show().addClass('on');    
  });

  //팝업
  $('.tabitem .notice li:first-child').click(function(){
    $('.popup').show();

    $('.popup a').click(function(){
      $('.popup').hide();
    })

  })

});


