
import style from './FormPopUp.module.css'


export function FormPopUp(){
    return (
        <div id="contact" className={style.formPopUp}>
            <form className={style.form} action="https://formsubmit.co/gustavo.ffelipedev@gmail.com" method="POST">
                <h1>Entre em contato</h1>
                <label htmlFor="name">Nome</label>
                <input name="name" className={style.name}type="text"  placeholder="Nome"  />
                <label htmlFor="surname">Sobrenome</label>
                <input name="surname" className={style.name} type="text"  placeholder="Sobrenome" />
                <label htmlFor="phone">Telefone</label>
                <input name="phone" className={style.name} type="text"  placeholder="Telefone" />
                <label htmlFor="email">Email</label>
                <input name="email" className={style.name} type="text"  placeholder="Email" />
                <label htmlFor="message">Mensagem</label>
                <textarea name="message" className={style.message} placeholder="Sua Mensagem" />

                <input type="hidden" name="_autoresponse" value="Obrigado por me mandar uma mensagem, em breve vou entrar em contato com você. Gustavo Felipe"></input>
                <input type="submit" className={style.button} value="ENVIAR" />

            </form>
        </div>
    )
}