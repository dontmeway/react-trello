import React from 'react';
import cl from './Dropdown.module.scss';


interface IProps {
    children: string,

}

export const Dropdown = ({children}: IProps) => {
    return (
        <button 
            className = {cl.dropdown}>
            <span>
                {children}
            </span>
            <i className="bi bi-chevron-down"></i>
        </button>
    )
}
