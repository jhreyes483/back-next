import clsx from "clsx"
import { InputHTMLAttributes } from "react"
type Props = InputHTMLAttributes<HTMLInputElement>
export default function FormInput(props: Props){

    const { className } = props
    return (
        <input 
        {...props} 
        className = {clsx("mt-1 space-y-2 p-5 rounded-xl w-full", className)}
        >
        </input>
    )
}
