import classNames from 'classnames'
import React from 'react'
import cl from './Input.module.scss'

export const Input = () => {
    const [query, setQuery] = React.useState<string>("")
    const [isHidden, setIsHidden] = React.useState<boolean>(false)
    const inputRef = React.useRef<HTMLInputElement | null>(null)
    
    const handleCheck = (e: any): void => {
        if (!e.path.includes(inputRef.current)) {
            setIsHidden(false)
        }
    }
    console.log(isHidden);
    
    React.useEffect(() => {
        window.addEventListener("click", handleCheck)
        return () => {
            window.removeEventListener("click", handleCheck)
        }
    }, [])
    
    return (
        <div className = {cl.input}>
            <i 
                className = {classNames("bi bi-search", cl.biSearch, {
                    hidden: isHidden || query !== '',
                })}>
            </i>
            <input
                ref = {inputRef}
                onClick = {() => setIsHidden(true)}
                value = {query}
                onChange = {(e) => setQuery(e.target.value)}/>
            <i 
                onClick = {() => setQuery("")}
                className = {classNames("bi bi-x", cl.biX, {
                    hidden: !isHidden,
                })}>
            </i>
        </div>
    )
}
