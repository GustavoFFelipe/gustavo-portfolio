
import { Banner } from './components/Banner'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import './global.css'
import style from './App.module.css'
import { Projetcs } from './components/Projects'

const project = [ 
  {
    id: 1,
    projectData: {
      imgUrl: 'https://images.unsplash.com/photo-1661956600654-edac218fea67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80',
      title: 'Coffeland é o mais novo modo de comprar café.',
      footer: 'Study-Case'
    }
  }, 
  {
    id: 2,
    projectData: {
    imgUrl: 'https://images.unsplash.com/photo-1661956600654-edac218fea67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80',
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
        <main className={style.wrapper}>
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
