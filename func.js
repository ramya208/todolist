let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

displayTask();

function message() {

    let input = document.querySelector(".input-box input").value;

    if (input == "") {
        return;
    }

    tasks.push({
        text: input,
        completed: false
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));

    displayTask();

    document.querySelector(".input-box input").value = "";
}

function displayTask() {

    let output = document.querySelector(".output");

    output.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {

        output.innerHTML += `
            <li>

                <input 
                    type="checkbox"
                    ${tasks[i].completed ? "checked" : ""}
                    onchange="toggleComplete(${i})"
                >

                
                    ${tasks[i].text}
                

                <p style="color:${tasks[i].completed ? 'green' : 'red'};">
                    ${tasks[i].completed ? "Completed" : "Pending"}
                </p>

                <i class="ri-delete-bin-line delete" onclick="deleteTask(${i})"></i>

            </li>
        `;
    }
}

function toggleComplete(index) {

    tasks[index].completed = !tasks[index].completed;

    localStorage.setItem("tasks", JSON.stringify(tasks));

    displayTask();
}

function deleteTask(index) {

    tasks.splice(index, 1);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    displayTask();
}