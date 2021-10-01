import React from 'react'
import logo from '../../static/images/Trello_logo.png'
import cl from './Header.module.scss'
import { Dropdown } from '../../UI/Dropdown'
import { Input } from '../../UI/Input'
import { Profile } from '../../UI/Profile'
export const Header = () => {
    console.log(cl);
    
    return (
        <div className = {cl.header}>
            <div className = {cl.headerNav}>
                <div className = {cl.headerNav__left}>
                    <img width = {80} src = {logo} alt = "logo"/>
                    <Dropdown>
                        Рабочие пространство
                    </Dropdown>
                    <Dropdown>
                        Недавние
                    </Dropdown>
                    <Dropdown>
                        В избранном
                    </Dropdown>
                    <button className = {cl.headerNav__left__createBtn}>
                        Создать
                    </button>
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
