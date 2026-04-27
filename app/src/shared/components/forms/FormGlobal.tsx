import {FormHTMLAttributes} from 'react'
import clsx from 'clsx'

type Props = FormHTMLAttributes<HTMLFormElement>

export default function FormGlobal(props: Props){
    props

    const {className} = props
    return (
        <form {...props} className = {clsx("mt-10 max-w-4xl space-y-5 p-8 bg-white shadow-2xl rounded-xl mx-auto", className)}
        >
            {props.children}
        </form>
    )
}