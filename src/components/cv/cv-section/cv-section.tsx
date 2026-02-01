import ScrollSection from "../../ui/scroll-section/scroll-section"
import CVCard from "../cv-card/cv-card"
import style from "./cv-section.module.scss"

const CVSection = () => {
    return (
        <section className={style['cv-section']}>
            <ScrollSection>
                <div className={style['cv-section__content']}>
                    <CVCard />
                </div>
            </ScrollSection>
        </section>
    )
}

export default CVSection