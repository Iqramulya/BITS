import './ChatPageUser.css'
import React, { useState, useEffect } from 'react'
import { HiPaperAirplane } from "react-icons/hi2"
import Header from '../components/Header/Header'
import ChatItem from '../components/Chat/ChatItem'
// Database
import { db } from '../firebase.config'
import { collection, addDoc, getDocs } from 'firebase/firestore'
import { ref } from 'firebase/storage'


// User Chat Page
const ChatPageUser = () => {
    const [currentUsername, setCurrentUsername] = useState("Raihky")
    const [messages, setMessages] = useState([])

    const messagesCollectionRef = collection(db, `chatstorage/messages/${currentUsername}`)

    const [messageValue, setMessageValue] = useState("")
    const createMessage = async (messageValue) => {
        let time = new Date()
        if (messageValue === "") {
            null
        } else {
            await addDoc(messagesCollectionRef, { isByAdmin: false, text: messageValue, time: time })
        }
    }

    useEffect(() => {
        const getMessages = async () => {
            const messageData = await getDocs(messagesCollectionRef)
            console.log(messageData)
            setMessages(messageData.docs.map((doc) => ({ ...doc.data() })))
        }
        getMessages()
    }, [[], messages])

    return (
        <>
            <div style={{ position: 'fixed', top: '0px', zIndex: '10' }}>
                <Header />
            </div>
            <div className='user-chat-page'>
                <div className='user-chat-container'>
                    <div className='user-chat-transparency-top'></div>
                    <div className='user-chat-cover-top'></div>
                    <div className='user-chat-transparency-bot'></div>
                    <div className='user-chat-list'>
                        <ChatItem isByAdmin={true} text={'Halo, selamat datang di BITS!'} time={null} />
                        {(messages.sort((a, b) => a.time - b.time)).map((message) => {
                            let date = message.time.toDate()
                            let hours = date.getHours()
                            let minutes = date.getMinutes()
                            return (
                                <ChatItem isByAdmin={message.isByAdmin} text={message.text} time={`${hours}:${minutes}`} />
                            )
                        })}
                    </div>
                </div>
                <div className='user-message-bar-box'>
                    <div className='user-message-bar-container'>
                        <input
                            value={messageValue}
                            id='user-input-message-bar'
                            type="text"
                            placeholder="Ketik pesan anda disini..."
                            onChange={(e) => { setMessageValue(e.target.value) }}
                        />
                        <div style={{ position: 'absolute', right: '28px', marginTop: '4px' }} >
                            <HiPaperAirplane fontSize={24} id='user-send-button' onClick={() => { createMessage(messageValue); setMessageValue("") }} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChatPageUser