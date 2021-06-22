const form = document.querySelector('#addItem');
const list = document.querySelector('#list');
const text = document.querySelector('input[name="addMe"]');
const toDoList = [];
const savedList = JSON.parse(localStorage.getItem("savedList")) || [];
for (let i = 0; i < savedList.length; i++) {
     // new li config
     const newLi = document.createElement("li");
     // checkBox config
     const checkBox = document.createElement("input");
     checkBox.type = "checkbox";
     checkBox.checked = false;
     //label config
     const label = document.createElement("label");
     const labelText = document.createElement("span");
     labelText.innerText = savedList[i].text;ded
     // remove button
     const removeMe = document.createElement("button");
     removeMe.innerText = "Remove Me";
     // combine
     label.appendChild(checkBox);
     label.appendChild(labelText);
     newLi.appendChild(label);
     newLi.appendChild(removeMe);
     newLi.setAttribute('id', text);
     list.appendChild(newLi);
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (text.value == ''){
        // pass
    } else {
    const item = newItem(text.value);
    list.appendChild(item)
    text.value = '';
    }
})
list.addEventListener('click', function(e) {
    if (e.target.tagName === 'BUTTON') {
    e.target.parentElement.remove();
    } else if (e.target.tagName == 'INPUT') {
        e.target.parentElement.classList.toggle('done');
    }
})

function newItem(text) {

    // new li config
    const newLi = document.createElement("li");
    // checkBox config
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.checked = false;
    //label config
    const label = document.createElement("label");
    const labelText = document.createElement("span");
    labelText.innerText = text;
    // remove button
    const removeMe = document.createElement("button");
    removeMe.innerText = "Remove Me";
    // combine
    label.appendChild(checkBox);
    label.appendChild(labelText);
    newLi.appendChild(label);
    newLi.appendChild(removeMe);
    newLi.setAttribute('id', text);
    toDoList.push({'text' : text, 'checked' : false});
    localStorage.setItem("savedList", JSON.stringify(toDoList));
    return newLi;
}