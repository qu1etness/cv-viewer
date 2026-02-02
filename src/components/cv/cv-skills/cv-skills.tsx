import style from "./cv-skills.module.scss"
import type { ISkills } from "@/interfaces/cv-interface"
import CVContainer from "../shared/cv-block/cv-container"
import Typography from "@/components/ui/typography/typography"

const CVSkills = ({ skills }: { skills: ISkills }) => {
    return (
        <CVContainer title={skills.title}>
            {skills.sections.map((section, index) => (
                <div key={index} className={style['cv-skills']}>
                    <div className={style['cv-skills__option']}>
                        <Typography variant="text" className={style['cv-skills__option__text']}>{section.option}</Typography>
                    </div>
                    <div className={style['cv-skills__content']}>
                        <Typography variant="text" className={style['cv-skills__content__text']}>{section.skills.join(', ')}</Typography>
                    </div>
                </div>
            ))}
        </CVContainer>
    )
}

export default CVSkills