import React, {useState} from 'react'
import '../styles/Login.css'
import {useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile} from 'firebase/auth'
import { auth } from '../firebase.config'
import {setDoc, doc} from "firebase/firestore"
import {toast} from 'react-toastify'
import { db } from '../firebase.config'
import GoogleButton from "react-google-button";

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    
    const signIn = async (e) =>{

        e.preventDefault()
        setLoading(true)

        try{

            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            const user = userCredential.user

            console.log(user)
            setLoading(false)
            toast.success('Berhasil Login')
            navigate('/shipping')

        } catch (error) {
            setLoading(false)
            toast.error('Email atau Password Salah!')
        }
    }

    const handleGoogleSignIn = async (e) => {
        e.preventDefault();
    
        try {
            const googleAuthProvider = new GoogleAuthProvider();

            const userCredential = await signInWithPopup(auth, googleAuthProvider);
            const user = userCredential.user

            // update user
            await updateProfile(user, {
                displayName: user.email,
            });

            // simpan data user di firestore database
            await setDoc(doc(db, 'users', user.uid), {
                uid: user.uid,
                email: user.email,
            })
            
            console.log(user)
            setLoading(false)
            toast.success('Berhasil Login')
            navigate('/shipping');
        } catch (error) {
            setLoading(false)
            toast.error(error.message);
        }
      };

    return (
        <section className="login-section">
           {
            loading? (
                <h5>Loading...</h5> 
               ):(
                <div className="login-container">
                    <div className="content-left">
                        <form onSubmit={signIn} className="login-form">
                            <h1>LOGIN</h1>
                            <div className="login-input">
                                <input type="email" placeholder='Email Address'
                                value={email} onChange={e => setEmail(e.target.value)}/>
    
                                <input type="password" placeholder='Password' 
                                value={password} onChange={e => setPassword(e.target.value)}/>
                                
                                <button type="submit" className="auth_btn">LOGIN</button>
                            </div>
    
                            <p className='option-label'>OR</p>
                            <div className="login-google">
                                <GoogleButton
                                 label='Login dengan Google'
                                //  className="g-btn"
                                 type="light"
                                 onClick={handleGoogleSignIn}
                                />
                            </div>
                        </form>
                    </div>
                    <div className="content-right">
                        <h1>CREATE AN ACCOUNT</h1>
                        <p>It's easy. Enter your email address, fill in the form on the next page and enjoy the benefits of getting an account.</p>
                        <button onClick={()=>navigate("/register")}>REGISTER</button>
                    </div>
                </div>
               )
           }
        </section>
    )
}

export default Login
