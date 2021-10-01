import React from 'react'
import cl from './Profile.module.scss'

interface IProfile {
    children: string
}

export const Profile = ({children}: IProfile) => {
    return (
        <div className = {cl.profile}>
            {children}
        </div>
    )
}
