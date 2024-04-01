/* eslint-disable react/prop-types */
import { available } from '../../data';
import Nav from './StepNav.module.scss';

export const StepNav = ({ globalStep, setglobalStep, val, reg, setReg }) => {
  function test(flag) {
    const regName = /^[a-zA-Z]+(\s*[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]*)*$/;
    const regEmail =
      /^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i;
    const regNr = /^([+]\d{2})?[- ]?(\d{3})[- ]?(\d{3})[- ]?(\d{3})$/;

    const text = regName.test(val.text.trim());
    const email = regEmail.test(val.email.trim());
    const tel = regNr.test(val.tel.trim());
    const result = text && email && tel;
    setReg({ ...reg, ['text']: text, ['email']: email, ['tel']: tel });

    click(result, flag);
  }
  const click = (result, flag) => {
    result &&
      flag &&
      globalStep < available.length &&
      setglobalStep(globalStep + 1);
    !flag && setglobalStep(globalStep - 1);
  };

  return (
    <div>
      <button
        className={Nav.next}
        style={{ backgroundColor: globalStep == 3 ? 'rgb(146, 140, 254)' : '' }}
        onClick={() => {
          test(true);
        }}
      >
        {globalStep == 3 ? 'Confirm' : 'Next'}
      </button>
      <button
        className={`${Nav.next} ${Nav.back}`}
        style={{ display: globalStep == 0 ? 'none' : '' }}
        onClick={() => {
          click(false);
        }}
      >
        Back
      </button>
    </div>
  );
};
