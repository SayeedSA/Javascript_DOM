//access by collective with array
let val;
val = this;
val = window;
val = window.document;
val = document; // access full documents
val = document.all; //access all value in an array
val = document.all[1] //access specific iterate
val = document.all.length;
val = document.head;
val = document.domain;

val = document.links;
val = document.links[0];

val = document.images;

val = document.scripts;
val = document.scripts[0];
val = document.scripts[0].getAttribute('src');

link = document.links;
let linkArr = Array.from(link);
linkArr.forEach(function(link){
    console.log(link
        )
});





//document.getElementById()
//It access only particular element(single Element)
//access by id

//Getting an Element
val = document.getElementById('document-title')
val = document.getElementById('document-title').id;
val = document.getElementById('document-title').className;


//Changing Style
document.getElementById('document-title').style.background = '#333'
document.getElementById('document-title').style.color = '#fff'
document.getElementById('document-title').style.padding = '10px'
document.getElementById('document-title').style.display = 'block'

//Changing Content
document.getElementById('document-title').textContent = 'New Title'
document.getElementById('document-title').innerText = 'Again New Title'

//Changing HTML Change
document.getElementById('document-title').innerHTML = '<i>Again print</i>'

val = document.getElementById('document-title')
val.innerText = "Sayeed"

//Query Selector
//document.querySelector()
//It access only particular element(single Element)
val = document.querySelector('#document-title') //by Id
val = document.querySelector('.class-title')
val = document.querySelector('h3')

val = document.querySelector('ol')
val = document.querySelector('ol li')
val = document.querySelector('ul li')
val.style.background = 'red'
val.style.color = 'white'
val = document.querySelector('li:last-child')
val = document.querySelector('li:nth-child(1)').innerText = "hello"
console.log(val);

//MultiSelector
//documents.getElementsByClassName()
let list = document.getElementsByClassName('sample-class')
list[0].style.background = 'red'
list[0].style.color = 'white';
list[0].style.padding = '10px';
list[0].style.textContent = 'Hello World';

//document.getElementByTagName()
list = document.getElementsByTagName('li')
list = document.querySelector('ol').getElementsByTagName('li')

let lis = Array.from(list)
lis.forEach(function(item){
    console.log(item)
})

//document.quertSelectorAll()
// id-> #
// Classname-> .
// tagname-> 

list = document.querySelectorAll('.sample-class')
list = document.querySelectorAll('ul li')
list.forEach(function(item){
    console.log(item)
})

let liOdd = document.querySelectorAll('li:nth-child(odd)')
let liEve = document.querySelectorAll('li:nth-child(even)')

liOdd.forEach(function(item){
    item.style.background = 'grey'
    item.style.color = 'white'
})
console.log(list);

//Traversing the DOM

list = document.querySelectorAll('ul');
val = list;


//Get the child Nodes
val = list
val = list.childNodes;



console.log(val)