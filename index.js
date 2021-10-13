var shows = document.querySelectorAll(".show");
var hides = document.querySelectorAll(".hide");

for(let i=0;i<shows.length;i++){
    shows[i].addEventListener("click", function(){
        if(hides[i].style.display == "flex")
            hides[i].style.display = "none";
        else
            hides[i].style.display = "flex";
    })
    // shows[i].document.querySelectorAll(".hide")[i].sty
}

// document.querySelectorAll(".show").addEventListener("click",function(){
//     if(document.querySelectorAll(".hide").style.display == "flex")
//     document.querySelectorAll(".hide").style.display = "none";
//     else
//     document.querySelectorAll("hide").style.display = "flex";
// })

// document.getElementById("khul").addEventListener("click",function(){
//     if(document.getElementById("ja").style.display == "flex")
//     document.getElementById("ja").style.display = "none";
//     else
//     document.getElementById("ja").style.display = "flex";
// })


var slidePosition = 1;
SlideShow(slidePosition);

// forward/Back controls
function plusSlides(n) {
  SlideShow(slidePosition += n);
}

//  images controls
function currentSlide(n) {
  SlideShow(slidePosition = n);
}

function SlideShow(n) {
  var i;
  var slides = document.getElementsByClassName("Containers");
  var circles = document.getElementsByClassName("dots");
  if (n > slides.length) {slidePosition = 1}
  if (n < 1) {slidePosition = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
      circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePosition-1].style.display = "block";
  circles[slidePosition-1].className += " enable";
}


// -------------------
var slidePosition = 0;
SlideShow();

function SlideShow() {
  var i;
  var slides = document.getElementsByClassName("Containers");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slidePosition++;
  if (slidePosition > slides.length) {slidePosition = 1}
  slides[slidePosition-1].style.display = "block";
  setTimeout(SlideShow, 8000); // Change image every 2 seconds
} 