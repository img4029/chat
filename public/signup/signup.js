'use strict';

const signUp = document.querySelector(".signUp"),
    input = document.querySelectorAll("input");

console.log(input[0].value);

signUp.children[5].addEventListener('click', () => {
    // chatMake(sendInput.value);
    database.ref('user/').push({
        "memberName": "임명건",
        "memberId": `${sendInput.value}`,
        "memberPassword": ""
    });
    sendInput.value = ""
});