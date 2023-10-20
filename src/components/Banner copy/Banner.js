import './Banner.scss';

/**
 * Composant pour afficher par une image avec la possibilité d'ajouter un titre.
 *
 * @image :string Définit la source de l'image
 * @alt :string Définit le texte alternatif pour l'image
 * @text :string ? Définit le titre de la `<Banner>`
 */
function Banner({image, alt, text = null}) {
  return (
    <div className='Banner'>
      <div className='blend_black'></div>       
      {text && <h1>{text}</h1>}
      <img src={image} alt={alt} />         
    </div>
  );
}

export default Banner;
