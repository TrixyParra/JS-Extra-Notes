// document 
// used to get anything from the webpage/HTML 

// on Console 
// type: document -> enter -> shows: visual representation of the html document 
// type: document. -> shows list of different properties and methods that can be used 
// properties examples
// type: document.location -> gives back information about the document location 
// type: document.URL -> gives back the url 
// method examples 
// type: document.get -> shows list of different methods to use 



// Add, Change, or Remove Content from an Element in the DOM and get a Reference to them

// STEP 1 
// Choose which element on the page we want to add/remove some content to or change in some way and reach into the DOM and get a reference on that element 

// Querying the DOM - reaching in and selecting elements and nodes to do something with them later 
// First, store reference in variable 

// .querySelector 
// document.querySelector('_name of element_') - best way to Query the DOM 
// grabs one element 
// one of best ways to get an element 
// or 
// go to inspect -> elements -> higlight element -> right click -> copy -> copy selector -> paste it in ('__') 

const para = document.querySelector('p');  // best way to query the DOM -- from top to bottom grabs first "p" tag

console.log(para); 
// <p>hello, world</p>   - creates reference to this tag to later change, delete, or style 

/*
// to get another p tag when there's multiple p tags, can go by the class "ex: .error" it has 
const para = document.querySelector('.error');  /
console.log(para); 
// <p> class="error">this is an error message</p>  
*/ 

/* 
// to get a div with a class "ex: div.error" 
const para = document.querySelector('div.error');  /
console.log(para);
// <div class="error">this is another error</div> 
*/ 


// .querySelectorAll 
// document.querySelectorAll('_name of element_')  
// grabs multiple elements 
// one of best ways to get an element 

const paras = document.querySelectorAll('p'); 

console.log(paras); 
// NodeList(3) [p, p, p.error]   - Node List, displays all p tags, not an array 
// Can't do all array function but can use some like... 

// square brackets... 
console.log(paras[0]); 
// <p>hello, world</p>   - gets first p 
console.log(paras[2]); 
// <p class="error">this is an error message</p>   - gets the third p 

// forEach() 
paras.forEach(para => {
    console.log(para); 
}); 
// <p>hello, world</p> 
// <p>lorem ipsum</p> 
// <p class="error">this is an error message</p> 

// all by class (ex: .errors)
const errors = document.querySelectorAll('.error'); 

console.log(errors); 
// NodeList(2) [p.error, div.error]  - Node list 


// Other Methods to Query the DOM 

// .getElementById  
// document.getElementById('__') 
// get an element by its ID 
// grabs single element 

const title = document.getElementById('page-title');    // no # needed -- ID already implied 

console.log(title); 
// <h1 id="page-title">The DOM</h1> 


// .getElementsByClassName 
// document.getElementsByClassName('__') 
// get elements by their class name 
// grabs multiple elements 

const errorsTwo = document.getElementsByClassName('error');    // no . needed -- class already implied 

console.log(errorsTwo); 
// HTMLCollection(2) [p.error, div.error]  - HTML collection 

// can use suare brackets 
console.log(errorsTwo[0]); 
// <p class="error">this is an error message</p> 

// forEach() cannot be used in an HTML Collection 


// .getElementsByTagName 
// document.getElementsByTagName('__') 
// get elements by their tag name 
// grabs multiple tag elements 

const parasTwo = document.getElementsByTagName('p'); 

console.log(parasTwo); 
// HTMLCollection(3) [p, p, p.error] 
console.log(parasTwo[1]); 
// <p>lorem ipsum</p> 



// STEP 2 
// Do something with the elements - where we can change the elements contents after Querying the DOM 

// .innerText 
// __variableName__.innerText 
// is a property not a method 
// gets text inside of tag without the tag used displayed 
const parasText = document.querySelector('p'); 

console.log(parasText.innerText); 
// hello, world   - gets/shows the text inside of tag 

// To change the text  
parasText.innerText = 'ninjas are awesome!'; 
// completely changes the old text to the new one directly on the HTML browser view 

// to append/add to the text 
// parasText.innerText += 'ninjas are awesome!'  -- adds both next to each other 

// Change several texts at once 
// Change/Add text on the chosen element on the HTML web view 
const parasTextAll = document.querySelectorAll('p');    // to get Nodes list 

parasTextAll.forEach(/*callback function to cycle through the nodes list*/ para => {
    console.log(para.innerText);   // line 153-156 
    para.innerText += ' new text';   // ' new text' added to each "p" tag on the html web view 
}); 
// ninjas are awesome! 
// lorem ipsum 
// this is an error message 
// this is the content 


// .innerHTML 
// Grab element and change HTML inside of it 
// this is a property not a method 

const content = document.querySelector('.content'); 

console.log(content.innerHTML);    
// <p>this is the content new text</p> 
// grabs content inside of the element selected 

