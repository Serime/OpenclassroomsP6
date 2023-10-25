import star from './../../star.svg';
import star_false from './../../star_false.svg';
import './Rating.scss';

/**
 * Composant pour afficher une note par des étoiles pour une note sur 5.
 *
 * @rating :string Définit la note sur 5
 */
function Rating({ rating }) {
  return (
    <div className='Rating'>
      <img src={(rating >= 1) ? star : star_false} height={24} width={24} alt={"Note de " + rating + " sur 5"}/>
      <img src={(rating >= 2) ? star : star_false} height={24} width={24} alt={"Note de " + rating + " sur 5"} aria-hidden="true"/>
      <img src={(rating >= 3) ? star : star_false} height={24} width={24} alt={"Note de " + rating + " sur 5"} aria-hidden="true"/>
      <img src={(rating >= 4) ? star : star_false} height={24} width={24} alt={"Note de " + rating + " sur 5"} aria-hidden="true"/>
      <img src={(rating >= 5) ? star : star_false} height={24} width={24} alt={"Note de " + rating + " sur 5"} aria-hidden="true"/>
    </div>
  );
}

export default Rating;