import { getDatabase, ref, onValue, set } from "firebase/database";
import { app } from "../firebase";
// import { React } from 'react';
import { useState, useEffect, useMemo } from 'react';

export function ChatUser() {

    const [allUser, setAllUser] = useState([]);
    const database = getDatabase();
    const dbUser = ref(database, 'login/');

    useMemo(() => {
        onValue(dbUser, (data) => {
            let allChatCg = [];
            const chatData = data.val();

            for (const key in chatData) {
                // console.log(chatData[key]);
                allChatCg = [...allChatCg, chatData[key]]
            }
            // console.log(allChatCg);
            setAllUser(allChatCg);
        });
    }, [])

    const userList = allUser.map((user, index) => {
        return (
            <div key={index}>{user.name}</div>
        )
    })
    console.log(userList);
    return (
        <div className="user">{userList}</div>
    );
} 