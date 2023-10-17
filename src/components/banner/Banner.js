import './Banner.scss';

/**
 * Composant pour afficher par une image avec la possibilité d'ajouter un titre.
 *
 * @image :string Définit la source de l'image
 * @text :string ? Définit le titre de la `<Banner>`
 * @alt :string Définit le texte alternatif pour l'image
 */
function Banner({image, text = null, alt}) {
  return (
    <div className='Banner'>
      <div className='blend_black'></div>       
      <span>{text}</span>
      <img src={image} alt={alt} />         
    </div>
  );
}

export default Banner;
