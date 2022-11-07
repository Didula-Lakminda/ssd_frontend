import React from 'react'
import './user-info.scss'

const UserInfo = ({ user }) => {

    // get user role from local storage
    const userRole = localStorage.getItem('userRole');

    return (
        <div className='user-info'>
            <div className="user-info__img">
                <img src={user.img} alt="" />
            </div>
            <div className="user-info__name">
                <span>{userRole}</span>
            </div>
        </div>
    )
}

export default UserInfo
