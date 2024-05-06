import { available } from '../../../data';

import SectionIntro from './Form.module.scss';
import Input from '../../Step/Input/InputStep';
import Plan from '../../Step/Plan/Plan';
import AddOns from '../../Step/AddOns/AddOns';
import Summary from '../../Step/Summary/Summary';
import End from '../End/End';

function Form({
  onGlobalStep,
  globalStep,

  userData,
  addUserData,
  requirementTest,

  variant,
  selectedVariant,
  planId,
  selectedPlan,

  addOns,
  selectedAddons,
}) {
  const step = globalStep < 4 ? available[globalStep] : '';

  const stepElement = [
    <Input
      key="0"
      userData={userData}
      addUserData={addUserData}
      requirementTest={requirementTest}
    />,
    <Plan
      key="1"
      variant={variant}
      selectedVariant={selectedVariant}
      planId={planId}
      selectedPlan={selectedPlan}
    />,
    <AddOns
      key={'2'}
      variant={variant}
      addOns={addOns}
      selectedAddons={selectedAddons}
    />,
    <Summary
      key={'3'}
      onGlobalStep={onGlobalStep}
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
