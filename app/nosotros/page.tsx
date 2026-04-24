import Link from 'next/link'
import React from 'react'
import Sidebar from '@/components/Sidebar'
import { Metadata } from 'next'

export const metadata : Metadata = { // CO de la pagina
    title : 'Meeti - Inicio'
}

export default function Home(){
    return (
        <>
            <h1>Inicio</h1>
            <Link href="/nosotros">Ir a nosotro</Link>
            <Sidebar/>
        </>
    )
}