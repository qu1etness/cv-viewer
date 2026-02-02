import type { ComponentProps } from "react"
import style from "./cv-container.module.scss"
import Typography from "@/components/ui/typography/typography"


interface ICVContainer extends ComponentProps<"div"> {
    title: string
    children: React.ReactNode
}

const CVContainer = ({ title, children, className, ...props }: ICVContainer) => {

    return (
        <div {...props} className={style.container + ' ' + className}>
            <Typography variant="subtitle" element="h3">{title}</Typography>
            <div className={style['container__line']} />
            {children}
        </div>
    )
}

export default CVContainer