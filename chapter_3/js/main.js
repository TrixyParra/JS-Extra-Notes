// Loops 

// for Loops  -  () are the properties {} are code blocks that cycle through the loops until it can 

for(let i = 0; i < 5; i++){
    console.log('in loop:', i)
}  
// in loop: 0
// in loop: 1
// in loop: 2
// in loop: 3
// in loop: 4
console.log('loop finished'); // loop finished  - to place under and log that loop finished 

// Cycle through an Array - Iteration -> each cycle block is one iteration 
const names = ['shaun', 'mario', 'luigi'];  // an array 

for(let i = 0 /*always starts with 0 */; i < names.length /* length of list */; i++ /* adds/goes to next */){
    //console.log(i); 
    //console.log(names[i]); 
    let html = `<div>${names[i]}</div>`;  
    console.log(html); 
}
// console.log(i); 
// 0 
// 1 
// 2 
// console.log(names[i]); 
// shaun 
// mario 
// luigi 
// Template Literal - console.log(html); 
// <div>shaun</div> 
// <div>mario</div> 
// <div>luigi</div> 

// while Loops  () only states the condition 

let i = 0;  // i needs to be declared already, outside the loop 

while(i < 5){
    console.log('in loop: ', i); 
    i++; // increment i in code block to avoid infinite loop 
} 
// in loop:  0 
// in loop:  1 
// in loop:  2 
// in loop:  3 
// in loop:  4 

// while Array Loop 
const namess = ['shaun', 'mario', 'luigi']; 
let iTwo = 0; 

while(iTwo < namess.length){
    console.log(namess[iTwo]); 
    iTwo++; 
} 
// shaun 
// mario 
// luigi 
 
// do while Loops  - run the code once even if not true/possible 
let iThree = 5;  

do{ // do runs it regardless 
    console.log('val of i is ', i);
    iThree++;
} while(iThree < 5);  // semicolons are added because it doesn't end with code block 
// val of i is  5  


// Conditional Statements 

// if Statements - check if condition is true or false 
const age = 25;  

if(age > 20){  // code block only executes if true 
    console.log('you are over 20 years old');   
} 
// you are over 20 years old  - because 25>20 - if age>25 would not execute 

// if Statements with Data 
const ninjas = ['shaun', 'ryu', 'chun-li', 'yoshi']; 

if(ninjas.length > 3){
    console.log("that's a lot of ninjas");  // double quotes used because single quotes used in const variable 
} 
// that's a lot of ninjas 

const password = 'password'; 

if(password.length >= 8){
    console.log('that password is long enough'); 
} 
// that pasword is long enough  - if password='pass' then it would not log on console beacause it's <8 

// else if Statements - to run back feedback if it is not then it logs 'else' 
const passwordElse = 'p@ss';  

if(passwordElse >= 8){
    console.log("that password is long enough"); 
} else {
    console.log("password is not long enough"); 
}
// password is not long enough 

// else if Multiple Conditions - goes through each multiple condition check 
if(passwordElse >= 12) {
    console.log("password is mighty strong");
} else if(passwordElse >= 8){
    console.log("that password is long enough"); 
} else {
    console.log("password is not long enough"); 
}
// password is not long enough 
// const passwordElse= 'p@ss' -> other examples: 'password' 'p@ssword1234' - give different log results 


// Logical Operators - runs more than one condition 
// Logical OR -> ||  and  Logical AND -> &&  

const passwordLogic = 'password1234'; 

// Logical AND -> && 
if (passwordLogic.length >= 12 && passwordLogic.includes('@')) {
    console.log("that password is mighty strong"); 
} else if(passwordLogic.length >= 8) {
    console.log("that password is strong enough"); 
} else {
    console.log("password is not strong enough"); 
} 
// that password is strong enough   - it doesn't include the '@' symbol and only satisfies one condition so it goes onto the next

// Logical OR -> || 
const passwordLogicOr = 'p@ss'; 

if (passwordLogicOr.length >= 12) {
    console.log("that password is mighty strong"); 
} else if(passwordLogicOr.length >= 8 || passwordLogicOr.includes('@')) {
    console.log("that password is strong enough"); 
} else {
    console.log("that password is not strong enough"); 
} 
// that password is strong enough   - because it satisfies one of the conditions in || conditions 

// Both && and || 
const passwordBoth = 'p@ss'; 

if (passwordBoth.length >= 12) {
    console.log("that password is mighty strong"); 
} else if(passwordBoth.length >= 8 || passwordBoth.includes('@') && passwordBoth.length >= 5) {
    console.log("that password is strong enough"); 
} else {
    console.log("that password is not strong enough"); 
} 
// that password is not strong enough  - only satisfies one part of the conditions in && so goes onto the next one 

