const favColor = document.querySelector(`#color`); 

favColor.addEventListener(`click`, (event) => {
	alert(`My favorite color is Green`);
	setTimeout(() => {event.target.style.color = "";}, 1000);
	false;
});

const favPlace = document.querySelector(`#place`); 

favPlace.addEventListener(`click`, (event) => {
	alert(`My favorite place is Rome`);
	setTimeout(() => {event.target.style.color = "";}, 1000);
	false;
});

const favRitual= document.querySelector(`#ritual`); 

favRitual.addEventListener(`click`, (event) => {
	alert(`My favorite ritual is the sauna`);
	setTimeout(() => {event.target.style.color = "";}, 1000);
	false;
});