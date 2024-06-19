import { FC } from "react";
import { ButtonProps } from "../utils";

const Buttons: FC<ButtonProps> = ({
type,
name,
onClick,
disabled,
}) => {
    const ButtonStyle = 'flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
    return (
        <>
         <button 
         type={type} 
         className={ButtonStyle} 
         onClick={onClick} 
         disabled={disabled}>{name}</button> 
        </> 
        
    )
}

export default Buttons