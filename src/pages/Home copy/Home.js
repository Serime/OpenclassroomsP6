import './Home.scss';
import { useEffect, useState } from 'react';
import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card';

/**
 * Page "Accueil" comprenant une `<Banner>` et les `<Card>` des locations
 */
function Home() {
  const [data, setData] = useState(0);

  useEffect(() => {   
    fetch('/data.json')
    .then(response => response.json())
    .then(text => setData(text))
  }, []);

  if (data === 0) {
    return (
      <main>
        <Banner />
      </main>
    );
  }
  
  return (
    <main className="Home">
      <Banner image="banner_1.png" text="Chez vous, partout et ailleurs" alt="Falaise en bord de mer"/>
      <section className='LocationCards'>
      {data.map((location) => { 
        return (
          <Card key={location.id} id={location.id} title={location.title} cover={location.cover}/>
        )
      })}    
      </section>  
    </main>
  );
}

export default Home;
