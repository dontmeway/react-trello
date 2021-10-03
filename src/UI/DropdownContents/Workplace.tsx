import React from 'react'
import cl from './Contents.module.scss'
interface IProps {
    title: string
}



export const Workplace = ({title}: IProps) => {
    return (
        <div className = {cl.workPlace}>
            <span>{title[0].toUpperCase()}</span>
            {title}
        </div>
    )
}
