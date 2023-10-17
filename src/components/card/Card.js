import './Card.scss';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

/**
 * Composant `<Link>` vers une location. Afficher par une image avec un titre.
 * Lors de l'activation du button le composant affiche un text et/ou une liste en dessous du boutton avec une animation de "collapse"
 *
 * @title :string Définit le titre de la location
 * @cover :string Définit l'image de fond de la `<Card>`
 * @id :string Définit le `<Link>` pour la location `<Housing>` tel que "/Housing/:id"
 */
function Card({title, cover, id}) {
  const [data, setData] = useState(0);

  useEffect(() => {   
    fetch('/data.json')
    .then(response => response.json())
    .then(text => setData(text))
  }, []);

  if (data === 0) {
    return (
      <div className='Card'>
      </div>
    );

  }
  return (
    <Link to={"/Housing/"+id} className='Card'>    
      <div className='gradient'></div>     
      <span>{title}</span>
      <img src={cover} height={340} width={340} alt="Kasa" />      
    </Link>
  );
}

export default Card;
