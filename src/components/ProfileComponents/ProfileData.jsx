import React from 'react'
import './ProfileData.css'
import { useNavigate } from 'react-router-dom'

function ProfileData() {
    const navigate = useNavigate();
  return (
    <div className="profile-wrapper">
        <h1>PROFILE</h1>
        <div className="profile-data-wrapper">
            <div className="profile-data-col1">
                <div className="username">
                    <h3>USERNAME</h3>
                    <h3 className='profile-data'>rhayyan zhakhi</h3>
                </div>
                <div className="phone-number">
                    <h3>PHONE NUMBER</h3>
                    <h3 className='profile-data'>085395257703</h3>
                </div>
                <div className="email-address">
                    <h3>EMAIL ADDRESS</h3>
                    <h3 className='profile-data'>rhayyanzhakhiii@gmail.com</h3>
                </div>
                {/* <div className="post-code">
                    <h3>POST CODE</h3>
                    <h3 className='profile-data'>90243</h3>
                </div> */}
            </div>
            <div className="profile-data-col2">
                <div className="address">
                    <h3>ADDRESS</h3>
                    <h3 className='profile-data'>BTN. Bulurokeng Permai Blok C2 No 4, South Sulawesi, Makassar City</h3>
                </div>
                {/* <div className="date-of-birth">
                    <h3>DATE OF BIRTH</h3>
                    <h3 className='profile-data'>23/12/2002</h3>
                </div> */}
            </div>
        </div>
        <div className="profile-button-wrapper">
            <button className='edit-profile-button' onClick={()=>navigate("/edit-profile")}>Edit Profile</button>
            <button className='change-password-button' onClick={()=>navigate("/change-password")}>Change Password</button>
        </div>
    </div>
  )
}

export default ProfileData
