import './Home.scss';
import { useEffect, useState } from 'react';
import Banner from '../../components/banner/Banner';
import Card from '../../components/card/Card';

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

  let span = <span>Chez vous, <br className='only-mobile'/> partout et ailleurs</span> 
  
  return (
    <main className="Home">
      <Banner image="banner_1.png" span={span} alt="Falaise en bord de mer"/>
      <section className='LocationCards'>
      {data.map((location) => {  
        //console.log(location);
        return (
          <Card key={location.id} title={location.title} cover={location.cover}/>
        )
      })}    
      </section>  
    </main>
  );
}

export default Home;
