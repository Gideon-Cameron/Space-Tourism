import React, { useRef, useState } from 'react';
import data from './data.js';

function Crew() {
  const [crewIndex, setCrewIndex] = useState(0);
  const crewNavigation = useRef();

  function changeTab(e) {
    const index = parseInt(e.target.dataset.index, 10);
    setCrewIndex(index);
    const children = crewNavigation.current.children;
    for (let i = 0; i < children.length; i++) {
      children[i].classList.remove('active');
    }
    e.target.classList.add('active');
  }

  const { name, role, bio, images } = data.crew[crewIndex];

  return (
    <div className='crew-section'>
      <div className="crew-subtitle">
        <span>02 </span>meet your crew
      </div>

      <div className="crew-img">
        <picture>
          <source
            srcSet={images.webp.replace('../src', '')}
            type="image/webp"
          />
          <img
            src={images.png.replace('../src', '')}
            alt={name}
            width="400"
            height="400"
            loading="lazy"
          />
        </picture>
      </div>

      <div ref={crewNavigation} className="crew-navigation">
        {data.crew.map((_, idx) => (
          <div
            key={idx}
            data-index={idx}
            onClick={changeTab}
            className={`crew-tab ${idx === crewIndex ? 'active' : ''}`}
          ></div>
        ))}
      </div>

      <div className="crew-content">
        <div className="crew-content-role">{role}</div>
        <div className="crew-content-name">{name}</div>
        <div className="crew-content-body">{bio}</div>
      </div>
    </div>
  );
}

export default Crew;
