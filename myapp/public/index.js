// 'use strict';
// import { database } from "./modules/firebaseData";
// import { getDatabase } from "firebase/database";

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// import { getDatabase } from "firebase/database";
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    //...
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);



// const login = document.querySelector(".login");
// const database = getDatabase();
// // var dbUser = database.ref('user/');
// console.log(database);

// login.children[2].addEventListener('click', () => {    
//     // dbUser.on('child_added', function (data) {
//     //     const input = document.querySelectorAll("input");
//     //     if (input[0].value === data.val().memberId && input[1].value === data.val().memberPassword) {
//     //         // userLogin = {
//     //         //     memberId: `${data.val().memberId}`,
//     //         //     memberName: `${data.val().memberName}`
//     //         // };
//     //         window.location.href = "./chatting/chatting.html";
//     //     }
//     // });
// });

// login.children[3].addEventListener('click', () => {
//     window.open("./signup/signup.html", "회원가입", " height= 741px, width= 501px, location = no");
// });

