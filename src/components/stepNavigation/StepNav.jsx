import { available } from '../../data';
import Nav from './StepNav.module.scss';

export const StepNav = ({ globalStep, onGlobalStep, checkFormValue }) => {
  const nextBtn = () => {
    if (checkFormValue() && globalStep < available.length) onGlobalStep(globalStep + 1);
  };

  const backBtn = () => {
    onGlobalStep(globalStep - 1);
  };

  if (globalStep === 4) return <> </>;

  return (
    <div>
      <button
        className={Nav.next}
        style={{ backgroundColor: globalStep == 3 ? 'rgb(146, 140, 254)' : '' }}
        onClick={nextBtn}
      >
        {globalStep == 3 ? 'Confirm' : 'Next Step'}
      </button>
      <button
        className={`${Nav.next} ${Nav.back}`}
        style={{ display: globalStep == 0 ? 'none' : '' }}
        onClick={backBtn}
      >
        Go Back
      </button>
    </div>
  );
};
