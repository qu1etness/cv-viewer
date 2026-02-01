import style from "./header.module.scss"
import { FileMinusCorner } from 'lucide-react';

const Header = () => {

    return (
        <header
            className={style.header}
        >
            <div className={style['header-logo']}>
                <div className={style['header-logo-icon']}>
                    <FileMinusCorner />
                </div>
                <h2>CV Viewer & Feedback</h2>
            </div>
        </header>
    )
}


export default Header