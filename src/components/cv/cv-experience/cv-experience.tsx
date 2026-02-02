import CVBlock from "../cv-block/cv-block"
import CVContainer from "../shared/cv-block/cv-container"
import style from "./cv-experience.module.scss"
import type { IContainer } from "@/interfaces/cv-interface"

const CVExperience = ({ experience }: { experience: IContainer[] }) => {

    return (
        <>
            {experience.map((item) => (
                <CVContainer title={item.title} key={item.title}>
                    <div className={style['cv-experience__blocks']}>
                        {item.sections.map((section, index) => (
                            <CVBlock section={section} key={index + section.title} />
                        ))}
                    </div>
                </CVContainer>
            ))}
        </>
    )
}

export default CVExperience