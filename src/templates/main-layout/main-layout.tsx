import Header from "@/templates/header/header.tsx";
import style from "./main-layout.module.scss"
import Sidebar from "@/templates/sidebar/sidebar.tsx";
import CVSection from "@/components/cv/cv-section/cv-section.tsx";

const MainLayout = () => {

    return (
        <div className={style.layout}>
            <Header />
            <main className={style['layout__main']}>
                <CVSection />
                <Sidebar />
            </main>
        </div>
    )
}

export default MainLayout;