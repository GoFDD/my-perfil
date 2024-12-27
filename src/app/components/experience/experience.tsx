import { SectionTitle } from "../sectionTitle/section-title";
import "./experience.scss";
export function Experience() {
  return (
    <div className="experience">
      <SectionTitle text="Experience" />
      <p>
        Atualmente, possuo experiências em projetos acadêmicos realizados em
        parceria com empresas locais de Marília, como Fabrica de Códigos e
        Eficaz Marketing.
      </p>
      <div className="experience-time"></div>
    </div>
  );
}
