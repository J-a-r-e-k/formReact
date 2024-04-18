import { available } from '../../data';
import Nav from './StepNav.module.scss';

export const StepNav = ({ globalStep, getGlobalStep, test }) => {
  const click = (test, flag) => {
    test &&
      flag &&
      globalStep < available.length &&
      getGlobalStep(globalStep + 1);
    !flag && getGlobalStep(globalStep - 1);
  };

  if (globalStep === 4) return <> </>;

  return (
    <div>
      <button
        className={Nav.next}
        style={{ backgroundColor: globalStep == 3 ? 'rgb(146, 140, 254)' : '' }}
        onClick={() => {
          click(test(), true);
        }}
      >
        {globalStep == 3 ? 'Confirm' : 'Next Step'}
      </button>
      <button
        className={`${Nav.next} ${Nav.back}`}
        style={{ display: globalStep == 0 ? 'none' : '' }}
        onClick={() => {
          click(false);
        }}
      >
        Go Back
      </button>
    </div>
  );
};
