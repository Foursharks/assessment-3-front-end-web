console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert(`Your form has been submitted successfully!`)
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

const cat = document.querySelector(`.cat`); 

cat.addEventListener(`mouseover`, (event) => {
	alert(`You're looking sassy!`);
	setTimeout(() => {event.target.style.color = "";}, 1000);
	false;
});
