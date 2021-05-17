function RandomCall(){

    // Enter Player1 Name
    var player1 = window.prompt("Player one, please enter your name!");

    if (player1 == null || player1 == "")
        player1 = "ram";
    
    document.querySelector(".name1").innerHTML = player1;
    
    //Enter player2 Name
    var player2 = window.prompt("Player two, please enter your name!");
    
    if (player2 == null || player2 == "")
        player2 = "shyam";

    document.querySelector(".name2").innerHTML = player2;

    if (player1 === player2)
    {
        document.querySelector("h1").innerHTML = ("Duplicate Players");
        return;
    }


    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    document.querySelector(".img1").setAttribute("src", "./images/dice" + randomNumber1 + ".png");
    document.querySelector(".img2").setAttribute("src", "./images/dice" + randomNumber2 + ".png");

    if (randomNumber1 > randomNumber2)
        document.querySelector("h1").innerHTML = ("🚩"+player1 + " Wins");
    else if (randomNumber1 < randomNumber2)
        document.querySelector("h1").innerHTML = (player2 + " Wins🚩");
    else
        document.querySelector("h1").innerHTML = ("Uh Oh! Draw😌");
}