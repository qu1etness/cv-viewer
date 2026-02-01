import type { ComponentProps } from "react"
import style from "./scroll-section.module.scss"

const ScrollSection = ({ children, ...props }: ComponentProps<'div'>) => {
    return (
        <div className={style['scroll-section']} {...props}>
            {children}
        </div>
    )
}

export default ScrollSection