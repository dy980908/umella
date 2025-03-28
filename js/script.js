$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
  var target = $(this.hash);
  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
  if (target.length) {
  $('html, body').animate({
  scrollTop: target.offset().top -90
  }, 500);
  return false;
  }
  }
  });
  });
  $(function(){
    $(".submenu").hide();
    $(".gnb>li").mouseenter(function(){
        $(this).children(".submenu").stop().slideDown();
    });
    $(".gnb>li").mouseleave(function(){
        $(this).children(".submenu").stop().slideUp();
    });
});
  // gnb e
var swiper = new Swiper(".mb", {
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
        },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,
  }); 
  document.querySelectorAll(".swiper-pagination, .swiper-button-prev, .swiper-button-next").forEach(el => {
    el.style.cursor = "url(../img/mouse_on.png) 0 0, auto";
});
//   banner e

document.addEventListener("DOMContentLoaded", function() {
  gsap.registerPlugin(ScrollTrigger);
  const targets = gsap.utils.toArray(".split"); 
  targets.forEach(target => {
      if (!target.closest("#popup_wrap")) {
          let SplitClient = new SplitType(target, { type: "lines, words, chars" });
          let chars = SplitClient.chars;

          gsap.from(chars, {
              y: 0.5,
              opacity: 0,
              duration: 1.5,
              ease: "expo.out",
              stagger: {
                  amount: 1,
                  from: "random"
              },
              scrollTrigger: {
                  trigger: target,
                  start: "top 80%",
                  end: "+=400",
                  markers: false
              }
          });
      }
  });
});
// company e

$(document).ready(function() {
	$("#top").click(function() {
		$('html, body').animate({scrollTop:0}, '300');
	});
});
// top e

$(function () {
  setInterval(function () {
      $(".time_img").delay(3000);
      $(".time_img").animate({
          'marginLeft': '-300px'
      });
      $(".time_img").delay(3000);
      $(".time_img").animate({
          'marginLeft': '-600px'
        });
        $(".time_img").delay(3000);
        $(".time_img").animate({
            'marginLeft': '-900px'
        });
        $(".time_img").delay(3000);
        $(".time_img").animate({
          'marginLeft': '0px'
        });
    });
});
// sale e
$(function() {
  $("#popup_wrap").hide();
  
  $(".click").click(function() {
    $("#popup_wrap").css("z-index", "9999").fadeIn();
    $("body").addClass("scroll_none");
  });

  $(".close").click(function() {
    $("#popup_wrap").fadeOut(function() {
      $(this).css("z-index", "-1");
    });
    $("body").removeClass("scroll_none");
  });
});
// popup e

$(function(){
  $(".sub_pl > ul > li > .plus").click(function(){
      var $this = $(this);
      var $pulsBox = $this.next(".puls_box");

      // 슬라이드 토글 적용
      $pulsBox.slideToggle(300);

      // 다른 열려 있는 .puls_box는 닫음
      $(".puls_box").not($pulsBox).slideUp(300);
  });
});
// support e


