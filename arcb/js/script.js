function getPrice() {
    let myList = document.getElementById("hours");
    let chosen = myList.value;
    let cost = document.getElementById("payment");
    let install = document.getElementById("installment");
    if (chosen == 1) {
        cost.innerHTML = "$420 or $84 per month";
        install.innerHTML = "$96 per month";
    }
    if (chosen == 2) {
        cost.innerHTML = "$800 or $160 per month";
        install.innerHTML = "$184 per month";
    }
    if (chosen == 3) {
        cost.innerHTML = "$1170 or $234 per month";
        install.innerHTML = "$270 per month";
    }
    if (chosen == 4) {
        cost.innerHTML = "$1520 or $304 per month";
        install.innerHTML = "$352 per month";
    }
    if (chosen == 4.5) {
        cost.innerHTML = "$1710 or $342 per month";
        install.innerHTML = "$396 per month";
    }
    if (chosen == 5) {
        cost.innerHTML = "$1850 or $370 per month";
        install.innerHTML = "$430 per month";
    }
    if (chosen == 5.5) {
        cost.innerHTML = "$2035 or $407 per month";
        install.innerHTML = "$473 per month";
    }
    if (chosen == 6) {
        cost.innerHTML = "$2160 or $432 per month";
        install.innerHTML = "$504 per month";
    }
    if (chosen == 6.5) {
        cost.innerHTML = "$2340 or $468 per month";
        install.innerHTML = "$546 per month";
    }
    if (chosen == 7) {
        cost.innerHTML = "$2450 or $490 per month";
        install.innerHTML = "$574 per month";
    }
    if (chosen == 7.5) {
        cost.innerHTML = "$2625 or $525 per month";
        install.innerHTML = "$615 per month";
    }
    if (chosen == 8) {
        cost.innerHTML = "$2720 or $544 per month";
        install.innerHTML = "$640 per month";
    }
    if (chosen == 8.5) {
        cost.innerHTML = "$2890 or $578 per month";
        install.innerHTML = "$680 per month";
    }
    if (chosen == 9) {
        cost.innerHTML = "$2970 or $594 per month";
        install.innerHTML = "$702 per month";
    }
    if (chosen == 9.5) {
        cost.innerHTML = "$3135 or $627 per month";
        install.innerHTML = "$741 per month";
    }
    if (chosen == 10) {
        cost.innerHTML = "$3200 or $640 per month";
        install.innerHTML = "$760 per month";
    }
    if (chosen == 10.5) {
        cost.innerHTML = "$3360 or $672 per month";
        install.innerHTML = "$798 per month";
    }
    if (chosen == 11) {
        cost.innerHTML = "$3520 or $704 per month";
        install.innerHTML = "$836 per month";
    }
    if (chosen == 11.5) {
        cost.innerHTML = "$3565 or $713 per month";
        install.innerHTML = "$851 per month";
    }
    if (chosen == 12) {
        cost.innerHTML = "$3720 or $744 per month";
        install.innerHTML = "$888 per month";
    }
    if (chosen == 12.5) {
        cost.innerHTML = "$3875 or $775 per month";
        install.innerHTML = "$925 per month";
    }
    if (chosen == 13) {
        cost.innerHTML = "$3900 or $780 per month";
        install.innerHTML = "$936 per month";
    }
    if (chosen == 13.5) {
        cost.innerHTML = "$4050 or $810 per month";
        install.innerHTML = "$972 per month";
    }
    if (chosen == 14) {
        cost.innerHTML = "$4200 or $840 per month";
        install.innerHTML = "$1008 per month";
    }
}

