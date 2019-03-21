// MAIN MENU

var mainMenu = document.getElementsByClassName("main-menu")[0];

var overlay = document.getElementsByClassName("overlay")[0];
var burger = document.getElementsByClassName("burger-btn")[0];
var cross = document.getElementsByClassName("menu-cross")[0];

overlay.addEventListener("click", toggleMenu);
burger.addEventListener("click", toggleMenu);
cross.addEventListener("click", toggleMenu);

function toggleMenu() {

  if (mainMenu.className == "main-menu") {
	mainMenu.className = "main-menu opened";
  } else {
	mainMenu.className = "main-menu";
  }
}

var dropLink = document.getElementsByClassName("drop-opener");

for (var i = 0; i < dropLink.length; i++) {

  dropLink[i].addEventListener("click", function() {
	if (this.className == "drop-opener") {
	  this.className = "drop-opener drop-active";
	} else {
	  this.className = "drop-opener";
	}
  }, false);
}

var menuOffset = $(".main-header").height();
(function($){
	$(window).on("load",function(){
		$("a[rel='m_PageScroll2id']").mPageScroll2id({scrollSpeed: 500,offset: menuOffset});
	});
})(jQuery);


// PROGRESS BAR
if($('.progress-bar').length >0 ) {
	var vindowHeight = $(window).height();
	var progressOffset = $('.progress-bar').offset().top;
	var headerHeight = $('.main-header').height();
	var halfScreen = $(window).height()/2 + headerHeight/2;
	var progressBarHeight = $('.progress-bar').height();
	var progress = $('.progress');

	var listOfPanels = $('.progress-bar-block li');
	var numOfPanels = $('.progress-bar-block li').length;


	function manageActivePanels(progress) {
		for (var i = 0; i < numOfPanels; i++) {
			if ($(listOfPanels[i]).offset().top - progress < 0) {
				$(listOfPanels[i]).addClass("active");
			} else {
				$(listOfPanels[i]).removeClass("active");
			}
		}
	}

	manageActivePanels();

	$(window).scroll(function (event) {
		var scroll = $(window).scrollTop();
		var middleScreen = scroll + halfScreen;
		var progressHeight = middleScreen - progressOffset;
		manageActivePanels(middleScreen - 26);
		if (progressHeight > 0 && progressHeight < progressBarHeight) {
			progress.height(progressHeight);
		} else if (progressHeight > progressBarHeight) {
			progress.height(progressBarHeight);
		} else {
			progress.height(0);
		}
	});

	$(window).ready(function (event) {
		var scroll = $(window).scrollTop();
		var middleScreen = scroll + halfScreen;
		var progressHeight = middleScreen - progressOffset;
		manageActivePanels(middleScreen - 26);
		if (progressHeight > 0 && progressHeight < progressBarHeight) {
			progress.height(progressHeight);
		} else if (progressHeight > progressBarHeight) {
			progress.height(progressBarHeight);
		} else {
			progress.height(0);
		}
	});
}


// TABS

if($('.tab-list').length >0 ) {
	var tabs = $('.tab-list li');
	var tabsNum = tabs.length;
	var cards = $('.card-stack .card');

	for (var i = 0; i < tabsNum; i++) {

		$(tabs[i]).click(function(i) {
			var l = $(this).data("position") - 1;
			for (var j = 0; j < tabsNum; j++) {
				if (l != j) {
					$(cards[j]).fadeOut(0);
					$(tabs[j]).removeClass('active');
				}
			}

			$(cards[l]).fadeIn(0);
			$(this).addClass('active');
		});
	}
}

// CAROUSEL

if($('.projects-carousel').length >0 ) {
	$('.projects-carousel').owlCarousel({
		center: true,
		loop: true,
		margin: 40,
		autoWidth: true,
		responsive:{
			0:{
				margin: 20
			},
			840:{
				margin: 30
			},
			1200:{
				margin: 40
			}
		}
	});
}


// BENEFITS LIST

if($('.benefits-list').length >0 ) {
	var benefits = $('.benefits-list li');
	var benefitsNum = benefits.length;

	for (var i = 0; i < benefits.length; i++) {
		if ($(benefits[i]).hasClass('active')) {
			$(".active .block-content-wrapper").slideDown(0);
		}
	}

	for (var i = 0; i < benefits.length; i++) {

		$(benefits[i]).click(function(i) {
			if (!$(this).hasClass('active')) {
				for (var j = 0; j < benefitsNum; j++) {
					$(benefits[j]).removeClass();
					$(benefits[j]).find('.block-content-wrapper').slideUp(300);
				}
				$(this).addClass('active');
				$(".active .block-content-wrapper").slideDown(300);
			}
		});
	}
}