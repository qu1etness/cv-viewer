import style from "./cv-card.module.scss"
import CVHeader from "@/components/cv/cv-header/cv-header"
import cvData from "@/data/cv-data.json"
import CVExperience from "@/components/cv/cv-experience/cv-experience"
import CVAwards from "@/components/cv/cv-awards/cv-awards"
import CVSkills from "@/components/cv/cv-skills/cv-skills"
import type { ICVData } from "@/interfaces/cv-interface"

const data: ICVData = cvData as ICVData;

const CVCard = () => {

    const { personalInfo, experience, awards, skills } = data

    return (
        <div className={style['cv-card']}>
            <CVHeader personalInfo={personalInfo} />
            <CVExperience experience={experience} />
            <CVAwards awards={awards} />
            <CVSkills skills={skills} />
        </div>
    )
}

export default CVCard