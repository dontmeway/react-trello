import React from 'react'
import cl from './Contents.module.scss'
export const Create = () => {
    return (
        <div className = {cl.createDropdown}>
            <button>Создать доску</button>
            <button>Создать рабочее пространство</button>
        </div>
    )
}
