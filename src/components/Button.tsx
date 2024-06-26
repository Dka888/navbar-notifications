import React from "react"
import classNames from "classnames"

interface ButtonProps {
    title: string,
    style: string,
    handleClick: () => void,
}

export const Button:React.FC<ButtonProps> = ({title, style, handleClick}) => {
    return (
        <button 
            className={classNames(`rounded-3xl px-6 py-2 text-sm ${style}`)}
            onClick={handleClick}
        > {title}
        </button>
    )
}