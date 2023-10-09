import './Card.scss';
import { useEffect, useState } from 'react';

function Card({title, cover}) {
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
    <article className='Card'>    
      <div className='gradient'></div>     
      <span>{title}</span>
      <img src={cover} height={340} width={340} alt="Kasa" />      
    </article>
  );
}

export default Card;
