import NavStep from './NavStep.module.scss';
import { available } from '../../data';
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const Nav = ({ setglobalStep, globalStep }) => {
  const [activeBtn, setActiveBtn] = useState(0);
  globalStep > activeBtn && setActiveBtn(globalStep);
  const itemList = available.map((step, index) => {
    const active = {
      backgroundColor:
        activeBtn < index
          ? 'rgb(255 255 255 / 10%)'
          : index == globalStep
          ? '#c0e2ff'
          : '',
      borderColor: index == globalStep ? '#c0e2ff' : '',
      color: index == globalStep ? '#000' : '',
      cursor: activeBtn >= index ? 'pointer' : 'not-allowed',
    };

    return (
      <li key={index}>
        <button
          className={NavStep.navigation__step}
          onClick={() => {
            activeBtn >= index && setglobalStep(index);
          }}
        >
          <p className={NavStep.navigation__number} style={active}>
            {step.id}
          </p>
          <div>
            <p>STEP {step.id}</p>
            <h2>{step.subtitle}</h2>
          </div>
        </button>
      </li>
    );
  });
  return (
    <nav className={NavStep.navigation}>
      <ul className={NavStep.navigation__wrap}>{itemList}</ul>
    </nav>
  );
};

export default Nav;
