const dropdown 	= document.querySelector("#burger")
const classes 	= document.querySelector("#menu").classList

dropdown.addEventListener('click',() => {
	classes.toggle("hidden")
})