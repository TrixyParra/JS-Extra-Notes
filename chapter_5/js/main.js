// Object Literals 
// {...}
// Object Literal Notation uses {} to make object literals with properties inside them 
// Properties are a key value pair ->  __key__: '__value__', 

// creating an Object
let user = {
    name: 'crystal',     /* does not require a comma after the last key value pair */
    age: 30, 
    email: 'crystal@email.com', 
    location: 'berlin', 
    // blogs: ['why mac and cheese rules', '10 things to make with marmite'], 

    // Objects in an Array
    blogs: [
        {title: 'why mac and cheese rules', /* 1st property -> */ likes: 30},  // this object is first element in the array 
        {title: '10 things to make with marmite', likes:50}
    ],
    
    // adding a method attached to "user" object 
    login: function(){    // or login() {...},   - this format would still be a regular function 
        console.log('the user logged in'); 
    }, 
    logout: function(){   // or logout() {...}, 
        console.log('the user logged out'); 
    },

    // this 
    logBlogs: function(){   // or logBlogs() {...}, 
        // console.log(this);   // here, THIS represents the "user" Object - would show whole Object on console 
        // console.log(this.blogs);    // would display quantity and blog names on console 
        console.log('this user has written the following blogs:'); 
        this.blogs.forEach(blog => {
            // console.log(blog);   // line 81 
            console.log(blog.title, blog.likes);   // line 118-120 
        })
    }
    
}; 

// Accessing the Properties 
console.log(user); 
// {name: 'crystal', age: 30, email: 'crystal@email.com', location: 'berlin', blog: Array(2)} 
console.log(user.name); 
// crystal 

// overwrite/update a property 
user.age = 35; 
console.log(user.age); 
// 35 

// Access a Property in Square Bracket Notation Instead of Dot Notation 
// (user['___']) 
console.log(user['name']); 
// crystal 
console.log(user['email']); 
// crystal@email.com 

// update a property with Square Bracket Notation 
user['name'] = 'luigi'; 
console.log(user['name']); 
// luigi 

// using typeof 
console.log(typeof user); 
// object   - shows it's an object type 


// Methods in Objects - things it can do 
// Key and Value Pair 
/* 
__method__: function(){
    __what it does__
} 

or 

__method__() {
    _____________
}
*/ 
// Example Line: 14 

// call the method 
user.login(); 
// the user logged in 

user.logout(); 
// the user logged out 


// THIS 
// this Keyword - context Object in which current code is executed
// this refers to the __"ex: user"__ object 
// this inside a method to refer to the actual object, has to be inside a regular function NOT arrow function so it can work
// Example Line: 22 

user.logBlogs(); 
// this user has written the following blogs: 
// why mac and cheese rules 
// things to make with marmite 

// THIS as a Global context 
// Global Object in JS is known as Window Object 
console.log(this); 
// Window {window: Window, self: Window, document: document, name: '', location: Location, …} 


// Objects in Arrays Instead of Strings 
// Best to use to Retrieve Data (ex: movies from a database to get individual titles from a collection - array of objects) 
const blogs = [
    {title: 'why mac and cheese rules', /* 1st property: */ likes: 30},  // this object is the first element in the array 
    {title: '10 things to make with marmite', likes:50}
]

console.log(blogs); 
// (2) [{…}, {…}] 

// this user has written the following blogs: 
// why mac and cheese rules 30 
// 10 things to make with marmite 50  



// Math Object 
// Math 

// Math Constants

console.log(Math);  
// Math {abs: ƒ, acos: ƒ, acosh: ƒ, asin: ƒ, asinh: ƒ, …}    - different methods and properties attatched to MAth Object 

console.log(Math.PI); 
// 3.141592653589793 

console.log(Math.E); 
// 2.718281828459045 


// Math Methods 

const area = 7.7; 

// Round 
// Math.round(__) 
// rounds it like normal rounding 
console.log(Math.round(area)); 
// 8    // if area=7.2 -> it would be 7 

// Floor 
// Math.floor(__) 
// Rounds it down regardless of what # is after the decimal 
console.log(Math.floor(area)); 
// 7  

// Ceil 
// Math.ceil(__) 
// Rounds it up regardless of what # is after the decimal 
console.log(Math.ceil(area)); 
// 8 

// Trunc 
// Math.trunc(__) 
// Removes the decimal and only leaves the integer 
console.log(Math.trunc(area)); 
// 7 

// Random 
// Math.random() 
// generates random numbers between 0 and 1  - decimal value 
const random = Math.random(); 

console.log(random); 
// 0.25556304262359775   - each refresh will always result in a different number 

// To get 0 or 1 
// Math.round(__variableName__)
console.log(Math.round(random)); 
// 0   - will always be 0 or 1 on each refresh 

// Random Number between 1 and 100 
// Math.round(__variableName__ * 100) 
console.log(Math.round(random * 100)); 
// 84   - each refresh will always result in a different number 



// Primitive Values - stack 

let scoreOne = 50; 
let scoreTwo = scoreOne; 

console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`); 
// scoreOne: 50 scoreTwo: 50

scoreOne = 100; 
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`); 
// scoreOne: 100 scoreTwo: 50
// makes a copy of the new value that was changed but doesn't affect/change the other 


// Reference Values - heap 

const userOne = /* object -> */ {name: 'ryu', age: '30'};   // stored once on Heap, first pointer on stack
const usertwo = userOne;   // second pointer on stack 

console.log(userOne, usertwo); 
// {name: 'ryu', age: '30'} {name: 'ryu', age: '30'} 
// makes copy of FIRST pointer - both references back to the same data/object on the heap 
// both pointers stored 

userOne.age = 40; 
console.log(userOne, usertwo); 
// {name: 'ryu', age: 40} {name: 'ryu', age: 40} 
// If one is changed/updated, the other one is too. Both change because both point to the same object in the Heap 
