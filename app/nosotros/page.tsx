import Link from 'next/link'

import Sidebar from '@/src/shared/components/Sidebar'
import { Metadata } from 'next'

export const metadata : Metadata = { // CO de la pagina "solo funciona en los server compones"
    title : 'Meeti - Inicio'
}

export default function HomeNosotro(){
    return (
        <>
            <h1>Inicio</h1>
            <Link href="/nosotros">Ir a nosotro</Link>
            <Sidebar/>
        </>
    )
}