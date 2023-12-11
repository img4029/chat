import { getDatabase, ref, onValue} from "firebase/database";
import { app } from "../firebase";
// import { React } from 'react';
import { useState, useMemo } from 'react';

export function ChatMessage() { 

    const [allChat, setAllChat] = useState([]);
    const database = getDatabase();
    const dbChat = ref(database, 'chat/');
    useMemo(() => {
        onValue(dbChat, (data) => {
            let allChatCg = [];
            const chatData = data.val();
            
            for (const key in chatData) {
                // console.log(chatData[key]);
                allChatCg = [...allChatCg, chatData[key]]
            }
            // console.log(allChatCg);
            setAllChat(allChatCg);
        });
    }, [])

    const chatList = allChat.map((chat, index) => {
        return (
            <div key={index}>
                <div>{chat.name}</div>
                <span>{chat.chatting}</span>
            </div>
        ) 
    })
    // console.log(chatList);
    return chatList;
} 