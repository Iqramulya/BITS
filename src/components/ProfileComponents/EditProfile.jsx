import React from 'react'
import './EditProfile.css'
import { useNavigate } from 'react-router-dom'

function EditProfile() {
    const navigate = useNavigate();
  return (
    <section className="edit-profile-section">
        <div className="edit-profile-wrapper">
            <div className="edit-profile-title">
                <h1>EDIT PROFILE</h1>
                <div className="back-button">
                    <button onClick={()=>navigate("/profile")}>
                        <i class='bx bx-left-arrow-alt'></i>
                        <p>Back</p>
                    </button>
                </div>
            </div>
            <div className="edit-profile-input">
                <div className="edit-username">
                    <h3>USERNAME <span>*</span></h3>
                    <input type="text" />
                </div>
                <div className="edit-phone-number">
                    <h3>PHONE NUMBER <span>*</span></h3>
                    <input type="text" />
                </div>
                <div className="edit-email-address">
                    <h3>EMAIL ADDRESS <span>*</span></h3>
                    <input type="text" />
                </div>
                <div className="edit-address">
                    <h3>ADDRESS <span>*</span></h3>
                    <input type="text" />
                </div>
            </div>
            <div className="edit-profile-button-wrapper">
                <button className='save-button' onClick={()=>navigate("/profile")}>Save</button>
            </div>
        </div>
    </section>
  )
}

export default EditProfile
