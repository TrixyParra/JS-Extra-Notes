// Example 
// alert('hello, world!');  // use semi-colons until you know language well 


// Console - logs from top to bottom 
console.log(1);  // 1 
console.log(2);  // 2 


// Variables
// let  
let age = 25; 
let year = 2022;

console.log(age, year);  // 25  - Variables do not need to be in quotations. Can be logged in same console.

// let can reassign variables  
age = 30; 
console.log(age); 

// const 
const points = 100; 
/* points = 50;  // const can't reassign variables  - will show error on console */
console.log(points);  // 100 

// var 
var score = 75;  // old way to assign variables. Not used much anymore. 
console.log(score);  // 75 

// variable constraints - Camel case is used to name variables. Reserved Words/Keywords can't be used. Variable can begin with letter, underscore, or dollar sign - no numbers. Make Variables meaningful. 


// Comments 
// single line comment 
/* multi-line
comment */ 


// Data Types 
// Number 
1, 2, 3, 100, 3.14 

// String - series of characters in quotes  ->  " " or '' or `` 
'hello, world' 

// Boolean - evaluates conditions 
true, false 

// Null - says a variable has no value  

// Undefined - automatically given to variables by browsers because not yet defined 

// Object - complex data structures -> Arrays, Dates, Literals, etc. 

// Symbol - used with objects 


// Strings - letters, numbers, and/or characters in quotes. It has properties or methods.
console.log('hello world');  // hello world  - string logs in black 

let email = 'name@email.com'; 
console.log(email);  // name@email.com 

// String Concatenation - two strings joined together (+) 
let firstName = 'Trixy'; 
let lastName = 'Parra'; 

let fullName = firstName + ' ' + lastName;  // '_' was added to add space between 
console.log(fullName);  // Trixy Parra 

// Getting Charactrs [0, 1, 2, 4, 5...] 
console.log(fullName[2]);  // i 

// String Length Property
console.log(fullName.length);  // 11 

// String Methods - different functions/methods, function/method of a particular object or data type 
console.log(fullName.toUpperCase());  // TRIXY PARRA  - .toUpperCase() is a method 
let result = fullName.toLowerCase(); 
console.log(result, fullName);  // trixy parra Trixy Parra 

let index = email.indexOf('@');  // .indexOf('') is a method. It finds the index/position of a character in a string. 
console.log(index);  // 4 


// Common String Methods 
let emailTwo = 'name@email.com'; 

// .lastIndexOf('') 
let resultTwo = emailTwo.lastIndexOf('a');  // .lastIndexOf('') is a method. Finds last character in string if repeated within string. 
console.log(resultTwo);  // 7 

// .slice(_, _) 
let resultSlice = emailTwo.slice(0, 10);  // second number indicated is not counted 
console.log(resultSlice);  // name@email  - 10 is not counted within slice so everything before 10  

// .subtring(_, _)  - substring - substr('') no longer used 
let resultSubstring = emailTwo.substring(2, 5); 
console.log(resultSubstring);  // me@ 

// .replace() - replaces a character/string with another 
let resultReplace = email.replace('a', 'w'); 
console.log(resultReplace);  // nwme@email.com  - only on first 'a' if multiple 'a' 


// Numbers 
let radius = 10; 
let pi = 3.14; 
console.log(radius, pi);  // 10 3.14 

// Math Operators +, -, *, /, ** -to the power of, % -remainder/modulus/modulo/module 
console.log(10 / 2);  // 5 

let resultModulo = radius % 3; 
console.log(resultModulo);  // 1  - divide all the way and the remainder if any is the answer, 0 if no remainder 

let resultPowerof = pi * radius**2;  // ** is power of _
console.log(resultPowerof);  // 314 

// Order of Operation  B I D M A S  - Brackets, Indices(**), Division, Multiply, Addition, Subtraction  
let resultOrder = 5 * (10-3)**2; 
console.log(resultOrder);  // 245 

// ++  - adds 1 
let likes = 10; 
likes++; 
console.log(likes);  // 11 

// --  - subtracts 1 
likes--; 
console.log(likes);  // 10 

