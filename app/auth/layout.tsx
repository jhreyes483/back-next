import Link from "next/link";
import Logo from "../src/shared/components/ui/Logo";


export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex justify-center pt-10">
        <Link href='/' className="w-48">
          <Logo />
        </Link>
      </div>
      <div className="">
        <main className="max-w-7xl py-16 px-5 mx-auto">
        {children}
      </main>
      </div>
    </>
  );
}