function getDayInfo() {
    let myList = document.getElementById("days");
    let chosen = myList.value;
    let time1 = document.getElementById("timeI");
    let level1 = document.getElementById("levelI");
    let teacher1 = document.getElementById("teacherI");
    let time2 = document.getElementById("timeII");
    let level2 = document.getElementById("levelII");
    let teacher2 = document.getElementById("teacherII");
    if (chosen == "Monday") {
        time1.innerHTML = "3:30-5:30<br>5:30-7:00<br>7:00-9:00";
        level1.innerHTML = "Ballet- Level D<br>Ballet- Level C*<br>Ballet & Pointe- Level E";
        teacher1.innerHTML = "Miss Yanina<br>Miss Yanina<br>Miss Yanina";
        time2.innerHTML = "4:30-5:30<br>5:30-7:00";
        level2.innerHTML = "Ballet- Level B<br>Ballet- Level C";
        teacher2.innerHTML = "Miss Victoria<br>Miss Victoria";
    }
    if (chosen == "Tuesday") {
        time1.innerHTML = "4:30-6:30<br>6:30-8:30";
        level1.innerHTML = "Ballet & Pointe- Level D*<br>Ballet & Pointe- Level F&G";
        teacher1.innerHTML = "Miss Yanina<br>Miss Yanina";
        time2.innerHTML = "";
        level2.innerHTML = "RESERVED";
        teacher2.innerHTML = "";
    }
    if (chosen == "Wednesday") {
        time1.innerHTML = "2:00-4:00<br>4:00-6:00<br>6:00-8:00";
        level1.innerHTML = "Ballet & Pointe- Level F&G<br>Ballet & Pointe- Level D<br>Ballet & Pointe- Level E";
        teacher1.innerHTML = "Miss Yanina<br>Miss Yanina<br>Miss Yanina";
        time2.innerHTML = "3:00-4:30<br>4:30-5:30<br>5:30-7:30";
        level2.innerHTML = "Ballet- Level C<br>Stretching<br>Ballet & Pointe- Level D*";
        teacher2.innerHTML = "Miss Polina<br>Miss Polina<br>Miss Polina";
    }
    if (chosen == "Thursday") {
        time1.innerHTML = "4:30-6:30<br>6:30-8:30";
        level1.innerHTML = "Ballet & Pointe- Level D*<br>Ballet & Pointe- Level F&G";
        teacher1.innerHTML = "Miss Yanina<br>Miss Yanina";
        time2.innerHTML = "12:00-1:00<br>1:00-2:00";
        level2.innerHTML = "Ballet- Level A*<br>Ballet- Level B";
        teacher2.innerHTML = "Miss Andrea<br>Miss Andrea";
    }
    if (chosen == "Friday") {
        time1.innerHTML = "3:30-5:30<br>5:30-7:00<br>7:00-9:00";
        level1.innerHTML = "Ballet & Pointe- Level E<br>Ballet- Level C*<br>Ballet & Pointe- Level F&G";
        teacher1.innerHTML = "Miss Yanina<br>Miss Yanina<br>Miss Yanina";
        time2.innerHTML = "";
        level2.innerHTML = "RESERVED";
        teacher2.innerHTML = "";
    }
    if (chosen == "Saturday") {
        time1.innerHTML = "9:00-10:30<br>10:30-12:30<br>12:30-2:30<br>2:30-4:30";
        level1.innerHTML = "Ballet- Level C<br>Ballet- Level D<br>Ballet & Pointe- Level E<br>Ballet & Pointe- Level F&G";
        teacher1.innerHTML = "Miss Polina<br>Miss Polina<br>Miss Yanina<br>Miss Yanina";
        time2.innerHTML = "9:00-10:00<br>10:00-11:00<br>11:00-12:00<br>12:30-1:30<br>1:30-2:30<br>2:30-3:30";
        level2.innerHTML = "Ballet- Level B<br>Ballet- Level A*<br>Ballet- Level A<br>Contemporary- Level D&D*<br>Contemporary- Level F&G<br>Contemporary- Level E";
        teacher2.innerHTML = "Miss Andrea<br>Miss Andrea<br>Miss Andrea<br>Miss Megan<br>Miss Megan<br>Miss Megan";
    }
}

function getDress() {
    let myList = document.getElementById("levels");
    let chosen = myList.value;
    let dresscode = document.getElementById("dressCode");
    if (chosen == "A" || chosen == "A*") {
        dresscode.innerHTML = "Ballet dress (pink color) or leotard and skirt (pink color); convertible ballet tights by «Capezio» (ballet pink color); and canvas ballet slippers (ballet pink color)<br>*Only Levels A and B are allowed ballet dresses, all other levels must have a separate leotard and a separate skirt.";
    }
    if (chosen == "B") {
        dresscode.innerHTML = "Ballet dress (light blue color) or leotard and skirt (light blue color); convertible ballet tights by «Capezio» (ballet pink color); canvas ballet slippers (ballet pink color) and academy character shoes (black color)<br>*Only Levels A and B are allowed ballet dresses, all other levels must have a separate leotard and a separate skirt.";
    }
    if (chosen == "C" || chosen == "C*") {
        dresscode.innerHTML = "Tank leotard (lavender color); skirt (lavender color); convertible ballet tights by «Capezio» (ballet pink color); canvas ballet slippers (ballet pink color); and academy character shoes (black color)";
    }
    if (chosen == "D") {
        dresscode.innerHTML = "Tank leotard (mulberry color); skirt (mulberry color); convertible ballet tights by «Capezio» (ballet pink color); canvas ballet slippers (ballet pink color, with ribbons attached and elastic removed); and academy character shoes (black color)";
    }
    if (chosen == "D*") {
        dresscode.innerHTML = "Tank leotard (mulberry color); skirt (mulberry color); convertible ballet tights by «Capezio» (ballet pink color); canvas ballet slippers (ballet pink color, with ribbons attached and elastic removed); and pointe shoes by “Russian Pointe” or “Grishko”";
    }
    if (chosen == "E") {
        dresscode.innerHTML = "Tank leotard (hunter green color); skirt (hunter green color by «M.Stevens» Style 246); convertible ballet tights by «Capezio» (ballet pink color); canvas ballet slippers (ballet pink color, with ribbons attached and elastic removed); and pointe shoes by “Russian Pointe” or “Grishko”";
    }
    if (chosen == "F") {
        dresscode.innerHTML = "Tank leotard (burgundy color); skirt (burgundy color by «M.Stevens» Style 246); convertible ballet tights by «Capezio» (ballet pink color); canvas ballet slippers (ballet pink color, with ribbons attached and elastic removed); and pointe shoes by “Russian Pointe” or “Grishko”";
    }
    if (chosen == "G") {
        dresscode.innerHTML = "Tank leotard (royal blue color); skirt (royal blue color by «M.Stevens» Style 246); convertible ballet tights by «Capezio» (ballet pink color); canvas ballet slippers (ballet pink color, with ribbons attached and elastic removed); and pointe shoes by “Russian Pointe” or “Grishko”";
    }
}