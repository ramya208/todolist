
let tasks = [];

function message() {

    let input = document.querySelector(".input-box input").value;
    if(input == ""){
    return;
}
    


    tasks.push(input);

    displayTask();

    document.querySelector(".input-box input").value = "";
}

function displayTask() {

    let output = document.querySelector(".output");

    output.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {

        output.innerHTML += `
            <li>
                <span>${tasks[i]}</span>
                <p style="color:green;">completed</p>

                <i class="ri-delete-bin-line delete" onclick="deleteTask(${i})"></i>
            </li>
        `;
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    displayTask();
}