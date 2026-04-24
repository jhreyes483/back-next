import Header from "../src/shared/components/ui/Header";
/*
RootLayout → componente React
children → TODO lo que se renderiza dentro (otras páginas/componentes)
React.ReactNode → puede ser cualquier JSX (divs, textos, componentes, etc.)
Readonly → evita que modifiques children (TypeScript safety)
*/
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header/>
    {children}
    </>
  );
}