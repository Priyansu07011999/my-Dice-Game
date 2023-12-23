let randomNumber1 = Math.floor(Math.random()*6)+1;
// console.log(randomNumber1);
let randomDiceImage = "dice" + randomNumber1 + ".png";
let randomDiceImageSource = "images/" + randomDiceImage;
let image1 = document.querySelectorAll('img')[0];
image1.setAttribute('src', randomDiceImageSource);


// for image2 
let randomNumber2 = Math.floor(Math.random()*6)+1;
let randomDiceImage2 = "dice" + randomNumber2 + '.png';
let randomDiceImageSource2 = 'images/' + randomDiceImage2;

let image2 = document.querySelectorAll('img')[1];
image2.setAttribute('src', randomDiceImageSource2);

// check for who is winner
if(randomNumber1 > randomNumber2){
    document.querySelector('h1').innerHTML = 'Player 1 is winner.';
}
else if(randomNumber1 < randomNumber2){
    document.querySelector('h1').innerHTML = 'Player 2 is winner.';
}
else{
    document.querySelector('h1').innerHTML = 'Draw!';
}