function getDate() {
    let text = document.getElementById("date");
    // Set variable to current date and time
    const now = new Date();
    text.innerHTML = now;
}

function check() {
    let answer = document.getElementById("practice");

    // Get today's date
    const today = new Date();

    // Compare today with October 3rd
    if (today.getDate() === 3 && today.getMonth() === 9) {
        answer.innerHTML += "It's October 3rd";
    } else {
        answer.innerHTML += "It's not October 3rd";
    }
}