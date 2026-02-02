import type { ElementType } from "react";
import style from "./typography.module.scss"

interface IProps {
    children: React.ReactNode
    variant: 'title' | 'text' | 'subtitle' | 'section-title' | 'text-bold'
    element?: ElementType;
    className?: string;
}

const Typography = ({ children, variant, element: Component = 'span', className }: IProps) => {
    return (
        <Component className={style[variant] + ' ' + className}>
            {children}
        </Component>
    )
}

export default Typography