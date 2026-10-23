const list = document.querySelector("ul")
const input = document.querySelector("input")
const addItem = ()=> {
    const newItem = document.createElement("li");
    const removeButton = document.createElement("button");
    removeButton.className = "remove";
    const editButton = document.createElement("button");
    editButton.className= "edit";
    removeButton.innerText = "X";
    editButton.innerText = "Edit";
    const textSpan = document.createElement("span");
    textSpan.innerText = input.value;
    newItem.appendChild(textSpan);
    newItem.appendChild(removeButton);
    newItem.appendChild(editButton);
    removeButton.setAttribute("onclick", "removeItem(this)");
    editButton.setAttribute("onclick", "editItem(this)");
    document.querySelector("ul").appendChild(newItem)
}
const removeItem = (btn) => {
    btn.parentElement.remove();
}
const editItem = (btn) => {
    btn.parentElement.querySelector("span").innerText = input.value;
}