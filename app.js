import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";
const firebaseConfig = {
    apiKey: "AIzaSyD7qTTHKmFY5efDW8_CnSNaIB3HTX-oN9I",
    authDomain: "totolist-75185.firebaseapp.com",
    projectId: "totolist-75185",
    storageBucket: "totolist-75185.firebasestorage.app",
    messagingSenderId: "1058935357446",
    appId: "1:1058935357446:web:de12744f6ef8379c230387",
    measurementId: "G-9Y652NPBJV"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

const signupBtn = document.getElementById("signupBtn");

if (signupBtn) {

    signupBtn.addEventListener("click", () => {

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (name === "" || email === "" || password === "") {
            alert("Please fill all fields");
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {

                alert("Signup Successful");

                window.location.href = "login.html";

            })
            .catch((error) => {

                alert(error.message);

            });

    });

}
const loginBtn = document.getElementById("loginBtn");

if (loginBtn) {

    loginBtn.addEventListener("click", () => {

        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                alert("Login Successful");

                window.location.href = "todo.html";

            })
            .catch((error) => {

                alert(error.message);

            });

    });

}





// let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// displayTask();

// function message() {

//     let input = document.querySelector(".input-box input").value;

//     if (input == "") {
//         return;
//     }

//     tasks.push({
//         text: input,
//         completed: false
//     });

//     localStorage.setItem("tasks", JSON.stringify(tasks));

//     displayTask();

//     document.querySelector(".input-box input").value = "";
// }

// function displayTask() {

//     let output = document.querySelector(".output");

//     output.innerHTML = "";

//     for (let i = 0; i < tasks.length; i++) {

//         output.innerHTML += `
//             <li>

//                 <input 
//                     type="checkbox"
//                     ${tasks[i].completed ? "checked" : ""}
//                     onchange="toggleComplete(${i})"
//                 >

                
//                     ${tasks[i].text}
                

//                 <p style="color:${tasks[i].completed ? 'green' : 'red'};">
//                     ${tasks[i].completed ? "Completed" : "Pending"}
//                 </p>

//                 <i class="ri-delete-bin-line delete" onclick="deleteTask(${i})"></i>

//             </li>
//         `;
//     }
// }

// function toggleComplete(index) {

//     tasks[index].completed = !tasks[index].completed;

//     localStorage.setItem("tasks", JSON.stringify(tasks));

//     displayTask();
// }

// function deleteTask(index) {

//     tasks.splice(index, 1);

//     localStorage.setItem("tasks", JSON.stringify(tasks));

//     displayTask();
// }