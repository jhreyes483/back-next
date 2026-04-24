import Heading from "@/src/shared/components/typography/Heading";
import { generatePageTitle } from "@/src/shared/components/utils/metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: generatePageTitle("Crear cuenta")
}

export default function RegisterPage() {
  return (
    <>
      <Heading>Crear Cuenta</Heading>
    </>
  )
}