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
