import './Card.scss';
import { Link } from 'react-router-dom';

/**
 * Composant `<Link>` vers une location. Afficher par une image avec un titre.
 *
 * @title :string Définit le titre de la location
 * @cover :string Définit l'image de fond de la `<Card>`
 * @id :string Définit le `<Link>` pour la location `<Housing>` tel que "/Housing/:id"
 */
function Card({title, cover, id}) {
  return (
    <Link to={"/Housing/"+id} className='Card'>    
      <div className='gradient'></div>     
      <span>{title}</span>
      <img src={cover} height={340} width={340} alt="Kasa" />      
    </Link>
  );
}

export default Card;
