// Your code goes here




let btn = document.querySelectorAll('.btn');
btn = Array.from(btn);
btn.forEach((currentValue, index) => {
    currentValue.addEventListener('mouseover', function(e){
        currentValue.style.backgroundColor = 'green';
    })
    currentValue.addEventListener('click', function(e){
        console.log('I am never letting you sign up');  
    })
})


let nav = document.querySelectorAll('.nav-link');
nav = Array.from(nav);
nav.forEach((currentValue, index) => {
    currentValue.addEventListener('dblclick', function(event){
        console.log('You will not leave this page!');
        event.preventDefault();
    })
});





let firstName = document.querySelector('.first-name');
firstName.addEventListener('keydown', function(event){
 console.log(`Typed keys in first name input box : ${event.key}`); 
});


let lastName = document.querySelector('.last-name');
lastName.addEventListener('keydown', function(event){
 console.log(`Typed keys in last name input box : ${event.key}`); 
});




window.addEventListener('scroll', function(e) {
    console.log('Scrolled!');
  }
);


















// const zoom = document.getElementsByClassName('.rounded');
// zoom.addEventListener('wheel', function(event){
//     zoom.deltaX = 0*00;
//     zoom.deltay = 0*00;
//    });


// let drag = document.querySelector('.footer p');
// drag.addEventListener("drag", function(event) {

// }, false);

// let drop = document.querySelectorAll('.dropzone');
// drop.addEventListener("drop", function(event) {
//     event.preventDefault();
//     if (event.target.className == "dropzone") {
//       event.target.style.background = "";
//       dragged.parentNode.removeChild( dragged );
//       event.target.appendChild( dragged );
//     }
//   }, false);



let container = document.querySelector('.home')

container.addEventListener('blur', function(){
    container.style.backgroundColor = 'gray'
});

container.addEventListener('focus', function() {
    container.style.backgroundColor = 'transparent'
});

console.log(container)


