// +=  -=  *=  /=   - changes to do the operation indicated with the number indicated to give new result when logged 
likes += 10; 
console.log(likes);  // 20 

likes -= 5; 
console.log(likes);  // 15   - continues from new value from last log so 20-5 

likes *= 2; 
console.log(likes);  // 30   - 15*2 

likes /= 2; 
console.log(likes);  // 15   - 30/2 


// NaN - not a number -> gives a value/result that doesn't make sense, error made along the way 
console.log(5 / 'hello');  // NaN  
console.log(5 * 'hello');  // NaN 


// Concate Numbers - numbers in strings with + sign 
let resultConcate = 'the blog has ' + likes + ' likes'; 
console.log(resultConcate);  // the blog has 15 likes  - 15 because of last 'likes' logged 


// Template Strings - variables in strings without + sign 
const title = 'Best Reads of 2022'; 
const author = 'Trixy'; 
const like = 30; 

// Concotenation Way -> messy and long 
let resultConcatenate = 'The blog called ' + title + ' by ' + author + ' has ' + like + ' likes'; 
console.log(resultConcatenate);  // The blog called Best Reads of 2022 by Trixy has 30 likes 

// Template String Way - Template Literal ${__} -> inject variables in string without + sign. Uses back tics `__`  
let resultTemplateString = `The blog called ${title} by ${author} has ${like} likes`; 
console.log(resultTemplateString);  // The blog called Best Reads of 2022 by Trixy has 30 likes 

// Creating HTML Templates -> HTML string on log  
let html = `
    <h2>${title}</h2>
    <p>By ${author}</p>
    <span>This blog has ${like} likes</span>
`; 
console.log(html);  // displays on console... 
/*
<h2>Best Reads of 2022</h2>
<p>By Trixy</p>
<span>This blog has 30 likes</span>
*/ 


// Array (object) - collection of strings, numbers; a list in [] 
// String Array 
let ninjas = ['shaun', 'ryu', 'chun-li']; 

console.log(ninjas);  // (3) ['shaun', 'ryu', 'chun-li']  - shows list of strings 

// Get Position of Specific String 
console.log(ninjas[1]);  // ryu 

// Override a Value 
ninjas[1] = 'ken'; 
console.log(ninjas[1]);  // ken 

// New Array 
// Number Array 
let ages = [20, 25, 30, 35]; 
console.log(ages[2]);  // 30 

//String and Number Array 
let random = ['shaun', 'crystal', 30, 20]; 
console.log(random);  // (4) ['shaun', 'crystal', 30, 20] 

// Array Properties  
// .length 
console.log(ninjas.length);  // 3   - three elemnts in the array 

// Array Methods 
// .join('')  - joins elements in array with what is indicated in join('') 
let resultJoin = ninjas.join(','); 
console.log(resultJoin);  // shaun,ken,chun-li  - joins all array elements with comma 

// .indexOf('')  - specific element in the array by number indicated in .indexOf('') 
let resultIndexOf = ninjas.indexOf('chun-li'); 
console.log(resultIndexOf);  // 2 

// .concat(['', ''])  - joins two arrays together 
let resultConcat = ninjas.concat(['ken', 'crystal']); 
console.log(resultConcat);  // (5) ['shaun', 'ken', 'chun-li', 'ken', 'crystal'] 

// .push('')  - returns the length of the new array. It alters the original Value. A destructive Method 
let resultPush = ninjas.push('ken'); 
console.log(resultPush);  // 4  - four new elements in the array 
console.log(ninjas);  // (4) ['shaun', 'ken', 'chun-li', 'ken'] - it altered the original value of 3 elements to 4 

// .pop()  - removes last value in the array. Also a Destructive Method 
let resultPop = ninjas.pop(); 
console.log(resultPop);  // ken  - shows the one removed 
console.log(ninjas);  // (3) ['shaun', 'ken', 'chun-li']  - last ken no longer there 


// Null and Undefined 
// Undefined - lack of value not intentional 
let aged; 
console.log(aged, aged + 3, `the age is ${aged}`);  // undefined NaN 'the age is undefined'  - undefined because no value given. Browser assigns value of undefined when it doesn't have one. 

