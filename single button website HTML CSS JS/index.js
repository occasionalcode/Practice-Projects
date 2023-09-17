const button = document.getElementById("myBtn"); //link that connects to the button from html

const currentDate = new Date(); //import to get the current date and time


const options = {year: 'numeric', month:'long', day: "numeric", hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true } //setting the format of the date and time
const formattedDate = currentDate.toLocaleString(undefined, options); 

function getCurrent(e){ // creating the button's function
    const name = prompt("what is your name?"); //prompting user for an input
    const newHeading = document.createElement("h1"); //creates a new heading
    newHeading.textContent = "Hi! " + name + " the time is " + formattedDate; 
    newHeading.classList.add("new-Heading"); //creates a "class name" for the newly created heading to make it stylable in CSS.
    
    document.body.appendChild(newHeading)//appends the newly created heading into the html body
    
}

button.addEventListener("click", getCurrent); //actives when the button is clicked from the html
