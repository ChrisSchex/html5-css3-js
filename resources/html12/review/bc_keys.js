"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 12
   Review Assignment

   Author: Norene Somerville
   Date:   2018-03-01

   Filename: bc_keys.js

   Functions
   =========
   
   findKeyWords()
      Locate the keywords in the article indicated by the <dfn> tag
      and add those keywords in alphabetical order to a keyword box.
      
   makeKeyStyles()
      Create an embedded style sheet for the keyword box.
      
   replaceWS(textStr)
      Replaces occurences of one or more consecutive white space
      characters with the _ character.

*/


window.addEventListener("load", findKeyWords);
window.addEventListener("load", makeKeyStyles);

function findKeyWords() {
   // Create Aside Element for the Keyword List
   var keyWordBox = document.createElement("aside");
   keyWordBox.setAttribute("id", "keywords");
   var keyWordTitle = document.createElement("h1");
   keyWordTitle.innerHTML = "Keyword List";
   keyWordBox.appendChild(keyWordTitle);
   
   // Place the keywords in an ordered list
   var keyWordList = document.createElement("ol");
   keyWordBox.appendChild(keyWordList);
   
   // Locate all of the keywords in the source document
   var keyWordElems = document.querySelectorAll("article#doc dfn");
   var keyWords = new Array(keyWordElems.length);
   for (var i = 0; i < keyWordElems.length; i++) {
      keyWords[i] = keyWordElems[i].textContent;
      var linkID = replaceWS(keyWords[i]);
      keyWordElems[i].setAttribute("id", "keyword_" + linkID);
   }
   
   // Sort the keywords in alphabetical order
   keyWords.sort();
   
   for (var i = 0; i < keyWords.length; i++) {
      var keyWordListItem = document.createElement("li");
      var keyWordLink = document.createElement("a");
      keyWordLink.innerHTML = keyWords[i];
      var linkID = replaceWS(keyWords[i]);
      keyWordLink.setAttribute("href", "#" + "keyword_" + linkID);
      keyWordListItem.appendChild(keyWordLink);
      keyWordList.appendChild(keyWordListItem);
   }
   
   // Append the keyword box to the document
   var historyDoc = document.getElementById("doc");
   historyDoc.insertBefore(keyWordBox, historyDoc.firstChild);    
}

function makeKeyStyles() {
   // Append an embedded style sheet to the document head
   var keyStyles  = document.createElement("style");
   document.head.appendChild(keyStyles);
          
   // Add style rules to the embedded style sheet

   document.styleSheets[document.styleSheets.length-1].insertRule(
      "aside#keywords { \
         border: 3px solid rgb(101, 101, 101); \
         float: right; \
         margin: 20px 0px 20px 20px; \
         padding: 10px; \
         width: 320px; \
      }",0);

   document.styleSheets[document.styleSheets.length-1].insertRule(
      "aside#keywords h1 { \
         font-size: 2em; \
         margin: 5px; \
         text-align: center; \
      }", 1);

   document.styleSheets[document.styleSheets.length-1].insertRule(
      "aside#keywords ol { \
         margin-left: 20px; \
         font-size: 1.2em; \
      }", 2);

   document.styleSheets[document.styleSheets.length-1].insertRule(
      "aside#keywords ol li { \
         line-height: 1.5em; \
      }", 3);

   document.styleSheets[document.styleSheets.length-1].insertRule(
      "aside#keywords ol li a { \
         color: rgb(101, 101, 101); \
         text-decoration: none; \
      }", 4);
}



/* Supplied Functions */

function replaceWS(textStr) {
   var revText = textStr.replace(/\s+/g,"_");
   return revText;
}