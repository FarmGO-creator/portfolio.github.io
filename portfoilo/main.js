	 const anchors = document.querySelectorAll('header a[href*="#"]');

	 for (anchor of anchors) {
	 	anchor.addEventListener('click', function(event) {
	 		event.preventDefault();
	 		anchorId = this.getAttribute('href');
	 		document.querySelector(anchorId).scrollIntoView({
	 			behavior: 'smooth',
	 			block: 'start'
	 		})
	 	})
	 };

function myNavigation(x) {
	const navigation = document.querySelector('.navigation');
	navigation.classList.toggle('active');
	x.classList.toggle("change");
}

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}