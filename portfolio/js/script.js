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