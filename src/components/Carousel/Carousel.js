import './Carousel.scss';
import { useState } from 'react';

// Temps de l'animation de transition en micro-seconde
const DELAY = "600"; 

function PrevImage(setCurrentImage, currentImage, numberImages, setTranstion, onTranstion, setOnTranstion) {
  if (!onTranstion) {
    setOnTranstion(true);
    setTimeout(() => setOnTranstion(false), DELAY);
    if (currentImage === 0)
    {     
      setTranstion(false); 
      setCurrentImage(numberImages);      

      setTimeout(() => setTranstion(true), 10);
      setTimeout(() => setCurrentImage(numberImages - 1), 20);      
    }
    else {  
      setCurrentImage(currentImage - 1);
    }
  }  
}

function NextImage(setCurrentImage, currentImage, numberImages, setTranstion, onTranstion, setOnTranstion) {
  if (!onTranstion) {
    setOnTranstion(true);
    setTimeout(() => setOnTranstion(false), 600);
    if (currentImage === numberImages)
    {      
      setTranstion(false);
      setCurrentImage(0);
      
      setTimeout(() => setTranstion(true), 10);
      setTimeout(() => setCurrentImage(1), 20);   
    }
    else {  
      setCurrentImage(currentImage + 1);
    }
  }  
}

/**
 * Composant affichant un carousel infini avec les images fournis.
 *
 * @images :string[] Liste des sources des images
 */
function Carousel({ images }) {
  const numberImages = images.length;  
  
  //Index de l'image afficher
  //setCurrentImage(0) => étant une copie de la dernière image de {images}
  //setCurrentImage(numberImages) => étant une copie de la permière image de {images}
  const [currentImage, setCurrentImage] = useState((numberImages > 1) ? 1 : 0);
  //true => transition entre deux images encours de translation
  const [onTranstion, setOnTranstion] = useState(false);
  //false => transition sans delay donc invisible, utiliser pour l'effet infini du carousel avec les copies d'images
  const [transtion, setTranstion] = useState(true);

  const StyleSlide = {
    transform : "translateX(calc(-100% * " + currentImage + "))",
    transition: (transtion) ? "transform " + DELAY + "ms ease-in-out" : "none",
  };
  const StyleCarousel = {
    gridTemplateColumns : "repeat(" + (numberImages + 2) + ", 100%)",
  };

  return (
    (numberImages === 1) ? 
    <div className='Carousel' style={StyleCarousel}>
      <div className="Slide" style={StyleSlide}> 
        <img src={images[0]} height={415} alt={"Logement"}/>
      </div>
    </div>
    :
    <div className='Carousel' style={StyleCarousel}>
        <div className="Slide" style={StyleSlide}> 
          <img src={images[numberImages - 1]} height={415} alt={"Photo numéro " + numberImages + " du logement"}/>
          <span>{numberImages + "/" + numberImages}</span>
        </div>
      {images.map((image, index) => {  
        return (
          <div className="Slide" key={index} style={StyleSlide}> 
            <img src={image} height={415} alt={"Photo numéro " + index + " du logement"}/>
            <span>{index + 1 + "/" + numberImages}</span>
          </div>
        )})} 
        <div className="Slide" style={StyleSlide}> 
          <img src={images[0]} height={415} alt={"Photo numéro " + 1 + " du logement"}/>
          <span>{1 + "/" + numberImages}</span>
        </div>
      <div className='Arrows'>
        <div className='Button_Wrapper' id='Button_Wrapper_Prev'>
          <button className='Button_Carousel' id='Prev' onClick={() => PrevImage(setCurrentImage, currentImage, numberImages, setTranstion, onTranstion, setOnTranstion)}></button>
        </div>
        <div className='Button_Wrapper' id='Button_Wrapper_Next'>
          <button className='Button_Carousel' id='Next' onClick={() => NextImage(setCurrentImage, currentImage, numberImages, setTranstion, onTranstion, setOnTranstion)}></button>
        </div>            
      </div> 
    </div>
  );
}

export default Carousel;
