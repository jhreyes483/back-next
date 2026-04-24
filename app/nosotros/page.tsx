import Link from 'next/link'
import React from 'react'
import Sidebar from '@/components/Sidebar'

export default function Home(){
    return (
        <>
            <h1>Inicio</h1>
            <Sidebar/>
            <Link href="/nosotros">Ir a Nosotros</Link>
        </>
    )
}