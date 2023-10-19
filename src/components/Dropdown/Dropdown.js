import './Dropdown.scss';
import arrow from './../../arrow.svg';
import { useState } from 'react';

/**
 * Composant affichant un boutton avec un titre.
 * Lors de l'activation du button le composant affiche un text et/ou une liste en dessous du boutton avec une animation de "collapse"
 *
 * @title :string Définit le titre du boutton
 * @text :string ? Définit le texte à afficher lors du collapse
 * @list :string[] ? Définit la liste à afficher lors du collapse avec un retour à la ligne entre les éléments
 */
function Dropdown({title, text = null, list = null}) {
  const [toggle, setToggle] = useState(false);

  return (
    <div className='Dropdown'>
      <button type="button" className={(toggle ? "active" : "")} onClick={() => setToggle(!toggle)} aria-pressed={toggle}>
        <span>{title}</span>
        <img className="arrow" src={arrow} alt={(toggle) ? "Fermer" : "Ouvrir"} aria-hidden="true"/>
      </button>
      <div className="content">
        {(text && <p>{text}</p>)}
        {list && 
        <ul>
          {list.map((equipment) => {  
            return (
              <li key={equipment}>{equipment}</li>
            )
          })}          
        </ul>
        }
      </div>
    </div>
  );
}

export default Dropdown;
