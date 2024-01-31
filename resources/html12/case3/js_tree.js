"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 12
   Case Problem 3

   Author: Jorges Soto
   Date:   2018-03-01

   Filename: js_tree.js

   Global Variables:
   nodeCount
      Running count of all nodes in the source document
   elementCount
      Running count of all element nodes in the source document
   textCount
      Running count of all text nodes in the source document
   wsCount
      Running count of all white space text nodes in the source document


   Functions List:
   makeTree() 
      Sets up and places the node tree within the HTML document and
      displays the node counts from the document

   makeBranches(treeNode, nestedList)
      Makes a list item or an ordered list based on the contents and type
      of node from the sourceNode parameter and then appends that list
      item or ordered list to nestedList. The function recursively calls 
      itself to navigate throught the node tree of the source document.

   isWhiteSpaceNode(tString)
      Returns true if tString represents the text of a white space text
      node and false if it doesn't

*/

/* Set the initial node counts to zero */


var nodeCount = 0;
var elemCount = 0;
var textCount = 0;
var wsCount = 0;   
window.onload = makeTree;

function makeTree() {

   /* Element containing the node tree */
   var treeBox = document.createElement("aside");
   treeBox.id = "treeBox";
   treeBox.innerHTML = "<h1>Node Tree</h1>";
   /* Append the tree box to the main section of the page */
   var mainSection = document.getElementById("main");
   mainSection.appendChild(treeBox);   

   /* Ordered list containing the node tree */
   var nodeList = document.createElement("ol");
   /* Append the node tree to the tree box */
   treeBox.appendChild(nodeList); 
   
   /* Source document on which the node tree will be based */
   var sourceArticle = document.querySelector("#main article");
   
   makeBranches(sourceArticle, nodeList);


   /* Display the total counts of all types of nodes in the source document */
   document.getElementById("totalNodes").textContent = nodeCount;
   document.getElementById("elemNodes").textContent = elemCount;
   document.getElementById("textNodes").textContent = textCount;
   document.getElementById("wsNodes").textContent = wsCount;

}

function makeBranches(treeNode, nestedList) {
   nodeCount++;

   /* Create a list item element for the output tree */
   var liElem = document.createElement("li");
   liElem.innerHTML = "+--";  
   var spanElem = document.createElement("span"); 
   liElem.appendChild(spanElem);
   nestedList.appendChild(liElem);   
   
   if (treeNode.nodeType === 1) {
      elemCount++;      
      spanElem.setAttribute("class", "elementNode");
      spanElem.textContent = "<" + treeNode.nodeName + ">";
   } else if (treeNode.nodeType === 3) {
      textCount++;      
      var textString = treeNode.nodeValue;
   
      /* If the text is empty (a white space node) display the text
         string "#text"; otherwise display the text of treeNode */
      if (isWhiteSpaceNode(textString)) {
         wsCount++;
         spanElem.setAttribute("class", "whiteSpaceNode");
         spanElem.textContent = "#text";
      } else {
         spanElem.setAttribute("class", "textNode");
         spanElem.textContent = textString;
      }         
   }
   
   
   if (treeNode.childNodes.length > 0) {
      var newList = document.createElement("ol");
      newList.innerHTML = "|";      
      nestedList.appendChild(newList);      
      for (var n = treeNode.firstChild; n !== null; n = n.nextSibling) {
         makeBranches(n, newList);
      }
   }
}
   


function isWhiteSpaceNode(tString) {
   return !(/[^\t\n\r ]/.test(tString));
}
