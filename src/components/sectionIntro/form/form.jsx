/* eslint-disable react/prop-types */

import { available } from '../../../data';

import SectionIntro from './SectionIntro.module.scss';
import Input from '../../step/input/InputStep';
import Plan from '../../step/plan/Plan';
import AddOns from '../../step/addOns/AddOns';
import Finishing from '../../step/finishing/Finishing';
import End from '../end/End';
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
        <section className={SectionIntro.form__step}>
          <h1 className={SectionIntro.form__title}>{step.titleStep}</h1>
          <p className={SectionIntro.form__info}>{step.description}</p>
          {stepElement[globalStep]}
        </section>
      ) : (
        <End />
      )}
    </div>
  );
}

export default Form;
