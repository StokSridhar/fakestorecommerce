import { ChangeEvent, MouseEvent } from "react"

export interface InputProps {
    label: string
    name: string
    type: 'text' | 'number' | 'password'
    placeholder?: 'string' | 'number'
    value?: 'string' | 'number'
    error: boolean
    onchange: (e: ChangeEvent<HTMLInputElement>) => void
}


export interface ButtonProps {
    type: 'submit' | 'reset'
    name: string
    onClick: (e: MouseEvent<HTMLButtonElement>) => void
    disabled?: boolean
}

export interface CheckboxProps {
    label: string
    disabled?: boolean
    checked: boolean
    onchange?: (e: ChangeEvent<HTMLInputElement>) => void
}