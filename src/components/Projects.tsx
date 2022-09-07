
import style from './Projects.module.css'

interface Project {
    imgUrl: string;
    title: string;
    footer: string;
}
interface ContentProps {
    content: Project;
}



export function Projetcs({content}: ContentProps){
    return(
        <a className={style.projectLink}> 
        <article>
            <div className={style.projectContainer}>
                <span className={style.dateText}>2021</span>
                <p className={style.title}>{content.title}</p>
                <img className={style.image} src={content.imgUrl} />
                <span className={style.footerText}>{content.footer}</span>
            </div>
        </article>
        </a>
    )
}