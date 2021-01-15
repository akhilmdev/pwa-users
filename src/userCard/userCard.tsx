import React from 'react';

interface UserCardInterface {
    avatar: string,
    first_name: string,
    last_name: string,
    email: string
}

function UserCard(props: UserCardInterface) {
    return (
        <div className="user-card">
            <div className="user-card-avatar">
                <img src={props?.avatar} alt="user-avatar" className="user-avatar" />
            </div>
            <div className="user-card-name">
                {props.first_name + ' ' + props.last_name}
            </div>

            <div className="user-card-email">
                {props.email}
            </div>
        </div>
    )
}

export default UserCard;