"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 14
   Review Assignment

   Author: Bob Voiklund
   Date:   2018-03-01
   
   Filename: ag_squares.js

*/

window.addEventListener("load", playPokerSquares);

function playPokerSquares() {
   var newCard = document.getElementById("newCard");
   var startButton = document.getElementById("startButton");
   var rowSumCells = document.querySelectorAll("table#grid th.rowsum");   
   var colSumCells = document.querySelectorAll("table#grid th.colsum"); 
   var cardImages = document.querySelectorAll("table#grid tr td img");
   var gameScore = document.getElementById("gameScore");
   var gameResult = document.getElementById("gameResult");
   
   startButton.onclick = function() {

      // Set up the game board
      squareGame.gameTotal = 0;
      gameScore.value = "";
      gameResult.textContent = "";
      for (var i = 0; i < rowSumCells.length; i++) {
         rowSumCells[i].textContent = "";
      }
      for (var i = 0; i < colSumCells.length; i++) {
         colSumCells[i].textContent = "";
      } 
      
      for (var i = 0; i < cardImages.length; i++) {
         cardImages[i].src = "ag_trans.gif";
      }

      // Set up the game deck
      var myDeck = new pokerDeck();
      myDeck.shuffle();

      // Set up the starter card
      var myStarterCard = new pokerCard();
      myStarterCard = myDeck.cards.shift();
      newCard.src = myStarterCard.cardImage();
                

      for (var i = 0; i < cardImages.length; i++) {
         
         cardImages[i].onclick = function(e) {
            e.target.src = myStarterCard.cardImage();
            
            // Retrieve the row and column index for the selected cell
            var rowNum = e.target.getAttribute("id").charAt(1);
            var colNum = e.target.getAttribute("id").charAt(2);
            // Transfer the starter card into the cardGrid object
            squareGame.cardGrid[rowNum].insertCard(myStarterCard, colNum);
            // Remove the onclick event handler
            e.target.onclick = null;


            // Test for game end
            if (myDeck.cards.length > 27) {
               // The game isn't over. Deal another starter card from the deck
               myStarterCard = myDeck.cards.shift();
               newCard.src = myStarterCard.cardImage();               
               
            } else {
               // The game is over. Add up the points and show the results

               for (var i = 0; i < 5; i++) {
                  var rowTotal = squareGame.calcRowPoints(i);
                  squareGame.gameTotal += rowTotal;
                  document.getElementById("row" + i + "sum").textContent = rowTotal;
               }
               for (var j = 0; j < 5; j++) {
                  var colTotal = squareGame.calcColumnPoints(j);
                  squareGame.gameTotal += colTotal;
                  document.getElementById("col" + j + "sum").textContent = colTotal;
               }

               gameScore.value = squareGame.gameTotal;
               gameResult.textContent = squareGame.gameResult();
               newCard.src = "ag_cardback3.png";
            }            
         };          
      }

   };
}
                               

