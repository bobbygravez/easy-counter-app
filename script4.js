let saveEl = document.querySelector("#save-el");
let countEl = document.querySelector("#count-el");
let count = 0;

function increment() {
	count += 1
	countEl.innerHTML = count
}



function save() {
	let dashSeparator = " - "
	let saveCount = count + dashSeparator

	saveEl.innerHTML += saveCount
	countEl.innerHTML -= count;
	count = 0
	
}