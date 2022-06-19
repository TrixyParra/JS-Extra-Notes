// FUNCTIONS 

// Function Declaration - Defines the function. Hoisted - can be declared at bottom since hoisted on top. 
function greet(){   // this function can then be used/called anywhere again and execute what's inside the code block 
    console.log('hello there'); 
} 
// won't log on console because we just defined it but not called it - called below... 


// Function Expression - a function stored in a variable. Hoisting doesn't apply. 
const speak = function(){
    console.log('good day!'); 

};  // semicolons are always needed after the curly brackets here for expressions  
// will be called in same way as a function declaration 
// Function Expressions are best recommended to keep functions at top and organized 


// Calls the Function; Invoking the function - as many times as wanted 
greet(); 
greet(); 
greet(); 
// hello there 
// hello there 
// hello there 

speak(); 
speak(); 
speak(); 
// good day! 
// good day! 
// good day! 


// Hoisting - loosely defines how our functions are effectively hoisted to the top of a file before JS runs in essence of being declared before the rest of the JS. - Applies to Function Declaration
/* 
// Function Declaration - can be declared at bottom because essentially hoisted at top. Even if it's called on top. 
greet(); 
greet(); 
greet(); 

function greet(){   // this function can then be used/called anywhere again and execute what's inside the code block 
    console.log('hello there'); 
} 
// hello there 
// hello there 
// hello there 
*/ 
// but can get messy to have functions declared all over; therefore, function expressions recommended! 



// Values in Functions 

// Arguments and Parameters 

const speakValue = function(name, time /* parameter */){ 
    console.log(`good ${time} ${name}`); 
}; 
// good morning mario 

speakValue('mario', 'morning' /* argument */);  
// order in argument MUST match order in parameter 
// if no values on Argument .. speakValue(); .. then, Default Values in Parameters are used .. function( name = 'luigi', time = 'night') .. which would log .. good night luigi .. 



// Returning Values from Functions 

const calcArea = function(radius){
    // let area = 3.14 * radius**2;  // calculate area of a circle. 
    // "area" is Locally Stored won't log if you console log outside of code block. 
    // console.log(area);  // 78.5   - if console logged inside, then can't be used elsewhere 
    // return area;  // to return a value 
    
    // For Clean Up - Return directly 
    return 3.14 * radius**2; 

} 

calcArea(5);  // 78.5  

// Returned function value has to be Stored in Variable for Global Scope 
const area = calcArea(5); 
console.log(area);  // 78.5 

/* 
// "area" can now be used to create another function. Uses a value that a function returned or brought back to us. 
const calcVol = Function(area){

}; 

calcVol(area); 
*/ 



// Regular Functions 
const calcAreaSample = function(radius){
    return 3.14 * radius**2; 
}; 


// Arrow Functions - modern cleaner, shorter way to write functions 
// "function()" keyword is not used just () 
// if ONLY ONE parameter, () can be removed 
// NO or MORE THAN ONE parameter, () are needed 
const calcAreaArrow = (radius) => { 
    return 3.14 * radius**2; 
}; 

// Single RETURN Value 
// Would still return. Much Shorter. 
// NO () or {} or "return" keyword 
// const calcAreaArrow = radius => 3.14 * radius**2; 
// area is:  78.5 

const areaArrow = calcAreaArrow(5); 
console.log('area is: ', areaArrow); 
// area is:  78.5 


// Practice Arrow Functions 

// Regular Function 
/*
const greet = function(){
    return 'hello world'; 
}; 
*/ 

// Arrow Function 
const greeting = () => 'hello world'; 

const result = greeting(); 
console.log(result); 
// hello world 


// Complex Example to Arrow Function 

// Regular Function 
/*
const bill = function(products, tax){
    let total = 0; 
    for(let i = 0; i < products.length; i++) {
        total += products[i] + products[i] * tax; 
    } 
    return total;
}; 
*/

// Arrow Function 
const bill = (products, tax) => {
    let total = 0; 
    for(let i = 0; i < products.length; i++) {
        total += products[i] + products[i] * tax; 
    } 
    return total;
}; 
// Few differences because there's more inside the code block compared to only a single return statement 

console.log(bill([10, 15, 30], 0.2));  // logged directly, shorter version, not stored to variable 
// 66 



// METHODS 


const name = 'mario'; 

// Functions 

const greetExample = () => 'hello'; 

let resultOne = greetExample(); 
console.log(resultOne); 
// hello 

// Methods 
// Invokes directly using dot notation on the value itself  ... value -> dot notation -> method name .. 

let resultTwo = name.toUpperCase(); 
console.log(resultTwo); 
// MARIO 



// Callbacks and Foreach  


// callback Function - passing a function as an argument 

const myFunc = (callbackFunc /*parameter can be called anything */) => {
    // do something 
    let value = 50; 
    callbackFunc(value); 
}; 

// Call/Invoking the Function  
// myFunc(); 
// passing a function as an argument 

/*
myFunc(function(value){
    // do something 
    console.log(value); 
}); 
// 50 
*/

//Call/Invoke Arrow Function - most seen 
myFunc(value => {
    console.log(value);
}); 
// 50 


// forEach() Method - iterates over an array, loop 

let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li']; 

people.forEach(function(person)/* expects a callback function for each individual in array*/{
    console.log(person); 
}); 
// mario   - iterates 5 times for each element in the array 
// luigi 
// ryu 
// shaun 
// chun-li 

// As Arrow Function - most seen 
people.forEach(person => {
    console.log(person);
}); 
// mario 
// luigi 
// ryu 
// shaun 
// chun-li 

// Two Parameters 
people.forEach(function(person, index)/* expects a callback function for each individual in array*/{
    console.log(index, person); 
}); 
// 0 'mario' 
// 1 'luigi' 
// 2 'ryu' 
// 3 'shaun' 
// 4 'chun-li'

// Call/Define a callback Function and passing it in a method ... ex: forEach() method 
const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`);
}; 

people.forEach(logPerson); 
// 0 - hello mario 
// 1 - hello luigi 
// 2 - hello ryu 
// 3 - hello shaun 
// 4 - hello chun-li 


// Callback ForEach Function in Action 
// get a refernce to the 'ul' 
const ul = document.querySelector('.people');  // element from html 

const peopleUl = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li']; 

let html = '';  // to log html template 

peopleUl.forEach(function(person){
    // create html template 
    html += `<li style="color: purple">${person}</li>`; 
}); 

console.log(html); 
// <li style="color: purple">mario</li><li style="color: purple">luigi</li><li style="color: purple">ryu</li><li style="color: purple">shaun</li><li style="color: purple">chun-li</li>
ul.innerHTML = html;  
// diplays purple color ul list to html 
// mario
// luigi
// ryu
// shaun
// chun-li 
 