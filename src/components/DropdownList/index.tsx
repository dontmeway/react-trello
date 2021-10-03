import React from 'react'
import { Dropdown } from '../../UI/Dropdown'
import { DropdownActionTypes } from '../../UI/Dropdown/utils/types'
const dropdownItems = [
    {
        title: "Рабочие пространствa",
        subtitle: "Ваши рабочие места",
        type: DropdownActionTypes.FIRST,
        number: "first"
    },
    {
        title: "Недавние",
        subtitle: "Часто посещаемые доски",
        type: DropdownActionTypes.SECOND,
        number: "second"
    }, 
    {
        title: "В избранном",
        subtitle: "Избранные",
        type: DropdownActionTypes.THIRD,
        number: "third"
    },
    {
        title: "Создать",
        subtitle: "Создать",
        type: DropdownActionTypes.FOURTH,
        number: "fourth"
    }
]




export const DropdownList = ({state, dispatch}: any) => {
    const dropdownRef = React.useRef<HTMLDivElement | null>(null)


    const handleCheck = (e: any) => {
        if(!e.path.includes(dropdownRef.current)) {
            dispatch({type: DropdownActionTypes.CLOSE})
        }
        
    }
    React.useEffect(() => {
        document.addEventListener("click", handleCheck)
        return () => {
            document.removeEventListener("click", handleCheck)
        }
    }, [])

    return (
        <div ref = {dropdownRef} className = "dropdownItems">
            {dropdownItems.map((item, index) => 
            <Dropdown
                key = {index}
                index = {index}
                create = {index === 3 ? true : false}
                dispatch = {dispatch} 
                state = {state[item.number]} 
                {...item}/>)}
        </div>
    )
}
