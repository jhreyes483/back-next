import Heading from "@/src/shared/components/typography/Heading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Iniciar Sesión"
}

export default function LoginPage() {
  return (
    <>
      <Heading level={3}>Iniciar sesion</Heading>
    </>
  )
}