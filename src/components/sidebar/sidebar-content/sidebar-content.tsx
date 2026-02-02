import style from "./sidebar-content.module.scss"

import Comment from "@/components/sidebar/comment/comment"
import Typography from "@/components/ui/typography/typography"
import type { IComment } from "@/interfaces/comment"

interface ISidebarContent {
    comments: IComment[]
}

const SidebarContent = ({ comments }: ISidebarContent) => {

    return (
        <div className={style['sidebar-content']}>
            <Typography variant="title" element="h2">Comments</Typography>
            {comments.length ? comments.map((comment) => (
                <Comment key={comment.id} text={comment.text} />
            )) :
                <div>
                    <p>No comments yet</p>
                </div>
            }
        </div>
    )
}

export default SidebarContent