// Your code goes here



//////////// Mouseover + Click + Stop Propagation
let btn = document.querySelectorAll('.btn');
btn = Array.from(btn);
btn.forEach((currentValue, index) => {
    currentValue.addEventListener('mouseover', function(e){
        currentValue.style.backgroundColor = 'green';
    })
    currentValue.addEventListener('click', function(e){
        console.log('I am never letting you sign up');  
        e.stopPropagation();
    })
})

//////////// Dblclick + Prevent Default; 
let nav = document.querySelectorAll('.nav-link');
nav = Array.from(nav);
nav.forEach((currentValue, index) => {
    currentValue.addEventListener('dblclick', function(event){
        console.log('You will not leave this page!');
        event.preventDefault();
    })
});






//////////// Keydown + Blur + Focus
let firstName = document.querySelector('.first-name');

firstName.addEventListener('keydown', function(event){
 console.log(`Typed keys in first name input box : ${event.key}`); 
});
firstName.addEventListener('blur', function(){
    firstName.style.backgroundColor = 'gray'
});
firstName.addEventListener('focus', function() {
    firstName.style.backgroundColor = 'transparent'
});



//////////// Keydown
let lastName = document.querySelector('.last-name');
lastName.addEventListener('keydown', function(event){
 console.log(`Typed keys in last name input box : ${event.key}`); 
});


//////////// Scroll + Load + Click2
window.addEventListener('scroll', function(e) {
    console.log('Scrolled!');
  }
);
window.addEventListener("load", function(event) {
        alert('The Window Has Loaded');
})
window.addEventListener("click", function(event) {
    console.log('Should not show up unless called spicificly')
})


//////////// Select
const input = document.querySelector('input');
input.addEventListener('select', function(e){
    console.log('I was selected')
});




//////////// Resize
window.addEventListener('resize', function(e){
    alert('the window was resized');
});









  





















