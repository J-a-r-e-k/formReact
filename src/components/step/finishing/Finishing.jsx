import { available } from '../../../data';
import Style from './Finishing.module.scss';

const Finishing = ({ getGlobalStep, variant, planId, addOns }) => {
  const finishPlan = available[1].plan.find((step) => step.id === planId);
  let sum = finishPlan.price[variant];
  const total = (value) => {
    sum = sum + value;
  };

  const finishAdd = addOns.map((id, index) => {
    const addElement = available[2].addOns.find((add) => add.id === id);
    total(addElement.price[variant]);
    return (
      <div key={index} className={Style.elementAddOns}>
        <p className={Style.text}>{addElement.title}</p>
        <p className={Style.text}>{`+${addElement.price[variant]}/${
          variant == 'monthly' ? 'mo' : 'yr'
        }`}</p>
      </div>
    );
  });

  return (
    <>
      <div className={Style.task}>
        <div className={Style.plan}>
          <div>
            <p className={Style.title}>
              {finishPlan.title}(
              {variant.charAt(0).toUpperCase() + variant.slice(1).toLowerCase()}
              )
            </p>
            <button
              className={Style.change}
              onClick={() => {
                getGlobalStep(1);
              }}
            >
              Change
            </button>
          </div>
          <p className={Style.planMoney}>{`$${finishPlan.price[variant]}/${
            variant == 'monthly' ? 'mo' : 'yr'
          }`}</p>
        </div>
        <div>{finishAdd}</div>
      </div>
      <div className={Style.sumTotal}>
        <p className={Style.text}>
          {`Total (per ${variant == 'monthly' ? 'month' : 'year'})`}
        </p>
        <p className={`${Style.text} ${Style.totalMoney}`}>
          {`$${sum}/${variant == 'monthly' ? 'mo' : 'yr'}`}
        </p>
      </div>
    </>
  );
};

export default Finishing;
