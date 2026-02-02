import style from "./comment.module.scss"

const Comment = ({ text }: { text: string }) => {
    return (
        <div className={style.comment}>
            <p className={style['comment__text']}>{text}</p>
        </div>
    )
}

export default Comment