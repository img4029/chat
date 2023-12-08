'use strict';

//===================================================================================

const chat = document.querySelector(".chat"),
    user = document.querySelector(".user"),
    etc = document.querySelector(".etc"),
    sendInput = document.querySelector(".sendInput"),
    sendBox = document.querySelector(".sendBox");
let myInformation = {
    userName: "임명건",
    id:1
};
var dbTestRef = database.ref('chat/');


function chatMake(name,chatting) {
    chat.insertAdjacentHTML("beforeend", `<div>
    <div>${name}</div>
    <span>${chatting}</span>
    </div>`);
    
    chat.scrollTop = chat.scrollHeight;
}

function userMake() {
    let div = document.createElement("div");

    user.appendChild(div);
    div.innerText = "헤르"
}
function enterkey() {
    if (window.event.keyCode == 13) {
        // chatMake(sendInput.value);
        database.ref('chat/').push({ "name": "임명건", "chatting": `${sendInput.value}` });
        sendInput.value=""
    }
}
sendBox.addEventListener('click', () => {
    // chatMake(sendInput.value);
    database.ref('chat/').push({ "name": "임명건", "chatting": `${sendInput.value}` });
    sendInput.value = ""
});
dbTestRef.on('child_added', function (data) {
    chatMake(data.val().name, data.val().chatting)
    // console.log(data.val().name);
});
// chatMake();
userMake();
