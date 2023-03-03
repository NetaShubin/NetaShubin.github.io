function getPrice() {
    let deal = document.getElementById("package");
    let chosen = deal.value;
    let cost = document.getElementById("price");
    if (chosen == 1) {
        cost.innerHTML = "$200";
    }
    if (chosen == 2) {
        cost.innerHTML = "$250";
    }
    if (chosen == 3) {
        cost.innerHTML = "$350";
    }
    if (chosen == 4) {
        cost.innerHTML = "$450";
    }
}

function reveal() {
    var reveals = document.getElementsByClassName("reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("activate");
        }
    }
}
window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();

// Back to top button- https://mdbootstrap.com/snippets/standard/mdbootstrap/2964350#js-tab-view
//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
    //https://stackoverflow.com/questions/15935318/smooth-scroll-to-top
    window.scrollTo({top: 0, behavior: 'smooth'});
}