import style from './About.module.css';

export function About(){
    return(
        <div id="about" className={style.aboutContainer}>
            <h3>Um pouco sobre mim.</h3>
            <p className={style.aboutText}>
                Oi eu sou o Gustavo, desenvolvedor front-end e apaixonado por projetos desafiadores e inovadores. ReactJs é minha tecnologia preferida junto com Typescript, mas conheço um pouco de VueJs. Estou estudando ReactJS na Rocketseat e desenvolvendo vários projetos novos com muitas tecnologias inovadoras com a melhores praticas como Code Clean, Context API e Severless. Nascido em São José dos Campos, uma cidade no interior do estado de São Paulo, mas que vem se tornando cada vez mais um polo em tecnologia do Brasil. Como uma pessoa muito comunicativa, criativa e que adora novos desafios e tirar as ideias do papel, tenho certeza que juntos podemos criar algo incrível. Então me conta um pouco da suas ideias e vamos criar algo novo que com certeza vai surpreender a todos.
            </p>
        </div>
    )
}