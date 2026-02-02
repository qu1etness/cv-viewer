import Typography from "@/components/ui/typography/typography"
import CVContainer from "../shared/cv-block/cv-container"
import style from "./cv-awards.module.scss"
import type { IAwards } from "@/interfaces/cv-interface"

const CVawards = ({ awards }: { awards: IAwards }) => {
    return (
        <CVContainer title={awards.title} className={style['cv-awards-container']}>
            {awards.sections.map((section, index) => (
                <div key={index} className={style['cv-awards']}>
                    <div className={style['cv-awards__duration']}>
                        <Typography variant="text" className={style['cv-awards__duration__text']}>{section.duration}</Typography>
                    </div>
                    <div className={style['cv-awards__content']}>
                        <Typography variant="text">{section.description}</Typography>
                    </div>
                </div>
            ))}
        </CVContainer>
    )
}

export default CVawards
