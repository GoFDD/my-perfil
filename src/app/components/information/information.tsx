import { SectionTitle } from "../sectionTitle/section-title";
import "./information.scss";
export function Info() {
  return (
    <div className="infos">
      <SectionTitle text="Languages" />
      <div className="languages-info">
        <span>🇺🇸 EN - Basic</span>
        <span>🇧🇷 PT-BR - Native Speaker</span>
      </div>
      <SectionTitle text="Education" />
      <div className="educational-info">
        <span>🎓</span>
        <span>Analise e Desenvolvimento de Sistemas - UNIMAR, Marilia.</span>
      </div>
    </div>
  );
}
