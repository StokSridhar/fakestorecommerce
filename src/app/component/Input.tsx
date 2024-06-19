import { FC } from 'react'
import {InputProps} from '../utils/index'

const Input:FC<InputProps> = ({
    label,
    type,
    name,
    onchange,
    error
}) => {
    const Inputcard = 'block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-300 sm:text-sm sm:leading-6'
    return (
<>
<div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                {label}
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name={name}
                  type={type}
                  autoComplete='off'
                  required
                  className={Inputcard}
                  onChange={onchange}
                />
              </div>
              {error && 
              <p className="inline-flex w-full text-sm font-semibold text-red-600">Input filed can't be empty!</p>}
            </div>
</>
    )
}
    
export default Input
