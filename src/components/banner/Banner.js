import './Banner.scss';

function Banner({image, span, alt}) {
  return (
    <div className='Banner'>
      <div className='blend_black'></div>   
      {span}
      <img src={image} alt={alt} />         
    </div>
  );
}

export default Banner;
