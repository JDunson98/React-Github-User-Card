import React from 'react';
import './UserCard.css';

const UserCard = props => {

    return (
        <div className="container">
            <img src={props.userImage} alt="avatar" />
            <h3>{props.login}</h3>
            <p>Followers: {props.followers}</p>
        </div>
    )

};

export default UserCard;