// to Change the Content 
content.innerHTML = '<h2>THIS IS THE NEW TEXT</h2>'; 
// THIS IS THE NEW TEXT   - on the HTML web view 
// completely changes/overwrites the content displayed on the HTML web view that's in the .content div 
// new h2 replaces previous p tag content 

// to append/add to the text 
// content.innerHTML += '<h2>THIS IS THE NEW TEXT</h2>'   -- adds both 


// Create HTML Template of a List/Array of Names/Data to Output on HTML  
const people = ['mario', 'luigi', 'yoshi']; 

people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`; 
}); 
// mario 
// luigi 
// yoshi 
// adds these new p tags to the .content div 
// displays each on the HTML web view - can be seen on inspect Elements 


// getAttribute
// .getAttribute('__chosen atrribute__') 
// Get and Update Attributes of an HTML Element 
// is a method 

const link = document.querySelector('a'); 

console.log(link.getAttribute('href')); 
// https://www.google.com   - we get the value of the href attribute 


// setAttribute 
// .setAttribute('__attribute to change__', '__what to change it to__') 
// Change or Set an Attribute 
// method 
link.setAttribute('href', 'https://amazon.com');   // which attribute to change and then what to change it to 

// Change the innertext 
link.innerText = 'Amozon Website'; 
// Amozon Website   -- changes text on the "a" tag on the HTML web view 

// Other Example 
const mssg = document.querySelector('p'); 

console.log(mssg.getAttribute('class'));   // which attribute 
// error/null 

mssg.setAttribute('class', 'success'); 
// success   -- changed the first p class name to success 

// Set an Attribute that Doesn't Already Exist 
// Drawback to this style format is that you can't add additional styles - will overwrite each one forgetting the previous one's 
mssg.setAttribute('style', 'color: green'); 
// lorem ipsum    -- chnages the first p text to green  --- (intended for the last p example) 


// Style 
// .style 
// allows to add/remove multiple styles 
// does not overwrite 
// is a property 

const titleStyle = document.querySelector('h3'); 

// titleStyle.setAttribute('style', 'margin: 50px');   // adding a style 
// added margin but removed style color orange previously established in HTML 
// Drawback to this style format is that you can't add additional styles - will overwrite each one forgetting the previous ones 

console.log(titleStyle.style); 
// CSSStyleDeclaration {0: 'color', accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …} 
// shows list with color: orange in it 

console.log(titleStyle.style.color/*property you want to see*/); 
// orange 

// Add a Style 
titleStyle.style.margin /*property name to add a value to*/ = '50px'; 
// <h3 style="color: orange; margin: 50px;">The DOM</h3>   -- shows the style was added on Inspect -> Elements 

titleStyle.style.color = 'crimson'; 
// changes the color to crimson on thw HTML web view 

// double barrel property names changed to camelcase 
// ex: CSS-> font-size , JS-> fontSize 
titleStyle.style.fontSize = '60px'; 
// changes font size on text in HTML web view 

// Delete a Style 
// leave an empty string 
// removes the property 
titleStyle.style.margin = ''; 
// removes previously set margin -- no margin now 


// Change Classes from the JS 

const contents = document.querySelector('h5'); 

// .classList 
// gets classes that an element has 
// a property 
console.log(contents.classList);   
// DOMTokenList ['content', value: 'content'] 
// one class therefore shows one class in the list

// Add a Class 
contents.classList./*method*/add('new');    // ('_name of new class to add_') 

// Remove a Class 
contents.classList.remove('new');    // removes the "ex: new" class 

// Another Add Example 
contents.classList.add('successful'); 
// used class successful styles from CSS 


// Challenge 

// Query All Elements 
const sections = document.querySelectorAll('section'); 

//Cyle through them 
sections.forEach(section => {
    //console.log(section.innerText);    // .innertext gets all VISIBLE text in the element/sections 
        // another way is ...
    //console.log(section.textContent/*property*/);   // .textContent gets ALL VISIBLE AND NOT VISIBLE text 

    // add classes if includes indicated word 
    if(section.textContent.includes('error')){
        section.classList.add('errors');            // adds class errors to them on html web view and inspect
    }
    if(section.textContent.includes('success')){
        section.classList.add('successful')         // adds class successful to them on html web view and inspect 
    }
}); 
// lorem error ipsum
// lorem success ipsum
// lorem ipsum lorem
// lorem ipsum success
// error lorem ipsum
// lorem ipsum lorem
// lorem ipsum error
// success lorem ipsum 


// Toggle a Class 
// .classList.Toggle('__name of class__') 
// if element HAS a class, we want to take it off 
// if element DOESN'T HAVE a class, we want to apply it 

const titleToggle = document.querySelector('.toggle'); 

titleToggle.classList.toggle('test');   // will add or remove class -- here, adds "ex: test" class to it 
titleToggle.classList.toggle('test');   // running it again, now removes "ex: test" class 

// Add/Remove classes 
// .add('___') 
// .remove('___') 
// .toggle('___') 
