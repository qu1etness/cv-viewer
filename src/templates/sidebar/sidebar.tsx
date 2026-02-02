import style from "./sidebar.module.scss"
import SidebarContent from "@/components/sidebar/sidebar-content/sidebar-content"
import { useComments } from "@/hooks/use-comments";
import FeedbackModal from "@/components/shared/feedback-modal/feedback-modal";

const Sidebar = () => {

    const { comments, addComment } = useComments();

    return (
        <aside className={style.sidebar}>
            <div className={style['sidebar__header']}>
                <h3>Feedback & Evaluation</h3>
                <p>Review candidate qualifications</p>
                <FeedbackModal handlerSubmit={addComment} />
            </div>
            <SidebarContent comments={comments} />
        </aside>
    )
}

export default Sidebar
