
import { Banner } from './components/Banner'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import './global.css'
import style from './App.module.css'
//import coffee from 
import { Projetcs } from './components/Projects'

const project = [ 
  {
    id: 1,
    projectData: {
      imgUrl: '../assets/coffee.png',
      title: 'Coffeland é o mais novo modo de comprar café.',
      footer: 'Study-Case'
    }
  }
]

function App() {


  return (
    <div className="App">
      <Header />
      <article className={style.mainContent}>
        <Sidebar  />
        <Banner />
        <main>
        {project.map(content => {
        return(
          <Projetcs 
            content={content.projectData}
          /> 
        )
      })}
        </main>
      </article>
    </div>
  )
}

export default App
