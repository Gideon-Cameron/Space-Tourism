import React, { useRef, useState } from 'react';
import data from './data.js';

function Description() {
  const [planetNumber, setPlanetNumber] = useState(0);
  const navigation = useRef();

  function tabChange(e) {
    const index = parseInt(e.target.dataset.index, 10);
    setPlanetNumber(index);
    const children = navigation.current.children;
    for (let i = 0; i < children.length; i++) {
      children[i].classList.remove('active');
    }
    e.target.classList.add('active');
  }

  const { name, images, description, distance, travel } = data.destinations[planetNumber];

  return (
    <div className="destination-section">
      <div className="destination-content">
        <h1 className="destination-content-subtitle">
          <span>01</span> Pick your destination
        </h1>

        <div className="destination-content-img">
          <picture>
            <source srcSet={images.webp.replace('../src', '')} type="image/webp" />
            <img
              src={images.png.replace('../src', '')}
              alt={name}
              width="300"
              height="300"
              loading="lazy"
            />
          </picture>
        </div>

        <div ref={navigation} className="destination-content-navigation">
          {data.destinations.map((dest, idx) => (
            <div
              key={dest.name}
              data-index={idx}
              onClick={tabChange}
              className={`tab ${idx === planetNumber ? 'active' : ''}`}
            >
              {dest.name.toLowerCase()}
            </div>
          ))}
        </div>

        <h1 className="destination-content-title">{name}</h1>
        <p className="destination-content-body">{description}</p>

        <div className="destination-info">
          <div className="distance">
            <p>avg. distance</p>
            <h1>{distance}</h1>
          </div>
          <div className="item">
            <p>est. travel time</p>
            <h1>{travel}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Description;
