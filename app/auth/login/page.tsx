import Heading from "@/app/src/shared/components/typography/Heading";
import LoginForm from "@/src/features/auth/components/LoginForm";

import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Iniciar Sesión"
}

export default function LoginPage() {
  return (
    <>
      <Heading level={3}>Iniciar sesion</Heading>
      <LoginForm/>

      <nav className="mt-20 flex justify-between">
          <Link
          href={'/auth/create-account'}
          className="font-bold"
          >Crear cuenta</Link>
          <Link
          href={'/auth/forgot-password'}
          className="font-bold"
          >Olvide mi contraseña</Link>
      </nav>
    </>
  )
}