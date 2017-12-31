/* Shows different text based on button click */

(function() {
    'use strict';

    //Sets up event handlers for all buttons.
    window.onload = function() {
        document.getElementById('home').onclick = home;
		document.getElementById('events').onclick = events;
		document.getElementById('rankings').onclick = rankings;
		document.getElementById('contact').onclick = contact;
		home();
    };

    //Home text enabled
    function home() {
		updateDisplay("homeText");
    }
	
	function events() {
		updateDisplay("eventsText");
	}
	
	function rankings() {
		updateDisplay("rankingsText");
	}
	
	function contact() {
		updateDisplay("contactText");
	}
	
	function updateDisplay(divName) {
		var divs = document.querySelectorAll(".main");
		for (var i = 0; i < divs.length; i++){
			divs[i].style.display = 'none';
		}
		document.getElementById(divName).style.display = 'block';
	}
})();