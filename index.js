function btnClicked(){

    var img1 = document.getElementsByClassName("img1")[0];
    var img2 = document.getElementsByClassName("img2")[0];
    var h1 = document.querySelector("h1");

    var randomNumber1 = Math.floor(Math.random()*3+1);
    var randomNumber2 = Math.floor(Math.random()*3+1);
    console.log(randomNumber1);
    console.log(randomNumber2);

    img1.src = "img" + randomNumber1 + ".png";
    img2.src = "img" + randomNumber2 + ".png";

    if(randomNumber1 === 1 && randomNumber2 === 2){
        h1.innerHTML = "Player 2 Wins ✨";
    }
    if(randomNumber1 === 1 && randomNumber2 === 3){
        h1.innerHTML = "Player 1 Wins ✨";
    }
    if(randomNumber1 === 1 && randomNumber2 === 1){
        h1.innerHTML = "It is a DRAW 🔄️";
    }
    if(randomNumber1 === 2 && randomNumber2 === 1){
        h1.innerHTML = "Player 1 Wins ✨";
    }
    if(randomNumber1 === 2 && randomNumber2 === 3){
        h1.innerHTML = "Player 2 Wins ✨";
    }
    if(randomNumber1 === 2 && randomNumber2 === 2){
        h1.innerHTML = "It is a DRAW 🔄️";
    }
    if(randomNumber1 === 3 && randomNumber2 === 1){
        h1.innerHTML = "Player 2 Wins ✨";
    }
    if(randomNumber1 === 3 && randomNumber2 === 2){
        h1.innerHTML = "Player 1 Wins ✨";
    }
    if(randomNumber1 === 3 && randomNumber2 === 3){
        h1.innerHTML = "It is a DRAW 🔄️";
    }

}