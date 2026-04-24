
import clsx from "clsx"
/*
Aquí estás creando un tipo llamado Props.
children: es una propiedad especial en React.
React.ReactNode: significa cualquier cosa que React pueda renderizar, por ejemplo:
texto ("Hola")
JSX (<span>Hola</span>)
otros componentes
*/
type Props = {
    children: React.ReactNode
    level?: 1 | 2 | 3 | 4 | 5 | 6
    className?: string
}

/*
Estás creando un componente funcional llamado Heading.
export default: permite importarlo en otros archivos.
{children}: estás desestructurando las props.
: Props: le dices a TypeScript qué tipo de props recibe.
*/
export default function Heading({children, level = 1, className} : Props){

    const Tag: React.ElementType = `h${level}`

    const sizeMap : Record<number, string> = {
        1: 'text-4xl',
        2: 'text-3xl',
        3: 'text-2xl',
        4: 'text-xl',
        5: 'text-lg',
        6: 'text-sm',
    }
    return (
        <Tag className={(clsx("font-black upercase", sizeMap[level], className))}>{children}</Tag>
    )
}