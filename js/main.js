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