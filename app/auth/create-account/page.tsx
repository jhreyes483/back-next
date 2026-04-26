import RegisterForm from "@/app/src/features/auth/components/RegisterForm";
import Heading from "@/src/shared/components/typography/Heading";
import { generatePageTitle } from "@/src/shared/components/utils/metadata";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: generatePageTitle("Crear cuenta")
}

export default function RegisterPage() {
  return (
    <>
      <Heading level={3}>Crear Cuenta</Heading>
      <RegisterForm></RegisterForm>
      
      <nav className="mt-20 flex justify-between">
          <Link
          href={'/auth/login'}
          className="font-bold"
          >Iniciar Sessión</Link>
          <Link
          href={'/auth/forgot-password'}
          className="font-bold"
          >Olvide mi contraseña</Link>
      </nav>
      
    </>
  )
}