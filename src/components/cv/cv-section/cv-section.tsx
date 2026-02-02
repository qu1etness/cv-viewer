import CVCard from "@/components/cv/cv-card/cv-card"
import style from "./cv-section.module.scss"

const CVSection = () => {
    return (
        <section className={style['cv-section']}>
            <div className={style['cv-section__content']}>
                <CVCard />
            </div>
        </section>
    )
}

export default CVSection