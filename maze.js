//Author: Rahmeesh Bowla
//Used reference from codes found online. 
"use strict"
var loser = false;
var sessionStart = false;
window.onload = function(){
    var boundary = document.querySelectorAll(".boundary");
    for (var i = 0; i < boundary.length-1; i++) {
        boundary[i].addEventListener("mouseover", gameEnd);
		
    }
	
	
	document.getElementById("maze").addEventListener("mouseleave",gameEnd); //If mouse leaves maze area it triggers the gameOver function
    document.getElementById("end").addEventListener("mouseover",Goal); //If mouse goes over goal triggers goal Function
    document.getElementById("start").addEventListener("click",StartGame); // If start button is click beginGame function is triggered

	
}

function Goal(){
    if(sessionStart){
        if(!loser){
            setStat("You Win!");
        }
        else{
            setStat("You Lose!");
        }
    }
	sessionStart = false;
}

function StartGame(){
    setBoundaryCSS("boundary");
    sessionStart = true;
    loser = false;
    setStat("Game In Session");
}

function gameEnd(){
    if(sessionStart){
        setBoundaryCSS("boundary youlose");
		setStat("You Lose!");
        loser = true;
    }
}

function setStat(stat){	
    document.getElementById("status").innerHTML = stat; //Changes the wording tagged with the status id
}

function setBoundaryCSS(cssName){
    var boundary = document.querySelectorAll(".boundary");
    for (var i = 0; i < boundary.length-1; i++) {
        boundary[i].className = cssName;
    }
}

