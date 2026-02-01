import FeedbackModal from "../../components/layout/feedback-modal/feedback-modal"
import style from "./sidebar.module.scss"

const Sidebar = () => {

    return (
        <aside className={style.sidebar}>
            <div className={style['sidebar__header']}>
                <h3>Feedback & Evaluation</h3>
                <p>Review candidate qualifications</p>
                <FeedbackModal className={style['sidebar__header_button']} />
            </div>
        </aside>
    )
}

export default Sidebar
