const toDolist = document.getElementsByClassName("to-do-item")[0];
const input = document.getElementById("input")
const trash = document.getElementById("trash")

input.addEventListener("keydown",function(event){
    if(event.key === "Enter")
      insert();
    })

function insert() {
    var divParent = document.createElement("div");
    var divChild = document.createElement("div");
    var checkbox = document.createElement("i");
    var trashbox = document.createElement("i");


    divParent.className = "list";
    divParent.innerHTML = "<div>"+input.value+"</div>";

    checkbox.className = "fas fa-check-square";
    checkbox.style.color = "lightgray";
    checkbox.addEventListener("click", ()=>{
        checkbox.style.color = "limegreen";
      });

    divChild.appendChild(checkbox)

    trashbox.className = 'fas fa-trash';
    trashbox.style.color = 'darkgray';
    trashbox.addEventListener("click", ()=> {
  
    divParent.remove();

})

    divChild.appendChild(trashbox);

    divParent.appendChild(divChild);

    toDolist.appendChild(divParent);


    input.value = '';
}
