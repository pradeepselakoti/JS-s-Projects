const inputBox =document.querySelector('#input-box')
const listContainer = document.querySelector('#list-container')

const addTask = document.querySelector('#btn')

// function addTask(){
//     if(inputBox.value === ''){
//         alert("You must write something!")
//     }
//     else{
//         let li = document.createElement('li')
//         li.innerHTML = inputBox.value
//         listContainer.appendChild(li)
//     }
// }

btn.addEventListener('click', function(){
        if(inputBox.value === ''){
        alert("You must write something!")
    }
    else{
        let li = document.createElement('li')
        li.innerHTML = inputBox.value
        listContainer.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    inputBox.value = ""
    saveData();
})

listContainer.addEventListener('click',function(e){
    if(e.target.tagName === "LI"){
        console.log(e.target)
        e.target.classList.toggle("checked")
        saveData();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
});

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML= localStorage.getItem("data");
}
showTask();


