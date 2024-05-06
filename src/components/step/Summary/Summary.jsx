import { available } from '../../../data';
import { convertVariantText } from '../../../utils/helpers';
import Style from './Summary.module.scss';

const getTotalPrice = (planId, addOns, variant) => {
  const selectedPlanPrice = available[1].plan.find((step) => step.id === planId)
    ?.price[variant];

  const addonsPrice = addOns.reduce((sum, addonIn) => {
    const singleAddonPrice = available[2].addOns.find(
      (add) => add.id === addonIn
    ).price[variant];
    return sum + singleAddonPrice;
  }, 0);

  return selectedPlanPrice + addonsPrice;
};

const Summary = ({ onGlobalStep, variant, planId, addOns }) => {
  const finishPlan = available[1].plan.find((step) => step.id === planId);

  const finishAdd = addOns.map((id, index) => {
    const addElement = available[2].addOns.find((add) => add.id === id);

    return (
      <div key={index} className={Style.elementAddOns}>
        <p className={Style.text}>{addElement.title}</p>
        <p className={Style.text}>
          +{addElement.price[variant]}/{convertVariantText(variant)}
        </p>
      </div>
    );
  });

  return (
    <>
      <div className={Style.task}>
        <div className={Style.plan}>
          <div>
            <p className={Style.title}>
              {finishPlan.title} ({variant})
            </p>
            <button
              className={Style.change}
              onClick={() => {
                onGlobalStep(1);
              }}
            >
              Change
            </button>
          </div>
          <p className={Style.planMoney}>
            ${finishPlan.price[variant]}/{convertVariantText(variant)}
          </p>
        </div>
        <div>{finishAdd}</div>
      </div>
      <div className={Style.sumTotal}>
        <p className={Style.text}>
          {`Total (per ${variant == 'monthly' ? 'month' : 'year'})`}
        </p>
        <p className={`${Style.text} ${Style.totalMoney}`}>
          ${getTotalPrice(planId, addOns, variant)}/
          {convertVariantText(variant)}
        </p>
      </div>
    </>
  );
};

export default Summary;
