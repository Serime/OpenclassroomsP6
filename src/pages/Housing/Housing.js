import './Housing.scss';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Dropdown from '../../components/Dropdown/Dropdown';
import Carousel from '../../components/Carousel/Carousel';
import Rating from '../../components/Rating/Rating';

/**
 * Page affichant le logement avec id correspondant
 *
 * @id Prend le paramètre "id" de l'URL ("/Housing/:id")
 */
function Housing() {
  const [housingData, setHousingData] = useState(null);
  const navigate = useNavigate();

  const { id } = useParams()

  useEffect(() => {   
    fetch('/data.json')
    .then(response => response.json())
    .then((text) => {
      setHousingData("errorBackend");
        text.forEach(element => {
          if (element.id === id) {
            setHousingData(element);
          }
        });
      })
  }, [id]);

  if (housingData === "errorBackend") {
    navigate("/404");
    return (<></>);
  }

  if (housingData) {
    return (
      <main className='Housing'>    
        <Carousel images={housingData.pictures}/>
        <section className='Housing_Info_1'>  
          <div className='Title_Location_Tags'>
            <div>
              <h1>{housingData.title}</h1>
              <span>{housingData.location}</span>
            </div>        
            <div className='Tags'>
              {housingData.tags.map((tag) => {  
                return (<span className='Tag' key={tag}>{tag}</span>)
              })}  
            </div>           
          </div>
          <div className='Host_Rating'>      
            <div className='Host'>  
              <span>{housingData.host.name}</span>
              <img src={housingData.host.picture} height={64} width={64} alt={housingData.host.name}/>
            </div>     
            <Rating rating={housingData.rating}/>            
          </div>
        </section>
        <section className='Dropdowns'>
          <Dropdown title="Description" text={housingData.description}/>
          <Dropdown title="Équipements" list={housingData.equipments}/>
        </section>
      </main>
    );
  }
}

export default Housing;
