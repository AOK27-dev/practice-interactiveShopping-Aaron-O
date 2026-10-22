const list = document.querySelector("ul")
const input = document.querySelector("input")
const add = ()=> {
    const newItem = document.createElement("li");
    const removeButton = document.createElement("button.remove");
    //removeButton.className = "remove";
    const editButton = document.createElement("button.edit");
    //editButton.className= "edit";
    removeButton.innerText = "X";
    editButton.innerText = "Edit";
    newItem.textContent = input.value;
    newItem.appendChild(removeButton);
    newItem.appendChild(editButton);
    removeButton.setAttribute("onclick", "remove(this)");
    editButton.setAttribute("onclick", "edit(this)");
    document.querySelector("ul").appendChild(newItem)
}
const remove = (this) => {
    this.parentElement.remove()
}
const edit = (this) => {
    this.parentElement.innerText = input.value
}
document.querySelector("form")