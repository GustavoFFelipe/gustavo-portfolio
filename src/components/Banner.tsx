import PerfilPhoto from '../assets/perfil.png'
import style from './Banner.module.css'

export function Banner(){
    return(
        <article>
            
            <img className={style.perfil} src={PerfilPhoto} alt="" />
            <div>
                <h2>Front-end</h2>
                <h2>Interface User</h2>
                <button> Vamos nessa!</button>
            </div>
        </article>
    )
}