import NavStep from './NavStep.module.scss';
import { available } from '../../data';
import { useEffect, useState } from 'react';

// eslint-disable-next-line react/prop-types
const Nav = ({ getGlobalStep, globalStep, test }) => {
  const [activeBtn, setActiveBtn] = useState(0);

  useEffect(() => {
    if (globalStep > activeBtn) setActiveBtn(globalStep);
  }, [globalStep, activeBtn]);

  function getBackgroundColor(index) {
    if (activeBtn < index) return 'rgb(255 255 255 / 10%)';
    if (index == globalStep) return '#c0e2ff';
  }

  const itemList = available.map((step, index) => {
    const active = {
      backgroundColor: getBackgroundColor(index),
      borderColor: index == globalStep ? '#c0e2ff' : '',
      color: index == globalStep ? '#000' : '',
      cursor: activeBtn >= index ? 'pointer' : 'not-allowed',
    };

    return (
      <li key={index}>
        <button
          className={NavStep.navigation__step}
          onClick={() => {
            test() && activeBtn >= index && getGlobalStep(index);
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
