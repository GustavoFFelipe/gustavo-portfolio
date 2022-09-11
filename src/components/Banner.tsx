
import PerfilPhoto from '../assets/perfil.png'
import style from './Banner.module.css'





export function Banner(){


    return(
        <article  className={style.wrapper}>
            
            <img className={style.perfil} src={PerfilPhoto} alt="" />
            <div className={style.bannerText}>
                <h2 className={style.blueText}>FRONT-END DESIGN.</h2>
                <h2 className={style.blackText}>USER INTERFACE.</h2>
                <a href="#contact"><button className={style.buttonPopForm} 
                > 
                Vamos nessa
                </button></a>
            </div>
            <span className={style.borderDivision} ></span>
        </article>
    )
}