"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 14
   Case Problem 2

   Author: Richard Coates
   Date:   2018-03-01
   
   Filename: cc_staff.js
   
      
*/


/* Constructor function for the employee class */
function employee(id, firstName, lastName, dept, position, email, phone, photo) {
   this.id = id;
   this.firstName = firstName;
   this.lastName = lastName;
   this.dept = dept;
   this.position = position;
   this.email = email;
   this.phone = phone;
   this.photo = photo;
}

/* Object literal for search results */
var searchResult = {
   employees : [],
   sortById : function() {
      this.employees.sort(function(a,b) {
         if (a.id < b.id) {return -1;}
         else {return 1;}
      });
   }
};


/* Event listener to retrieve and display employee records matching the search condition */
document.getElementById("searchButton").addEventListener("click", function() {
   var tableBody = document.querySelector("table#staffTable tbody");
   var tableCaption = document.querySelector("table#staffTable caption");
   tableBody.removeChildren();
   searchResult.employees = [];
   
   // Retrieve the records that match the search condition 
   staff.directory.forEach(function(record) {
      var nameSearch = document.getElementById("nameSearch").value;      
      var nameSearchType = document.getElementById("nameSearchType").selectedValue();
      switch (nameSearchType) {
         case "contains" :
            var nameRegExp = new RegExp(nameSearch, "i");
            break;
         case "beginsWith" :
            nameRegExp = new RegExp("^" + nameSearch, "i");
            break;
         case "exact" :
           nameRegExp = new RegExp("^" + nameSearch + "$", "i");
            break;
      }
      var foundName = nameRegExp.test(record.lastName);
 
      var positionSearch = document.getElementById("positionSearch").value;      
      var positionSearchType = document.getElementById("positionSearchType").selectedValue();      
      switch (positionSearchType) {
         case "contains" :
            var positionRegExp = new RegExp(positionSearch, "i");
            break;
         case "beginsWith" :
            positionRegExp = new RegExp("^" + positionSearch, "i");
            break;
         case "exact" :
            positionRegExp = new RegExp("^" + positionSearch + "$", "i");
            break;
      }
      var foundPosition = positionRegExp.test(record.position);
      
      var deptSearch = document.getElementById("deptSearch").selectedValue();
      var foundDept = (record.dept === deptSearch || deptSearch === "");

      // If a match occurs, write the employee record into the searchResult object
      if (foundName && foundPosition && foundDept) {
         searchResult.employees.push(new employee(record.id, record.firstName, record.lastName,
                                                   record.dept, record.position, 
                                                   record.email, record.phone, record.photo));
      }
   });
   
   tableCaption.textContent = searchResult.employees.length + " records found";
   searchResult.sortById();

   
   // For each found record write a new table row
   searchResult.employees.forEach(function(record) {
      var newRow = document.createElement("tr");
      var photoCell = document.createElement("td");
      var photoImg = document.createElement("img");
      photoImg.src = record.photo;
      photoCell.appendChild(photoImg);
      newRow.appendChild(photoCell);
      
      var nameCell = document.createElement("td");
      nameCell.textContent = record.firstName + " " + record.lastName;
      newRow.appendChild(nameCell);
      
      var deptCell = document.createElement("td");
      deptCell.textContent = record.dept;
      newRow.appendChild(deptCell);        
      
      var positionCell = document.createElement("td");
      positionCell.textContent = record.position;
      newRow.appendChild(positionCell);
      
      
      var mailCell = document.createElement("td");
      var mailLink = document.createElement("a");
      mailLink.setAttribute("href", "mailto:" + record.email);
      mailLink.textContent = record.email;
      mailCell.appendChild(mailLink);
      newRow.appendChild(mailCell);  
      
      var phoneCell = document.createElement("td");
      var phoneLink = document.createElement("a");
      phoneLink.setAttribute("href", "tel:" + record.phone);
      phoneLink.textContent = record.phone;
      phoneCell.appendChild(phoneLink);
      newRow.appendChild(phoneCell);   
      
      tableBody.appendChild(newRow);         
   });

});





/* --- Methods added to native objects ---*/

/* Method added to any DOM element that removes all child nodes of element */
HTMLElement.prototype.removeChildren = function() {
   while (this.firstChild) {
      this.removeChild(this.firstChild);
   }   
};

/* Method added to the select element to return the value of the selected option */
HTMLSelectElement.prototype.selectedValue = function() {
   var sIndex = this.selectedIndex;
   return this.options[sIndex].value;
};


