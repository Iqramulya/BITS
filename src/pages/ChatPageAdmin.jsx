import React, { useState, useEffect } from 'react'
import { HiPaperAirplane } from "react-icons/hi2"
import Header from '../components/Header/Header'
import ContactItem from '../components/Chat/ContactItem'
import ChatItem from '../components/Chat/ChatItem'
import { HiMagnifyingGlass, HiBars3 } from "react-icons/hi2";
import './ChatPageAdmin.css'
import ProfileImage from '../components/Chat/DefaultProfile/DefaultProfilePicture.png'

// Database
import { db } from '../firebase.config'
import { collection, addDoc, getDocs } from 'firebase/firestore'
import { getAuth, signInAnonymously } from 'firebase/auth'

function useWindowWidth() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowWidth;
}

// Admin Chat Page
const ChatPageAdmin = () => {
    const windowWidth = useWindowWidth();
    const [isContactOpen, setIsContactOpen] = useState(false)
    useEffect(() => {
        if (windowWidth < 550) {
            setIsContactOpen(false);
        }
    }, [windowWidth]);

    const [userProfilePict, setUserProfilePict] = useState(ProfileImage)
    const [currentUserProfile, setCurrentUserProfile] = useState(userProfilePict)

    const [currentUsername, setCurrentUsername] = useState("Rodey")
    const [messages, setMessages] = useState([])
    const [users, setUsers] = useState([])

    const chatCollectionRef = collection(db, `chatstorage/chats/chats`)
    const messagesCollectionRef = collection(db, `chatstorage/messages/${currentUsername}`)
    const usersCollectionRef = collection(db, 'users')

    const [messageValue, setMessageValue] = useState("")
    const createMessage = async (messageValue) => {
        try {
            let time = new Date()
            if (messageValue === "") {
                null
            } else {
                await addDoc(messagesCollectionRef, { isByAdmin: true, text: messageValue, time: time })
            }
        } catch {
            console.error("error")
        }
    }

    useEffect(() => {
        const getMessages = async () => {
            const messageData = await getDocs(messagesCollectionRef)
            setMessages(messageData.docs.map((doc) => ({ ...doc.data() })))
        }
        const getUsers = async () => {
            const userData = await getDocs(usersCollectionRef)
            setUsers(userData.docs.map((doc) => ({ ...doc.data })))
            console.log(userData)
        }

        getMessages()
        getUsers()
    }, [[], messages])

    return (
        <>
            <div style={{ position: 'fixed', top: '0px', zIndex: '10' }}>
                <Header />
            </div>
            <div className='chatadmin-background'>
                <div id='menu-slide-backdrop' onClick={() => { setIsContactOpen(false) }}></div>
                <div className={isContactOpen ? "chatadmin-contact-list-visible" : "chatadmin-contact-list"}>
                    <div className='col-searchbar-container'>
                        <div style={{ borderBottom: '1px solid rgb(0, 0, 0, 0.25)', width: '92%', position: 'absolute', top: '78px' }}></div>
                        <ChatSearchBar />
                    </div>
                    <div className='col-contacts-container'>
                        <div id='top-trans-cover-contacts'></div>
                        <div className='contact-box'>
                            <div className='contact-list'>
                                {users.map((user) => {
                                    return (
                                        <ContactItem nama={true ? "Rodey" : user.displayName} preview={'Untitled'} produk={'Untitled'} profile={userProfilePict} />
                                    )
                                })}
                            </div>
                        </div>
                        <div id='bot-trans-cover-contacts'></div>
                    </div>
                </div>
                <div className='chatadmin-chat-list'>
                    <div className='chl-profile-container'>
                        <img className='profile-image' src={currentUserProfile} alt="" />
                        <h3 style={{ fontWeight: '500' }}>{currentUsername}</h3>
                        <div id='menu-button-container' onClick={() => { setIsContactOpen(!isContactOpen) }}>
                            <HiBars3 fontSize={42} id='menu-button' />
                        </div>
                    </div>
                    <div className='chl-messages-container'>
                        <div className='chl-messages'>
                            <div id='top-trans-cover-chat'></div>
                            <div className='message-box'>
                                <div className='message-list'>
                                    <ChatItem isByAdmin={false} text={'Halo, selamat datang di BITS!'} time={null} />
                                    {(messages.sort((a, b) => a.time - b.time)).map((message) => {
                                        let date = message.time.toDate()
                                        let hours = date.getHours()
                                        let minutes = date.getMinutes()
                                        return (
                                            <ChatItem isByAdmin={!message.isByAdmin} text={message.text} time={`${hours}:${minutes}`} />
                                        )
                                    })}
                                </div>
                            </div>
                            <div id='bot-trans-cover-chat'></div>
                        </div>
                        <div className='message-bar-box'>
                            <div className='message-bar-container'>
                                <input
                                    value={messageValue}
                                    id='input-message-bar'
                                    type="text"
                                    placeholder="Ketik pesan anda disini..."
                                    onChange={(e) => { setMessageValue(e.target.value) }}
                                />
                                <div style={{ position: 'absolute', right: '28px', marginTop: '4px' }}>
                                    <HiPaperAirplane fontSize={24} id='send-button' onClick={() => { createMessage(messageValue); setMessageValue("") }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChatPageAdmin

// Search Bar Chat
const ChatSearchBar = () => {
    return (
        <div className='search-bar-container'>
            <div className='search-bar-box'>
                <div style={{ position: 'relative', paddingLeft: '8px', right: '8px', display: 'flex', alignItems: 'center', backgroundColor: '#dddddd', height: '100%', width: '48px', borderTopLeftRadius: '8px', borderBottomLeftRadius: '8px' }}>
                    <HiMagnifyingGlass fontSize={24} />
                </div>
                <input
                    id='input-search-bar'
                    type="text"
                    placeholder="Cari nama user..."
                />
            </div>
        </div>
    )
}