// Logical NOT (!) - executes code only when condition is false 
// (!) reverses a Boolean  - conditions test for true so ! is used to reverse to test for true 

console.log(true);  // true 
console.log(!true);  // false 
console.log(false);  // false 
console.log(!false);  // true 

let user = false; 

if(!user) {
    console.log('you must be logged in to continue'); 
}
// you must be logged in to continue 


// Loops Continued 

// Break and Continue 

const scores = [50 ,25, 0, 30, 100, 20, 10]; 

for(let i = 0; i < scores.length; i++) {
    console.log('your score: ', scores[i] /* logs every iteration */); 
} 
// your score:  50 
// your score:  25 
// your score:  0 
// your score:  30 
// your score:  100 
// your score:  20 
// your score:  10 

// Break - breaks out of the loop, stops the iteration after the indicated number 
for(let i = 0; i < scores.length; i++) {
    console.log('your score: ', scores[i] /* logs every iteration */); 

    if(scores[i] === 100) {
        console.log('congrats, you got the top score!'); 
        break; 
    }
} 
// your score:  50 
// your score:  25 
// your score:  0 
// your score:  30 
// your score:  100   - only logs until it reaches this indicated number, does not log numbers that remain after (20, 10) 
// congrats, you got the top score! 

// Continue - breaks out of current loop and goes back to the top to the next number, the next iteration 
for(let i = 0; i < scores.length; i++) {

    if(scores[i] === 0){
        continue;  // ignores code below and back to loop, next number/iteration 
    }

    console.log('your score: ', scores[i] /* logs every iteration */); 

    if(scores[i] === 100) {
        console.log('congrats, you got the top score!'); 
        break; 
    }
} 
// your score:  50 
// your score:  25   - 0 is not logged after 25 - it skips it 
// your score:  30 
// your score:  100   - only logs until it reaches this indicated number, does not log numbers that remain after (20, 10) 
// congrats, you got the top score! 


// Switch Statements - best for checking multiple possible values of a single variable 
// it uses strict equality like how it is with === has to be the exact value 

// const grade = 'D'; 

// using if statements - would be too long to do 
// if(grade === 'A') {

// } else if(grade === 'B') {

// } else if(grade === 'C') {

// } else if(grade === 'D') {

// } else if(grade === 'E') {

// } else {

// }

const grade = 'D';  // if 'p' it would log default value 

switch(grade) {
    case 'A': 
        console.log('you got an A!'); 
        break;   // needed to only log the one needed 
    case 'B': 
        console.log('you got a B!'); 
        break; 
    case 'C': 
        console.log('you got a C!'); 
        break; 
    case 'D': 
        console.log('you got a D!'); 
        break; 
    case 'E': 
        console.log('you got an E!'); 
        break; 
    default: 
        console.log('not a valid grade');  // default does not need 'break;' beacuse it's the last one 
} 
// you got a D! 


// Variables and Block Scopes 
// scope is the area in which the variable value is relevant 
// same scope rules applies to let and const, var ignores block scope 

// Global Scope - inside and outside of code block 
let ageGlobal = 30; 
//let ageGlobal = 50;   - cannot be redefined because it has already been declared here, will show error  

if(true) {
    // ageGlobal = 40;   - can change/redefine variable inside code block and would still log both console logs below 
    console.log('inside 1st code block: ', ageGlobal); 
}
console.log('outside code block: ', ageGlobal); 
// inside 1st code block:  30 
// outside code block:  30 
// inside 1st code block:  40 
// outside code block:  40 

// Local Scope  
let ageLocal = 30; 
//let ageGlobal = 50;   - cannot be redefined because it has already been declared here, will show error  

if(true) {
    let ageLocal = 40;   // defined in code block is local only and only applied/used within code block not outside of it 
    let name = 'shaun';  // only local 
    console.log('inside 1st code block: ', ageLocal, name); 
}
console.log('outside code block: ', ageLocal, name); 
// inside 1st code block:  40 shaun 
// outside code block:  30

// Nested Code Block 
let ageNew = 30;  
//let ageGlobal = 50;   - cannot be redefined because it has already been declared here, will show error  

if(true) {
    let ageNew = 40;   // defined in code block is local only and only applied/used within code block not outside of it 
    let name = 'shaun';  // only local 
    console.log('inside 1st code block: ', ageNew, name); 
    if(true) {
        let ageNew = 50;   // defined locally for this code block 
        console.log('inside 2nd code block: ', ageNew)
    }
}
console.log('outside code block: ', ageLocal, name); 
// inside 1st code block:  40 shaun 
// inside 2nd code block:  50 
// outside code block:  30 