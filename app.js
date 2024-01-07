
// +++++++++++++++++++++++++++++++ASSIGNMENT # 1 JAVASCRIPT++++++++++++++++++++++++++++

// *************************************ALERTS*****************************************

// 1. Write a script to greet your website visitor using JS alert
// box.

// ANSWER
// alert("Hello World")

// 2. Write a script to display following message on your web
// page:

// ANSWER
// alert("Error! Please enter a valid password.")

// 3. Write a script to display following message on your web
// page: (Hint : Use line break)

// ANSWER
// alert("Welcome to JS Land...\nHappy Coding!" )

// 4. Write a script to display following messages in sequence:

// ANSWER
// alert("Welcome to JS Land..." )
// alert("Happy Coding!" )

// 5. Generate the following message through browser’s
// developer console:

// ANSWER
// console.log("Hello... I can run JS through my web browser's console.");

// 6. Make use of alerts in your new/existing HTML & CSS
// project.

// ANSWER
// OK 

// 7. Practice placement of <script></script> element in
// following sections of your project in exercise 6:
// a. Head
// b. Body (before your page’s HTML)
// c. Body (inside your page’s HTML)
// d. Body (after your page’s HTML)

// ANSWER
// DONE 

// *************************************END*****************************************

// +++++++++++++++++++++++++++++++ASSIGNMENT # 2 JAVASCRIPT++++++++++++++++++++++++++++

// *************************************VARIABLES FOR STRINGS*****************************************

// 1. Declare a variable called username.

// ANSWER
// var username;

// 2. Declare a variable called myName & assign to it a string
// that represents your Full Name.

// ANSWER
// var myName = "Muhammad Meshar Sultan";

// 3. Write script to
// a) Declare a JS variable, titled message.
// b) Assign “Hello World” to variable message
// c) Display the message in alert box.

// ANSWER
// var message = "Hello World";
// alert(message);

// 4. Write a script to save student’s bio data in JS variables and
// show the data in alert boxes.

// ANSWER
// var stName = "John Doe";
// var age = 15;
// var course = "Certified Mobile Application Development";
// alert(stName);
// alert(age + " years old");
// alert(course);

// 5. Write a script to display the following alert using one JS
// variable:

// ANSWER
// var message = "PIZZA\nPIZZ\nPIZ\nPI\nP";
// alert(message);

// 6. Declare a variable called email and assign to it a string that
// represents your Email Address(e.g. example@example.com).
// Show the blow mentioned message in an alert box.(Hint: use
// string concatenation)

// ANSWER
// var email = "muhammadmeshar@gmail.com";
// alert("My email address is " + email);

// 7. Declare a variable called book & give it the value “A
// smarter way to learn JavaScript”. Display the following
// message in an alert box:

// ANSWER
// var book = "“A smarter\nway to learn JavaScript”.";
// alert("I am trying to learn from the Book " + book);

// 8. Write a script to display this in browser through JS

// ANSWER
// var text = "Yah! I can write HTML content through JavaScript";
// document.write(text);

// 9. Store following string in a variable and show in alert and
// browser through JS

// ANSWER
// var logo = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(logo);

// *************************************END*****************************************

// +++++++++++++++++++++++++++++++ASSIGNMENT # 3 JAVASCRIPT++++++++++++++++++++++++++++

// *************************************VARIABLES FOR NUMBERS*****************************************

// 1. Declare a variable called age & assign to it your age. Show
// your age in an alert box.

// ANSWER
// var age = 22;
// alert("i am " + age + " years old");


// 2. Declare & initialize a variable to keep track of how many
// times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You
// have visited this site N times”.

// ANSWER
// THIS ANSWER COPY FROM CHATGPT 

// // Check if the visitor count is stored in local storage
// if (localStorage.getItem('visitorCount') === null) {
//     // If it's not stored, initialize it to 1
//     localStorage.setItem('visitorCount', 1);
// } else {
//     // If it's stored, increment the count
//     let count = parseInt(localStorage.getItem('visitorCount'));
//     count++;
//     localStorage.setItem('visitorCount', count);
// }

// // Display the visitor count on the web page
// const visitCount = document.getElementById('visitCount');
// visitCount.textContent = `You have visited this site ${localStorage.getItem('visitorCount')} times.`;

// ANSWER
// THIS IS MY ANSWER 
// var count = "You have visited this site 14 times";
// alert(count);

// 3. Declare a variable called birthYear & assign to it your
// birth year. Show the following message in your browser:

// ANSWER
// var birthYear = "2001";
// document.write("My birth year is " + birthYear  + "</br>" + "Data type of my ddeclared variable is number");


// 4. A visitor visits an online clothing store
// www.xyzClothing.com . Write a script to store in variables
// the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to
// order
// Show the following message in your browser: “John
// Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

// ANSWER
// var visitorName = "John Doe";
// var products = "T-shirt"
// var quantity = 5;
//  document.write("<b>" + visitorName + "</b>" + " ordered " + "<b>" + quantity + "&nbsp" + products + "</b>" + "(s)" 
//  + " on XYZ Clothing store")

// *************************************END*****************************************

// +++++++++++++++++++++++++++++++ASSIGNMENT # 4 JAVASCRIPT++++++++++++++++++++++++++++

// *************************************VARIABLE NAMES: LEGAL & ILLEGAL*****************************************

// 1. Declare 3 variables in one statement.

// ANSWER
// var variable1 , variable2 , variable3;

// 2. Declare 5 legal & 5 illegal variable names.

// ANSWER
// var $name ; legal
// var name12 ; legal
// var my_Name ; legal
// var myName ; legal
// var _name ; legal

// var 12name ; illegal
// var name@$ ; illegal
// var my-name ; illegal
// var 12333 ; illegal
// var @name ; illegal

// 3. Display this in your browser
// a) A heading stating “Rules for naming JS variables”
// b) Variable names can only contain ______, ______,
// ______ and ______.
// For example $my_1stVariable
// c) Variables must begin with a ______, ______ or
// _____. For example $name, _name or name
// d) Variable names are case _________
// e) Variable names should not be JS _________

// ANSWER
// var heading = "Rules for naming JS variables";

// document.write("<h2>" + heading +"</h2>"+"</br>");
// document.write("Variable names can only contain numbers, $ and _ . For example : $my_1stVariable</br>");
// document.write("Variables must begin with a letter, $ or _. For example : $name, _name or name </br>");
// document.write("Variable names are case sensitive </br>");
// document.write("Variable names should not be JS keywords");

// *************************************END*****************************************





