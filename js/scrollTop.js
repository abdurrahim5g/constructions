	//Get the button
	var mybutton = document.getElementById("myBtn");

	// When the user scrolls down 20px from the top of the document, show the button
	window.onscroll = function() {scrollFunction()};

	function scrollFunction() {
	  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
	    mybutton.style.opacity = "1";
	    mybutton.style.visibility = "visible";
	  } else {
	    mybutton.style.opacity = "0";
	    mybutton.style.visibility = "hidden";
	  }
	}