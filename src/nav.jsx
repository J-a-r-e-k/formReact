// import React from 'react'

import { available } from './data';

const nav = ({ ind }) => {
  const itemList = available.map((step, index) => {
    let pName;
    if (ind === index) {
      pName = 'navigation__number navigation__number--active';
    } else {
      pName = 'navigation__number';
    }
    const done = {
      background: `${index < ind ? 'rgb(0 0 0 / 20%)' : ''}`,
    };

    return (
      <li key={index}>
        <button className="navigation__step">
          <p className={pName} style={done}>
            {step.id}{' '}
          </p>
          <div>
            <p>STEP {step.id}</p>
            <h2>{step.subtitle}</h2>
          </div>
        </button>
      </li>
    );
  });

  return itemList;
};

export default nav;

// if(true){<p className={aaa}>{step.id}</p>}else
// {<p className="ooo">{step.id}</p>}

{
  /* <li key={index}>
<button className="navigation__step">
  <p className={aaa}>{step.id}</p>
  <div>
    <p>STEP {step.id}</p>
    <h2>{step.subtitle}</h2>
  </div>
</button>
</li> */
}
