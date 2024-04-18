import { available } from '../../../data';

import SectionIntro from './Form.module.scss';
import Input from '../../Step/Input/InputStep';
import Plan from '../../Step/Plan/Plan';
import AddOns from '../../Step/AddOns/AddOns';
import Finishing from '../../Step/Finishing/Finishing';
import End from '../End/End';
function Form({
  getGlobalStep,
  globalStep,

  userData,
  getUserData,
  requirementTest,

  variant,
  getVariant,
  planId,
  getPlanId,

  addOns,
  getAddons,
}) {
  const step = globalStep < 4 ? available[globalStep] : '';

  const stepElement = [
    <Input
      key="0"
      userData={userData}
      getUserData={getUserData}
      requirementTest={requirementTest}
    />,
    <Plan
      key="1"
      variant={variant}
      getVariant={getVariant}
      planId={planId}
      getPlanId={getPlanId}
    />,
    <AddOns
      key={'2'}
      variant={variant}
      addOns={addOns}
      getAddons={getAddons}
    />,
    <Finishing
      key={'3'}
      getGlobalStep={getGlobalStep}
      variant={variant}
      planId={planId}
      addOns={addOns}
    />,
  ];

  return (
    <div className={SectionIntro.form}>
      {globalStep != available.length ? (
        <section className={SectionIntro.step}>
          <h1 className={SectionIntro.title}>{step.titleStep}</h1>
          <p className={SectionIntro.info}>{step.description}</p>
          {stepElement[globalStep]}
        </section>
      ) : (
        <End />
      )}
    </div>
  );
}

export default Form;
