import React, {useState} from 'react'
import '../styles/Register.css'
import { useNavigate} from 'react-router-dom'
import {createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from '../firebase.config'
import {setDoc, doc} from "firebase/firestore"
import {toast} from "react-toastify"
import { db } from '../firebase.config'

function Register() {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [phonenumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')
    const [address, setAddress] = useState('')
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate();

    const signup = async(e) => {
        e.preventDefault()
        setLoading(true)

        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth, 
                email,
                phonenumber, 
                password,
                address
            );
            const user = await userCredential.user;

            // update user
            await updateProfile(user, {
                displayName: username,
              });

            // simpan data user di firestore database
            await setDoc(doc(db, 'users', user.uid ), {
                uid: user.uid,
                displayName: username,
                email,
                phonenumber,
                password,
                address
              })

            setLoading(false)
            toast.success('Akun Berhasil Dibuat')
            navigate('/login')

            }catch (eror){
              setLoading(false)

              if (eror.code === 'auth/email-already-in-use') {
                toast.error('Email sudah digunakan. Gunakan email lain!');
              } else if (eror.code === 'auth/weak-password') {
                toast.error('Password harus memiliki setidaknya 6 karakter!');
              } else {
                toast.error(eror.message);
              }
            };
          };


  return (
    <section className="register-section">
      {
        loading? (<h5>Loading...</h5> 
        ) : (
            <div className="register-container">
            <div className="content-left">
                <form className="register-form" onSubmit={signup} >
                    <h1>REGISTER</h1>
                    <div className="register-input">
                        <h3>YOUR NAME</h3>
                        <input type="text" placeholder='Username' 
                         value={username} onChange={e => setUsername(e.target.value)}/>

                        <input type="text" placeholder='Address' 
                        value={address} onChange={e => setAddress(e.target.value)}/> 

                        <input type="text" placeholder='Phone Number' 
                        value={phonenumber} onChange={e => setPhoneNumber(e.target.value)}/>
         
                        <h3>LOGIN DETAILS</h3>
                        <input type="email" placeholder='Email Address' 
                        value={email} onChange={e => setEmail(e.target.value)}/>

                        <input type="password" placeholder='Password' 
                         value={password} onChange={e => setPassword(e.target.value)}/>

                        <p></p>
                        
                        <button  type="submit" className="auth_btn">REGISTER</button>
                    </div>
                </form>
            </div>
            <div className="content-right">
                <h1>BACK TO LOGIN</h1>
                <button onClick={()=>navigate("/login")}>LOGIN</button>
            </div>
        </div>
        )
      }
    </section>
  )
}

export default Register
