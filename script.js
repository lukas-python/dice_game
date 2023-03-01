let player1Result = Math.floor((Math.random() * 6) + 1);
let player2Result = Math.floor((Math.random() * 6) + 1);

let randomDiceImg1 = "images/dice" + player1Result + ".png";
let randomDiceImg2 = "images/dice" + player2Result + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomDiceImg1);
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImg2);

if (player1Result > player2Result) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else if (player1Result === player2Result) {
    document.querySelector("h1").innerHTML = "It's a Draw!";
}
else {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}