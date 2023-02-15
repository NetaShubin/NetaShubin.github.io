// get container
const snowContainer = document.getElementById("snow-container");
// get 3 snowflakes
const snowContent = ['&#10052', '&#10053', '&#10054'];
// generate random number
const random = (num) => {
    return Math.floor(Math.random() * num);
}

// rand position function
const getRandomStyles = () => {
    const top = random(100);
    const left = random(100);
    const dur = random(10) + 10;
    const size = random(25) + 25;
    return ` 
        top: -${top}%; 
        left: ${left}%; 
        font-size: ${size}px; 
        animation-duration: ${dur}s; 
        `;
  }

// create snow
const createSnow = (num) => {
    for (var i = num; i > 0; i--) {
      var snow = document.createElement("div");
      snow.className = "snow";
      snow.style.cssText = getRandomStyles();
      snow.innerHTML = snowContent[random(2)];
      snowContainer.append(snow);
    }
  }


// create with 30 snowflakes
window.addEventListener("load", () => {
    createSnow(30);
  });