// Null - intentional lack of value 
let ager = null;  // intentionally null 
console.log(ager, ager + 3, `the age is ${ager}`);  // null 3 'the age is null'  - in formula it's automatically a 0 


// Booleans - true or False 
// Booleans and Comparisons 
console.log(true, false);  // true false 
console.log(true, false, "true", "false");  // true false "true" "false"   - booleans with strings 

// Methods Can Return Booleans 
let newEmail = 'luigi@email.com'; 
let names = ['mario', 'luigi', 'toad']; 

// .includes('')  - shows if character appears in string -> true if yes, false if no 
let resultIncludes = newEmail.includes('@'); 
console.log(resultIncludes);  // true 

let resultIncludesTwo = names.includes('bowser'); 
console.log(resultIncludesTwo);  // false 

// Comparison Operators 
// Comparing Numbers 
let newAge = 25; 

// ==  -> comparison - does it equal to each other? 
console.log(newAge == 25);  // true 
console.log(newAge == 30);  // false 

// !=  -> negates it - is it not equal to __? 
console.log(newAge != 30);  // true  

// >   -> is it greater than __? 
console.log(newAge > 20);  // true 

// <   -> is it less than __? 
console.log(newAge < 20);  // false 

// <=  -> is it less than or equal to __? 
console.log(newAge <= 25);  // true 

// >=  -> is it greater than or equal to __? 
console.log(newAge >= 25);  // true 

// Comparing Strings 
let newName = 'shaun'; 

console.log(newName == 'shaun');  // true 
console.log(newName == 'Shaun');  // false  - because of the capital S 

console.log(newName > 'crystal');  // true  - because s in shaun comes later in alphabet than c in crystal 
console.log(newName > 'Shaun');  // true  - lowercase letters are greater than uppercase letters 
console.log(newName > 'Crystal');  // true  - any lowercase letter is greater than any uppercase letter 


// Loose and Strict Comparisons 
let ageComparison = 25; 

// Loose Comparison == or !=  (different types can still be equal) - more predictable results 
console.log(ageComparison == 25);  // true 
console.log(ageComparison == '25');  // true   - js turns string into number before it evaluates it (type conversion) 

console.log(ageComparison != 25);  // false 
console.log(ageComparison != '25');  // false 

// Strict Comparison === (different types cannot be equal) 
console.log(ageComparison === 25);  // true 
console.log(ageComparison === '25');  // false   - because one is not a string and the other is -> it's strict comparison 

console.log(ageComparison !== 25);  // false 
console.log(ageComparison !== '25');  // true 


// Type Conversion (Explicit and Implicit) - turning one data type into another data type 
// Explicit Type Conversion 
let newScore = '100'; 

// String to Number 
// Number(__) 
newScore = Number(newScore); 
console.log(newScore + 1);  // 101 

// typeof __   - to see which data type it is 
console.log(typeof newScore);  // number   - shows it is now a number not a string 

// Non-Number String to Number - won't make sense - NaN 
let resultNonNumber = Number('hello'); 
console.log(resultNonNumber);  // NaN   - not a number 

// Number to String 
// String(__) 
let resultNumber = String(50); 
console.log(resultNumber, typeof resultNumber);  // 50 string 

// Boolean Conversion - Truthy or Falsy  
// Boolean(__) 
let resultBoolean = Boolean(100); 
console.log(resultBoolean, typeof resultBoolean);  // true 'boolean'  - positive and negative numbers are truthy 

let resultBooleanTwo = Boolean(0); 
console.log(resultBooleanTwo, typeof resultBooleanTwo);  // false 'boolean'  - 0 is falsy  

// Boolean('__') - any string with length is truthy 
let resultStringBoolean = Boolean('0'); 
console.log(resultStringBoolean, typeof resultStringBoolean);  // true 'boolean'  - any value string is truthy 

// Boolean('') - any empty string is falsy 
let resultEmptyBoolean = Boolean(''); 
console.log(resultEmptyBoolean, typeof resultEmptyBoolean);  // false 'boolean'   - empty string is falsy 

// Implicit Type Conversion - JS changes it behind the scenes 

// End of Chapter 