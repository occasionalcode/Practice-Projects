const name = document.getElementById("user__name");
const form = document.getElementById("form");
const errorElement = document.getElementById('error');
const displayName = document.getElementById('display__name');
const toDoSection = document.getElementById('TODO__Section');
const firstIntro = document.getElementById("first_intro");




function validateForm(e) {
    e.preventDefault();
    let messages = [];

    if (name.value === '' || name.value == null){
        messages.push('Name is required')
        firstIntro.classList.toggle("checked");

        
    }
    
    else if(name.value.length >= 10){
        messages.push("name should be less than 10 characters")
    }

    else if(name.value == "Riki"  || name.value == "Marc"){
        messages.push("Again! thats some ugly ahh name")
    }

    else{
        displayName.innerText = `HEY ${name.value}`;
        toDoSection.scrollIntoView({behavior: 'smooth'})
        errorElement.innerText = "";
        firstIntro.classList.remove("checked");
 
    }
    
    if (messages.length > 0){
        errorElement.innerText = messages.join(',');
          
    }
    
    else if(name.value <= 0){
        messages.push('Name is required')
    }

    name.value = "";
}

form.addEventListener('submit', validateForm);





const toDoInputBox = document.getElementById("ToDo__inputBox");
const toDoListContainer = document.getElementById("list-container")

function addTask(){

    if(toDoInputBox.value === ''){
        alert("Go visit a mental hospital")
    }
    
    else{
        let li = document.createElement('li');
        li.innerHTML = toDoInputBox.value;
        toDoListContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    toDoInputBox.value = "";
    saveData();
}

toDoListContainer.addEventListener("click", 
    function(e){
        if(e.target.tagName === "LI"){
            e.target.classList.toggle("checked")
            saveData();
        }
        else if(e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
            saveData();
        }
    }, 
    false);


function saveData(){
    localStorage.setItem("data", toDoListContainer.innerHTML);
}

function showTask(){
    toDoListContainer.innerHTML = localStorage.getItem("data");
}

showTask()