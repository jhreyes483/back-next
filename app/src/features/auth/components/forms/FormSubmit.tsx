import clsx from "clsx"
import { InputHTMLAttributes } from "react"
type Props = InputHTMLAttributes<HTMLInputElement>
export default function FormSubmit(props: Props){

    const { className } = props
    return (
        <input type="submit" 
        {...props} 
        className = {clsx("bg-pink-600 w-full p-2 uppercase font-black text-white cursor-pointer", className)}
        >
        </input>
    )
}
