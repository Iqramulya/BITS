import React from 'react'
import './ChangePassword.css'
import { useNavigate } from 'react-router-dom'

function ChangePassword() {
    const navigate = useNavigate();
  return (
    <section className="change-password-section">
            <div className="change-password-wrapper">
                <div className="change-password-title">
                    <h1>CHANGE PASSWORD</h1>
                    <div className="back-button">
                        <button onClick={()=>navigate("/profile")}>
                            <i class='bx bx-left-arrow-alt'></i>
                            <p>Back</p>
                        </button>
                    </div>
                </div>
                <div className="change-password-input">
                    <div className="current-password">
                        <h3>CURRENT PASSWORD <span>*</span></h3>
                        <input type="text" />
                    </div>
                    <div className="new-password">
                        <h3>NEW PASSWORD <span>*</span></h3>
                        <input type="text" />
                    </div>
                    <div className="confirm-password">
                        <h3>CONFIRM PASSWORD <span>*</span></h3>
                        <input type="text" />
                    </div>
                </div>
                <div className="change-password-button-wrapper">
                    <button className='save-button' onClick={()=>navigate("/profile")}>Save</button>
                </div>
            </div>
        </section>
  )
}

export default ChangePassword
