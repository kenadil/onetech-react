import React from "react";

const Phonebook = props => {
    return (
        <div className="row">
            <div class="round-container"/>
            <div class="contact-holder">
                <span className="name-container">{props.value.name}</span>
                <span className="phone-container">+{props.value.phone}</span>
            </div>
        </div>
    )
}

export default Phonebook;