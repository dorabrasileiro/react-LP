
import s from './App.module.css'

import image01 from '/1.jpg'
import image02 from '/2.webp'
import image03 from '/3.jpg'

function App() {

//js

  return (
<>
    {/* <nav>
          <span className={s.navItems} onclick="navTo('s1')">
            <i class="fa-regular fa-house"></i>
            <a className="navWorks" href="#s1">Empresa</a>
        </span>
        <span className={s.navItems} onclick="navTo('s2')">
            <i class="fa-solid fa-car"></i>
            <a className="navWorks" href="#s2">Carros</a>
        </span>
        <span className={s.navItems} onclick="navTo('s3')">
            <i class="fa-brands fa-youtube"></i>
            <a className="navWorks" href="#s3">Video</a>
        </span>
        <span className={s.navItems} onclick="navTo('s4')">
            <i class="fa-solid fa-phone"></i>
            <a className="navWorks" href="#s4">Contato</a>
        </span>
    </nav> */}
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
                <a class="nav-link" href="#">Features</a>
                <a class="nav-link" href="#">Pricing</a>
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
              </div>
            </div>
          </div>
        </nav>
    <main>
      <section id="s1" className={s.s1}>
            <h1>Mercedes</h1>
            <h2>O melhor carro da temporada</h2>
      </section>
      <section id="s2" className={s.s2}>
          <div className={s.card}>
            <img width="300px" height="auto" src={image01} alt=""/>
            <div>
                <h4>Mercedes W12</h4>
                <p>Carro em pista com design aerodinâmico em prateado e verde, pronto para a corrida, destacando sua velocidade e tecnologia avançada.</p>
            </div>
        </div>

        
         <div className={s.card}>
            <img width="300px" height="auto" src={image02} alt=""/>
            <div>
                <h4>Mercedes AMG F1 W13</h4>
                <p>Em um pit stop, com mecânicos trocando pneus rapidamente. O carro possui um chassi esculpido e design agressivo, refletindo a intensidade das corridas.</p>
            </div>
        </div>



         <div className={s.card}>
            <img width="300px" height="auto" src={image03} alt=""/>
            <div>
                <h4>Mercedes W10 em ação</h4>
                <p> Carro em alta velocidade em uma curva, levantando poeira, com ênfase em sua potência e agilidade. A luz do sol destaca o brilho da carroceria prateada.</p>
            </div>
        </div>
        
        



      </section>
      <section id="s3">
       <iframe className={s.vid} src="https://www.youtube.com/embed/Cs54R2Ks61s?si=RfKRsiwnBgwsoyLe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </section>
      <section id="s4" className={s.s4}>
        <h3>CONTATO</h3>
        <div className={s.formulario}>
            <label for="nome">Nome:</label>
            <input type="text" id="Nome" placeholder="Digite o seu nome"/>
            <label for="assunto">Mensagem: </label>
            <textarea for="assunto"placeholder="Digite sua mensagem"></textarea>
        <button onclick="enviar()">ENVIAR</button>
        
        </div>

      </section>
    </main>



     <footer>
        <a href="https://www.facebook.com" target="_blank">
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a href="https://www.instagram.com" target="_blank">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com" target="_blank">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://github.com/Andredev-dias" target="_blank">
          <i className="fa-brands fa-github"></i>
        </a>
      </footer>

  </>

  )
}

export default App

