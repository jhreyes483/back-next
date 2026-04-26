
import ForgotPasswordForm from '@/app/src/features/auth/components/ForgotPasswordForm'
import Heading from '@/src/shared/components/typography/Heading'
import { generatePageTitle } from '@/src/shared/components/utils/metadata'
import { Metadata } from 'next'

export const metadata : Metadata = {
    title : generatePageTitle('Reestablecer Password')
}

export default function ForgotPasswordPage(){
    return (
        <>
            <Heading>Recupera tu acceso a Meeti</Heading>
            <ForgotPasswordForm />
        </>
       
    )
}