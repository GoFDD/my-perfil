import { Header } from "./components/header/header";
import "./styles/page.scss";

export default function Home() {
  return (
    <div>
      <main className="container">
        <Header />
        <div className="experience">
          <h3>Experience</h3>
          <p>
            Atualmente, possuo experiências em projetos acadêmicos realizados em
            parceria com empresas locais de Marília, como Fabrica de Códigos e
            Eficaz Marketing.
          </p>
          <div className="experience-time"></div>
          <div className="infos">
            <h3>Languages</h3>
            <div className="languages-info">
              <span>🇺🇸 EN - Basic</span>
              <span>🇧🇷 PT-BR - Native Speaker</span>
            </div>
            <h3>Education</h3>
            <div className="educational-info">
              <span>🎓</span>
              <span>
                Analise e Desenvolvimento de Sistemas - UNIMAR, Marilia
              </span>
            </div>
          </div>
          <div className="buttons">
            <div className="social"></div>
            <button>contact me</button>
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}
