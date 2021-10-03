import React from 'react'
import logo from '../../static/images/Trello_logo.png'
import cl from './Header.module.scss'
import { Input } from '../../UI/Input'
import { Profile } from '../../UI/Profile'
import { dropdownReducer, initialState } from '../../UI/Dropdown/utils/DropdownReducer'
import { DropdownList } from '../DropdownList'








export const Header = () => {
    const [state, dispatch] = React.useReducer(dropdownReducer, initialState)

    return (
        <div className = {cl.header}>
            <div className = {cl.headerNav}>
                <div className = {cl.headerNav__left}>
                    <img width = {80} src = {logo} alt = "logo"/>
                    <DropdownList dispatch = {dispatch} state = {state}/>
                    {/* <button className = {cl.headerNav__left__createBtn}>
                        Создать
                    </button> */}
                </div>
                <div className = {cl.headerNav__right}>
                    <Input />
                    <Profile>
                        BB
                    </Profile>
                </div>
            </div>
        </div>
    )
}
