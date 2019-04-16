// MAIN MENU

let mainMenu = document.getElementsByClassName("main-menu")[0];

let overlay = document.getElementsByClassName("overlay")[0];
let burger = document.getElementsByClassName("burger-btn")[0];
let cross = document.getElementsByClassName("menu-cross")[0];

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

let dropLink = document.getElementsByClassName("drop-opener");

for (let i = 0; i < dropLink.length; i++) {

  dropLink[i].addEventListener("click", function() {
	if (this.className == "drop-opener") {
	  this.className = "drop-opener drop-active";
	} else {
	  this.className = "drop-opener";
	}
  }, false);
}

let menuOffset = $(".main-header").height();
(function($){
	$(window).on("load",function(){
		$("a[rel='m_PageScroll2id']").mPageScroll2id({scrollSpeed: 500,offset: menuOffset});
	});
})(jQuery);


// PROGRESS BAR
if($('.progress-bar').length >0 ) {
	let vindowHeight = $(window).height();

	let progressOffset = $('.progress-bar').offset().top;
	let headerHeight = $('.main-header').height();
	let halfScreen = $(window).height()/2 + headerHeight/2;
	let progressBarHeight = $('.progress-bar').height();

	$(window).resize(function (event) {
		vindowHeight = $(window).height();
		progressOffset = $('.progress-bar').offset().top;
		headerHeight = $('.main-header').height();
		halfScreen = $(window).height()/2 + headerHeight/2;
		progressBarHeight = $('.progress-bar').height();
	});

	let progress = $('.progress');

	let listOfPanels = $('.progress-bar-block li');
	let numOfPanels = $('.progress-bar-block li').length;


	function manageActivePanels(progress) {
		for (let i = 0; i < numOfPanels; i++) {
			if ($(listOfPanels[i]).offset().top - progress < 0) {
				$(listOfPanels[i]).addClass("active");
			} else {
				$(listOfPanels[i]).removeClass("active");
			}
		}
	}

	manageActivePanels();

	$(window).scroll(function (event) {
		let scroll = $(window).scrollTop();
		let middleScreen = scroll + halfScreen;
		let progressHeight = middleScreen - progressOffset;
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
		let scroll = $(window).scrollTop();
		let middleScreen = scroll + halfScreen;
		let progressHeight = middleScreen - progressOffset;
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
	let tabs = $('.tab-list li');
	let tabsNum = tabs.length;
	let cards = $('.card-stack .card');

	for (let i = 0; i < tabsNum; i++) {

		$(tabs[i]).click(function(i) {
			let l = $(this).data("position") - 1;
			for (let j = 0; j < tabsNum; j++) {
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
	let benefits = $('.benefits-list li');
	let benefitsNum = benefits.length;

	for (let i = 0; i < benefits.length; i++) {
		if ($(benefits[i]).hasClass('active')) {
			$(".active .block-content-wrapper").slideDown(0);
		}
	}

	for (let i = 0; i < benefits.length; i++) {

		$(benefits[i]).click(function(i) {
			if (!$(this).hasClass('active')) {
				for (let j = 0; j < benefitsNum; j++) {
					$(benefits[j]).removeClass();
					$(benefits[j]).find('.block-content-wrapper').slideUp(300);
				}
				$(this).addClass('active');
				$(".active .block-content-wrapper").slideDown(300);
			}
		});
	}
}


// PORTFOLIO LIST

var projectsCategory = "all";
var projectsArea = "all";

if($('#category-selector').length > 0 ) {
	let tabs = $('#category-selector a');
	let tabsNum = tabs.length;
	let projects = $(".project");

	for (let i = 0; i < tabsNum; i++) {

		$(tabs[i]).click(function(i) {
			if ($(this).hasClass("link")) {
				for (let j = 0; j < tabsNum; j++) {
					if ($(tabs[j]).hasClass("active")) {
						$(tabs[j]).addClass("link").removeClass("active");
					}
				}

				projectsCategory = $(this).data("selector");

				for (let i = 0; i < projects.length; i++) {
					if (projectsCategory == "all" && projectsArea == "all") {
						$(projects[i]).show();
					} else if ($(projects[i]).data("category") == projectsCategory && projectsArea == "all") {
						$(projects[i]).show();
					} else if ("all" == projectsCategory && $(projects[i]).data("area") == projectsArea) {
						$(projects[i]).hide();
					} else if ($(projects[i]).data("category") == projectsCategory && $(projects[i]).data("area") == projectsArea) {
						$(projects[i]).show();
					} else {
						$(projects[i]).hide();
					}
				}

				$(this).addClass("active").removeClass("link");
			}
		});
	}
}

if($('#area-selector').length > 0 ) {
	let tabs = $('#area-selector a');
	let tabsNum = tabs.length;
	let projects = $(".project");

	for (let i = 0; i < tabsNum; i++) {

		$(tabs[i]).click(function(i) {
			if ($(this).hasClass("link")) {
				for (let j = 0; j < tabsNum; j++) {
					if ($(tabs[j]).hasClass("active")) {
						$(tabs[j]).addClass("link").removeClass("active");
					}
				}

				projectsArea = $(this).data("selector");

				for (let i = 0; i < projects.length; i++) {
					if (projectsCategory == "all" && projectsArea == "all") {
						$(projects[i]).show();
					} else if ($(projects[i]).data("category") == projectsCategory && projectsArea == "all") {
						$(projects[i]).show();
					} else if ("all" == projectsCategory && $(projects[i]).data("area") == projectsArea) {
						$(projects[i]).show();
					} else if ($(projects[i]).data("category") == projectsCategory && $(projects[i]).data("area") == projectsArea) {
						$(projects[i]).show();
					} else {
						$(projects[i]).hide();
					}
				}

				$(this).addClass("active").removeClass("link");
			}
		});
	}
}

if ($(".legal-tabs").length > 0) {
	
	$("#sticky-aside").stick_in_parent()
	.on("sticky_kit:bottom", function(e) {
	  console.log("bottom!", e.target);
	})
	.on("sticky_kit:unbottom", function(e) {
	  console.log("unbottom!", e.target);
	});

	let tabs = [];
	let headerNames = [];
	let headersOffsets = [];
	let linkIndex = 0;
	let headerHeight = $('.main-header').height();
	for (let i = 0; i < $(".legal-tabs a").length; i++) {
		tabs.push($(".legal-tabs a")[i]);
	}
	for (let i = 0; i < tabs.length; i++) {
		headerNames.push($(tabs[i]).attr("href"));
	}
	for (let i = 0; i < tabs.length; i++) {
		headersOffsets.push($(headerNames[i]).offset().top);
	}

	for (let i = tabs.length; i >= 0; i--) {
		if ($(window).scrollTop()+headerHeight < headersOffsets[i]) {
			linkIndex = i - 1;

			if (linkIndex < 0) {
				linkIndex = 0;
			}
		}
	}
	for (let i = 0; i < tabs.length; i++) {
		if (i == linkIndex) {
			$(tabs[i]).addClass("active");
		} else {
			$(tabs[i]).removeClass("active");
		}
	}

	$(window).resize(function (event) {
		let tabs = [];
		let headerNames = [];
		let headersOffsets = [];
		let linkIndex = 0;
		let headerHeight = $('.main-header').height();
		for (let i = 0; i < $(".legal-tabs a").length; i++) {
			tabs.push($(".legal-tabs a")[i]);
		}
		for (let i = 0; i < tabs.length; i++) {
			headerNames.push($(tabs[i]).attr("href"));
		}
		for (let i = 0; i < tabs.length; i++) {
			headersOffsets.push($(headerNames[i]).offset().top);
		}

		for (let i = tabs.length; i >= 0; i--) {
			if ($(window).scrollTop()+headerHeight < headersOffsets[i]) {
				linkIndex = i - 1;

				if (linkIndex < 0) {
					linkIndex = 0;
				}
			}
		}
		for (let i = 0; i < tabs.length; i++) {
			if (i == linkIndex) {
				$(tabs[i]).addClass("active");
			} else {
				$(tabs[i]).removeClass("active");
			}
		}
	});

	$(window).scroll(function (event) {
		for (let i = tabs.length; i >= 0; i--) {
			if ($(window).scrollTop()+headerHeight < headersOffsets[i]) {
				linkIndex = i - 1;

				if (linkIndex < 0) {
					linkIndex = 0;
				}
			}
		}
		for (let i = 0; i < tabs.length; i++) {
			if (i == linkIndex) {
				$(tabs[i]).addClass("active");
			} else {
				$(tabs[i]).removeClass("active");
			}
		}
	});
}

// PROJECT SCREENSHOOTS


if($('.project-screenshots').length >0 ) {
	$('.project-screenshots').owlCarousel({
		center: true,
		loop: true,
		margin: 40,
		autoWidth: true,
		nav: true,
		items: 1,
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

// TESTIMONIALS

if($('.testimonials-list').length >0 ) {
	$('.testimonials-list').owlCarousel({
		center: true,
		loop: true,
		margin: 80,
		autoWidth: true,
		nav: true,
		items: 1,
		responsive:{
			0:{
				margin: 20,
				singleItem: true,
				autoWidth: false
			},
			840:{
				margin: 80
			}
		}
	});
}

// TEAM SLIDER

if($('.employee-list').length >0 ) {
	$('.employee-list').owlCarousel({
		center: true,
		loop: true,
		margin: 65,
		autoWidth: true,
		nav: true,
		items: 1,
		responsive:{
			0:{
				margin: 15
			},
			840:{
				margin: 50
			},
			1200:{
				margin: 65
			}
		}
	});
}
$(".testimonials-section .owl-item").css("width", "100px");