/* eslint-disable react/prop-types */

//dane
import { available } from '../../../data';

//Elements Module
import SectionIntro from './SectionIntro.module.scss';
import Input from '../../step/input/InputStep';
import Plan from '../../step/plan/Plan';
import AddOns from '../../step/addOns/AddOns';
import Finishing from '../../step/finishing/Finishing';
import End from '../end/End';
function Form({
  setglobalStep,
  globalStep,
  //imput//
  val,
  setVal,
  reg,
  //plan//
  variant,
  setVariant,
  planId,
  setPlanId,
  //adds//
  addOns,
  setAddons,
}) {
  const step = globalStep < 4 ? available[globalStep] : '';

  const stepElement = [
    <Input key="0" val={val} setVal={setVal} reg={reg} />,
    <Plan
      key="1"
      variant={variant}
      setVariant={setVariant}
      planId={planId}
      setPlanId={setPlanId}
    />,
    <AddOns
      key={'2'}
      variant={variant}
      addOns={addOns}
      setAddons={setAddons}
    />,
    <Finishing
      key={'3'}
      setglobalStep={setglobalStep}
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
