import React from 'react';
import cl from './Dropdown.module.scss';
import classNames from 'classnames'
import { DropdownActions } from './utils/types';
import { Workplace } from '../DropdownContents/Workplace';
import { Dashboard } from '../DropdownContents/Dashboard';
import { Favorites } from '../DropdownContents/Favorites';
import { Create } from '../DropdownContents/Create';


interface IProps {
    title: string,
    subtitle: string
    state: boolean,
    dispatch: React.Dispatch<DropdownActions>
    type: any,
    create?: boolean,
    index: number
}

export const Dropdown = ({title, subtitle, state, dispatch, type, create, index}: IProps) => {
   
   
    return (
           <div className = {state ? "dropdownWrapper active" : "dropdownWrapper"}>
                <button
                    onClick = {() => dispatch({type: type, payload: true})}
                    className = {!create ? cl.dropdown : cl.dropdownCreate}>
                    <span>
                        {title}
                    </span>
                    <i className="bi bi-chevron-down"></i>
                </button>
                {state && 
                <div className = {cl.dropdownList}>
                    <div className = {cl.dropdownContent}>
                        <h6>{subtitle}</h6>
                        <i onClick = {() => {
                                dispatch({type: type, payload: false})
                            }}
                            className = "bi bi-x">
                        </i>
                        {index === 0 ? <Workplace title = {title}/> :
                        index === 1 ? <Dashboard title = {subtitle} /> : 
                        index === 2 ? <Favorites /> : <Create />}
                    </div>
                </div>}
           </div>
    )
}
