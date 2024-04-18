import NavStep from './NavStep.module.scss';
import { available } from '../../data';
import { useEffect, useState } from 'react';

const MAIN_BAGROUND = 'rgb(255 255 255 / 10%)';
const CURRENT_STEP_COLOR = '#c0e2ff';

const Nav = ({ getGlobalStep, globalStep, test }) => {
  const [activeBtn, setActiveBtn] = useState(0);

  useEffect(() => {
    if (globalStep > activeBtn) setActiveBtn(globalStep);
  }, [globalStep, activeBtn]);

  function getBackgroundColor(index) {
    if (activeBtn < index) return MAIN_BAGROUND;
    if (index == globalStep) return CURRENT_STEP_COLOR;
  }

  const itemList = available.map((step, index) => {
    const active = {
      backgroundColor: getBackgroundColor(index),
      borderColor: index == globalStep ? CURRENT_STEP_COLOR : '',
      color: index == globalStep ? '#000' : '',
      cursor: activeBtn >= index ? 'pointer' : 'not-allowed',
    };

    return (
      <li key={index}>
        <button
          className={NavStep.step}
          onClick={() => {
            test() && activeBtn >= index && getGlobalStep(index);
          }}
        >
          <p className={NavStep.number} style={active}>
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
      <ul className={NavStep.wrap}>{itemList}</ul>
    </nav>
  );
};

export default Nav;
