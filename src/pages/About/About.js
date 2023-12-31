import './About.scss';
import Banner from '../../components/Banner/Banner';
import Dropdown from '../../components/Dropdown/Dropdown';

/**
 * Page "A propos" comprenant une `<Banner>` et des `<Dropdown>`
 */
function About() {  
  return (
    <main className="About">
      <Banner image="banner_2.png" alt="Paysage montagneux"/>
      <section>
        <Dropdown title="Flabilité" text="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes"/>
        <Dropdown title="Respect" text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
        <Dropdown title="Service" text="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."/>
        <Dropdown title="Sécurité" text="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/>
      </section>
    </main>
  );
}

export default About;
