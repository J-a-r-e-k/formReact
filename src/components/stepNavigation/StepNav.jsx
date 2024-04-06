/* eslint-disable react/prop-types */
import { available } from '../../data';
import Nav from './StepNav.module.scss';

export const StepNav = ({ globalStep, getGlobalStep, test }) => {
  // function test(flag) {
  //   const requirementTestName = /^[a-zA-Z]+(\s*[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]*)*$/;
  //   const requirementTestEmail =
  //     /^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+\.){1,5}[a-z]{2,6}$/i;
  //   const requirementTestNr =
  //     /^([+]\d{2})?[- ]?(\d{3})[- ]?(\d{3})[- ]?(\d{3})$/;

  //   const text = requirementTestName.test(userData.text.trim());
  //   const email = requirementTestEmail.test(userData.email.trim());
  //   const tel = requirementTestNr.test(userData.tel.trim());
  //   const result = text && email && tel;
  //   getRequirementTest(text, email, tel);
  //   click(result, flag);
  // }
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
