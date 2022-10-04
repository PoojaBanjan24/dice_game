// document.getElementsByTagName("h1")[0].style.color = "blue";

// For changing the first image

// var randomNumber1 = Math.random();
// randomNumber1 = Math.floor(randomNumber1*6)+1;
// if(randomNumber1===1)
// {
//   document.getElementsByClassName("img1")[0].setAttribute("src","images/dice1.png");
// }
// else if(randomNumber1===2)
// {
//   document.getElementsByClassName("img1")[0].setAttribute("src","images/dice2.png");
// }
// else if(randomNumber1===3)
// {
//   document.getElementsByClassName("img1")[0].setAttribute("src","images/dice3.png");
// }
// else if(randomNumber1===4)
// {
//   document.getElementsByClassName("img1")[0].setAttribute("src","images/dice4.png");
// }
// else if(randomNumber1===5)
// {
//   document.getElementsByClassName("img1")[0].setAttribute("src","images/dice5.png");
// }
// else if(randomNumber1===6)
// {
//   document.getElementsByClassName("img1")[0].setAttribute("src","images/dice6.png");
// }
//
// //For changing the second image
//
// var randomNumber2 = Math.random();
// randomNumber2 = Math.floor(randomNumber2*6)+1;
// if(randomNumber2===1)
// {
//   document.getElementsByClassName("img2")[0].setAttribute("src","images/dice1.png");
// }
// else if(randomNumber2===2)
// {
//   document.getElementsByClassName("img2")[0].setAttribute("src","images/dice2.png");
// }
// else if(randomNumber2===3)
// {
//   document.getElementsByClassName("img2")[0].setAttribute("src","images/dice3.png");
// }
// else if(randomNumber2===4)
// {
//   document.getElementsByClassName("img2")[0].setAttribute("src","images/dice4.png");
// }
// else if(randomNumber2===5)
// {
//   document.getElementsByClassName("img2")[0].setAttribute("src","images/dice5.png");
// }
// else if(randomNumber2===6)
// {
//   document.getElementsByClassName("img2")[0].setAttribute("src","images/dice6.png");
// }
//
// //For changing the h1 text
//
// if(randomNumber1>randomNumber2)
// {
//   document.querySelector("h1").innerHTML="🚩Play 1 wins!";
// }
// else if(randomNumber1<randomNumber2)
// {
//   document.querySelector("h1").innerHTML="Player 2 wins!🚩";
// }
// else if(randomNumber1===randomNumber2)
// {
//   document.querySelector("h1").innerHTML="Draw!";
// }




var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1*6)+1;

var randomImageSource = "images/dice"+randomNumber1+".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource);


var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2*6)+1;

var randomImageSource = "images/dice"+randomNumber2+".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImageSource);

if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML="🚩Play 1 wins!";
}
else if(randomNumber1<randomNumber2)
{
  document.querySelector("h1").innerHTML="Player 2 wins!🚩";
}
else if(randomNumber1===randomNumber2)
{
  document.querySelector("h1").innerHTML="Draw!";
}
