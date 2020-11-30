import React from 'react';

const ContactCard = (props) => {
    return (
        <div>
            <h2>{props.contact.name}</h2>
            <p>Phone no: {props.contact.phone} </p>
            <p>Email: {props.contact.email} </p>
        </div>
    )
}

export default ContactCard;