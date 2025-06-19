import React from "react";
import "./ContactItem.css"

const ContactItem = ({ nama, preview, produk, profile }) => {
    return (
        <div id="contact-item-container">
            <div id="contact-profile">
                <img id="profile-image" alt="" src={profile} />
            </div>
            <div id="data-container">
                <p id="data-name">{nama}</p>
                <p id="data-preview">{preview}</p>
                <p id="data-about">{produk}</p>
            </div>
        </div>
    );
}

export default ContactItem