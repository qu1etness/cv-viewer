import Typography from "@/components/ui/typography/typography"
import style from "./cv-block.module.scss"
import type { ISection } from "@/interfaces/cv-interface"

interface IProps {
    section: ISection
}

const CVBlock = ({ section }: IProps) => {
    const { duration, title, location, position, responsibilities } = section

    return (
        <div className={style['cv-block']}>
            <div className={style['cv-block__duration']}>
                <Typography variant="text" className={style['cv-block__duration__text']}>{duration}</Typography>
            </div>
            <div className={style['cv-block__content']}>
                <div className={style['cv-block__content__header']}>
                    <Typography variant="text-bold">{title}</Typography>
                    <Typography variant="text" className={style['cv-block__content__header__location']}>{location}</Typography>
                </div>
                <div className={style['cv-block__content__body']}>
                    <Typography variant="text" className={style['cv-block__content__body__position']}>{position}</Typography>
                    <ul className={style['cv-block__content__body__responsobilities']}>
                        {responsibilities.map((responsibility, index) => (
                            <li key={index} className={style['cv-block__content__body__responsobilities__item']}>
                                <Typography variant="text">{responsibility}</Typography>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CVBlock