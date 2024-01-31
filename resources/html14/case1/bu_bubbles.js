"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 14
   Case Problem 1

   Author: Drew Evans
   Date:   2018-03-01
   
   Filename: bu_bubbles.js

*/


/* Object for the bubble box */
var box = {
   width:  1024,
   height: 500,
};

/* Constructor function for the class of bubble */
function bubble(size, img) {
   this.radius = size;
   this.imageURL = img;
   this.xVelocity = null;
   this.yVelocity = null;
   this.xPos = null;
   this.yPos = null;
   this.opacity = 1;
   this.hue = 0;
   this.rotate = 0;
   this.rotateDirection = 1;
}

/* Fade out the bubble by reducing its opacity */
bubble.prototype.fadeBubble = function() {
   this.opacity -= 0.0005;
};

/* Change the hue of the bubble on the color wheel */
bubble.prototype.changeColor = function() {
   this.hue = (this.hue + 3) % 360;
};

/* Spin the bubble */
bubble.prototype.rotateBubble = function() {
   this.rotate = (this.rotate + this.rotateDirection) % 360;
};

/* Move the bubble, bouncing it off the wall if necessary */
bubble.prototype.moveBubble = function(height, width) {
   var bubbleTop = this.yPos;
   var bubbleBottom = this.yPos + this.radius;
   var bubbleLeft = this.xPos;
   var bubbleRight = this.xPos + this.radius;
   if (bubbleTop < 0 || bubbleBottom > height) {this.yVelocity = -this.yVelocity;}
   if (bubbleLeft < 0 || bubbleRight > width) {this.xVelocity = -this.xVelocity;} 
   this.yPos += this.yVelocity;   
   this.xPos += this.xVelocity;
};

window.addEventListener("load", function() {
   // Reference to the bubble box
   var bubbleBox = document.getElementById("bubbleBox");
   
   // Create a new bubble every half-second
   setInterval(function() {
      
      // Do not create more than 20 bubbles at any one time
      if (bubbleBox.childElementCount <= 20) {
         
         // Create a new bubble object
         var newBubble = new bubble(randInt(50, 120), "bu_bubble" + randInt(1, 10) + ".png");
         newBubble.xPos = box.width/2;
         newBubble.yPos = box.height/2;
         newBubble.xVelocity = randInt(-5, 5);
         newBubble.yVelocity = randInt(-5, 5);  
         newBubble.rotate = randInt(0, 360);
         newBubble.hue = randInt(0, 360);
         newBubble.rotateDirection = randInt(-2, 2);

         // Apply the bubble object to a new inline image
         var bubbleImg = document.createElement("img");
         bubbleImg.style.position = "absolute";         
         bubbleImg.src = newBubble.imageURL;         
         bubbleImg.style.width = newBubble.radius + "px";
         bubbleImg.style.left = newBubble.xPos + "px";
         bubbleImg.style.top = newBubble.yPos + "px";

         // Append the inline image to the bubble box
         bubbleBox.appendChild(bubbleImg);


         var bubbleInterval = setInterval(function() {
            newBubble.fadeBubble();
            if (newBubble.opacity < 0) {
               // It's time to remove the bubble
               clearInterval(bubbleInterval);
               bubbleBox.removeChild(bubbleImg);
            } else {
               // Fade out the bubble
               bubbleImg.style.opacity = newBubble.opacity;
               
               // Change the bubble's hue
               newBubble.changeColor();
               bubbleImg.style.filter = "hue-rotate(" + newBubble.hue + "deg)";               
               
               // Spin the bubble
               newBubble.rotateBubble();
               bubbleImg.style.transform = "rotate(" + newBubble.rotate + "deg)";

               // Move the bubble, bouncing if necessary
               newBubble.moveBubble(box.height, box.width);
               bubbleImg.style.top = newBubble.yPos + "px";
               bubbleImg.style.left = newBubble.xPos + "px";  
            }
         }, 25);
      }
   }, 500);

   /* Function to return a random integer between minVal and maxValue inclusive */
   function randInt(minVal, maxVal) {
      var size = maxVal - minVal + 1;
      return Math.floor(minVal + size*Math.random());
   }  

});