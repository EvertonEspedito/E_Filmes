

import "./About.css"

const About = () => {
  return (
    <div>
      <div className="container-about">
        <h2 className="title">Sobre</h2>
        <div className="info">
          <p>Site desenvolvido com o intuito de praticar o desenvolvimento com ReactJS e o consumo de API, nesse projeto eu ultilizei o uso da ferramenta Vite, para agilizar o desenovilvimento do site.</p>
          <h4>Tecnologias ultilizadas</h4>
          <ul>
            <li><a href="https://react.dev/" target="_blank" rel="noopener noreferrer">ReactJs</a></li>
            <li><a href="https://vite.dev/" target="_blank" rel="noopener noreferrer">Vite</a></li>
            <li><a href="https://developer.themoviedb.org/docs/getting-started" target="_blank" rel="noopener noreferrer">TMDB API</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About
