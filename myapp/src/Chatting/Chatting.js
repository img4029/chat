// 'use strict';

// //===================================================================================

// const chat = document.querySelector(".chat"),
//     user = document.querySelector(".user"),
//     etc = document.querySelector(".etc"),
//     sendInput = document.querySelector(".sendInput"),
//     sendBox = document.querySelector(".sendBox");
// let myInformation = {
//     userName: "임명건",
//     id:1
// };
// var dbTestRef = database.ref('chat/');


// function chatMake(name,chatting) {
//     chat.insertAdjacentHTML("beforeend", `<div>
//     <div>${name}</div>
//     <span>${chatting}</span>
//     </div>`);

//     
// }

// function userMake() {
//     let div = document.createElement("div");

//     user.appendChild(div);
//     div.innerText = "헤르"
// }
// function enterkey() {
//     if (window.event.keyCode == 13) {
//         // chatMake(sendInput.value);
//         database.ref('chat/').push({ "name": "임명건", "chatting": `${sendInput.value}` });
//         sendInput.value=""
//     }
// }
// sendBox.addEventListener('click', () => {
//     // chatMake(sendInput.value);
//     database.ref('chat/').push({ "name": "임명건", "chatting": `${sendInput.value}` });
//     sendInput.value = ""
// });
// dbTestRef.on('child_added', function (data) {
//     chatMake(data.val().name, data.val().chatting)
//     // console.log(data.val().name);
// });
// // chatMake();
// userMake();

import './Chatting.css';
import React from "react";
import { ChatMessage } from "./ChatMessage";
import { ChatUser } from "./ChatUser";
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { app } from "../firebase";
import { getDatabase, ref, child, set, update, push } from "firebase/database";

function Chatting() {
    const [myChat, setMyChat] = useState("");
    const db = getDatabase();
    const location = useLocation();
    const navigate = useNavigate();
    const userInfo = { ...location.state };

    useEffect(() => {
        const preventGoBack = () => {
            // eslint-disable-next-line no-restricted-globals
            history.go(1);
            console.log('prevent go back!');
        };

        // eslint-disable-next-line no-restricted-globals
        history.pushState(null, '', location.href);
        window.addEventListener('popstate', preventGoBack);
        console.log(userInfo.memberId);
        
        if (!userInfo.memberId) {
            navigate("/")
            return;
        }
        function writeUserData(userId, name) {
            // set(ref(db, 'login/' + userId), {
            //     username: name,
            // });
            const db = getDatabase();
            const postData = {
                userId,
                name
            };
            const updates = {};
            updates['/login/' + userId] = postData;
            return update(ref(db), updates);
        }
        writeUserData(userInfo.memberId, userInfo.memberName);
        window.addEventListener('beforeunload', handleUnload);
        return () => {
            window.removeEventListener('popstate', preventGoBack);
            window.removeEventListener('beforeunload', handleUnload);
        }
    }, [userInfo.memberId, userInfo.memberName]);
    const handleUnload = (e) => {
        e.preventDefault();
        console.log('hey')
        // alert("HEY");
    }
    const setChat = event => {
        setMyChat(event.target.value);
        // console.log(event.target.value);
    }

    const handleOnKeyPress = e => {
        if (e.key === 'Enter') {
            // Enter 입력이 되면 클릭 이벤트 실행
            // chatSend(myChat,userInfo.memberName);
            chatSend(myChat, userInfo.memberName);
            setMyChat("");
        }
    };
    function onClickChat() {
        chatSend(myChat, userInfo.memberName);
        setMyChat("");
    }
    function chatSend(chatting, name) {
        const db = getDatabase();
        const postData = {
            chatting,
            name
        };
        const newPostKey = push(child(ref(db), 'chat')).key;
        const updates = {};
        updates['/chat/' + newPostKey] = postData;
        return update(ref(db), updates);
    }

    // function chatSend(chatting ,name) {
    //     set(ref(db, 'chat/'), {
    //         chatting,
    //         name
    //     });
    // }
    // console.log(userInfo.memberName);
    
    return (
        <main>
            <div className="chatMain">
                <div className="chat">
                    <ChatMessage />
                    <div></div>
                </div>
                <div className="etc">
                    <div>
                        <input
                            className="sendInput"
                            onChange={setChat}
                            onKeyPress={handleOnKeyPress}
                            value={myChat}
                            type="text" />
                        <button
                            onClick={onClickChat}
                            className="sendBox"
                        >전송</button>
                        <button>레디</button>
                    </div>
                    <ChatUser />
                </div>
                <div>

                </div>
            </div>
        </main>
    );
}

export default Chatting;