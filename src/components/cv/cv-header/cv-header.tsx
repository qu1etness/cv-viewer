import type { ComponentProps } from "react"
import style from "./cv-header.module.scss"
import type { IPersonalInfo } from "@/interfaces/cv-interface"
import Typography from "@/components/ui/typography/typography"


interface ICVHeaderProps extends ComponentProps<'div'> {
    personalInfo: IPersonalInfo
}

const CVHeader = ({ personalInfo, ...props }: ICVHeaderProps) => {
    const { name, location, email, phone, linkedin } = personalInfo;
    const information = [location, email, phone, linkedin].filter(Boolean)

    return (
        <div className={style['cv-header']} {...props}>
            <Typography variant="title" element="h2">{name}</Typography>
            <address className={style['cv-header__information']}>
                {information.map((info, index) => (
                    <Typography variant="text" key={index}>{info} {index !== information.length - 1 && ' | '} </Typography>
                ))}
            </address>
        </div>
    )
}

export default CVHeader