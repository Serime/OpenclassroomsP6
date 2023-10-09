import './Dropdown.scss';
import arrow from './../../arrow.svg';
import { useState } from 'react';

function handleClick(toggle, setToggle) {
  (toggle ? setToggle(false) : setToggle(true)); 
  /*
  this.classList.toggle("active");
  var content = this.nextElementSibling;
  if (content.style.display === "block") {
    content.style.display = "none";
  } else {
    content.style.display = "block";
  }
  */
}

function Dropdown({title, text}) {
  const [toggle, setToggle] = useState(false);

  return (
    <div className='Dropdown'>
      <button type="button" className={(toggle ? "active" : "")} onClick={() => handleClick(toggle, setToggle)}>
        <span>{title}</span>
        <img className="arrow" src={arrow} alt="arrow"/>
      </button>
      <div class="content">
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Dropdown;
