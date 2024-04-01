/* eslint-disable react/prop-types */
import { available } from '../../../data';
import Style from './step.module.scss';

const Finishing = ({ setglobalStep, variant, planId, addOns }) => {
  const finishPlan = available[1].plan.find((step) => step.id === planId);
  let sum = finishPlan.price[variant];
  const total = (value) => {
    sum = sum + value;
  };

  const finishAdd = addOns.map((id, index) => {
    const addElement = available[2].addOns.find((add) => add.id === id);
    total(addElement.price[variant]);
    return (
      <div key={index}>
        <p className={Style.sum__text}>{addElement.title}</p>
        <p className={Style.sum__text}>{`+${addElement.price[variant]}/${
          variant == 'monthly' ? 'mo' : 'yr'
        }`}</p>
      </div>
    );
  });

  return (
    <div className={Style.form__task}>
      <div className={Style.form__SumPlan}>
        <div>
          <h3 className={Style.form__title}>{finishPlan.title}</h3>
          <button
            className={Style.change}
            onClick={() => {
              setglobalStep(1);
            }}
          >
            Change
          </button>
        </div>
        <p className={`${Style.form__title} ${Style.sum__totalPlan}`}>{`$${
          finishPlan.price[variant]
        }/${variant == 'monthly' ? 'mo' : 'yr'}`}</p>
      </div>
      <div className={Style.form__SumAddOns}>{finishAdd}</div>
      <div className={Style.form__SumTotal}>
        <p className={Style.sum__text}>
          {`Total (per ${variant == 'monthly' ? 'month' : 'year'})`}
        </p>
        <p className={`${Style.sum__text} ${Style.sum__totalMoney}`}>
          {`${sum}/${variant == 'monthly' ? 'mo' : 'yr'}`}
        </p>
      </div>
    </div>
  );
};

export default Finishing;
