"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 12
   Case Problem 4

   Author: Jeremy Howard
   Date:   2018-03-01
   
   Filename: gi_sort.js
   
   Global Variables:
   tableData
      An 2-dimensional array of the data found in the body of the web table
      
   dataCategories
      An array of the column titles found the head of the web table
      
   sortIndex
      The index number of the column by which the web table should be
      sorted where 0 = 1st column, 1 = 2nd column, etc.
      
   sortDirection
      A value indicating direction of the sorting where a value of 1 sorts 
      the data in ascending order and a value of -1 sorts the data in descending order
	
   
   
   Functions List:   
   defineDataArray()
      Extracts values from the body of the web table and stores them in the
      tableData array
      
   writeTableData()
      Writes the sorted data into the table rows and cells       
      
   defineColumns()
      Extracts values form the column heads of the web table and stores 
      them in the dataCategories array; also sets up the onclick event
      handlers for the column heads so that the table can be sorted by
      clicking a table heading cell.
           
   columnSort(e)
      Event handler function that sorts the table data when a column
      heading is clicked  
   
   dataSort2D(a, b)
      Compare function used to sort numeric and alphabetical data from
      a 2-dimensional array 
    

*/

var tableData = [];
var dataCategories = [];
var sortIndex = 0;
var sortDirection = 1;


window.addEventListener("load", function() {
   defineDataArray();
   writeTableData();
   defineColumns();
});



function defineDataArray() {
   var tableRows = document.querySelectorAll("table.sortable tbody tr");
   
   for (var i = 0; i < tableRows.length; i++) {
      var rowCells = tableRows[i].children;
      var rowValues = new Array(rowCells.length);
      for (var j = 0; j < rowCells.length; j++) {
         rowValues[j] = rowCells[j].textContent;
      }  
      tableData[i] = rowValues;
   }   
   
   tableData.sort(dataSort2D);
}

function writeTableData() {
   var newTableBody = document.createElement("tbody");
   for (var i = 0; i < tableData.length; i++) {
      var tableRow = document.createElement("tr");
      for (var j = 0; j < tableData[i].length; j++) {
         var tableCell = document.createElement("td");
         tableCell.textContent = tableData[i][j];
         tableRow.appendChild(tableCell);
      }
      newTableBody.appendChild(tableRow);
   }
   var sortTable = document.querySelector("table.sortable");
   var oldTableBody = sortTable.lastElementChild;
   sortTable.replaceChild(newTableBody, oldTableBody);
}


function defineColumns() {
   var newSheet = document.createElement("style");
   document.head.appendChild(newSheet);
   var columnStyles = document.styleSheets[document.styleSheets.length - 1];
   columnStyles.insertRule(
      "table.sortable thead tr th {\
         cursor: pointer;\
      }", 0);   
   columnStyles.insertRule(
      "table.sortable thead tr th::after { \
         content: '\\00a0'; \
         font-family: monospace; \
         margin-left: 5px; \
      }", 1);  
   columnStyles.insertRule(
      "table.sortable thead tr th:nth-of-type(1)::after { \
         content: '\\25b2'; \
      }", 2); 
   
   var columnHeaders = document.querySelectorAll("table.sortable thead tr th");
   for (var i = 0; i < columnHeaders.length; i++) {
      dataCategories[i] = columnHeaders[i].textContent;
      columnHeaders[i].onclick = columnSort;
   }   
}


function columnSort(e) {
   var columnText = e.target.textContent;
   var columnIndex = dataCategories.indexOf(columnText);

   if (columnIndex === sortIndex) {
       sortDirection = -sortDirection;
   } else {
      sortIndex = columnIndex;
   }
  
   var columnNumber = columnIndex + 1; 
   
   var columnStyles = document.styleSheets[document.styleSheets.length - 1];         
   columnStyles.deleteRule(2);
   
   if (sortDirection === 1) {
      columnStyles.insertRule(
      "table.sortable thead tr th:nth-of-type(" + columnNumber + ")::after { \
         content: '\\25b2'; \
      }", 2);
   } else {
      columnStyles.insertRule(
      "table.sortable thead tr th:nth-of-type(" + columnNumber +")::after { \
         content: '\\25bc'; \
      }", 2);
   }
   
   tableData.sort(dataSort2D);    
   writeTableData();   
}








function dataSort2D(a, b) {
   if (isNaN(parseFloat(a[sortIndex])) === false) {
      return (a[sortIndex] - b[sortIndex])*sortDirection;
   } else {
      var astring = a[sortIndex].toLowerCase();
      var bstring = b[sortIndex].toLowerCase();
           
      if (bstring > astring) return -sortDirection;
      if (bstring < astring) return sortDirection;
      return 0;
   }
}