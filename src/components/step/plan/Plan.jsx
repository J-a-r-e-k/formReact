import { available } from '../../../data';
import { convertVariantText } from '../../../utils/helpers';
import Style from './Plan.module.scss';

const Plan = ({ variant, getVariant, planId, getPlanId }) => {
  function Toggle() {
    return (
      <button
        className={Style.toggle}
        onClick={() => getVariant(variant == 'monthly' ? 'yearly' : 'monthly')}
      >
        <p
          className={`${Style.variant} ${
            variant == 'monthly' ? Style.variantActive : ''
          }`}
        >
          Monthly
        </p>
        <span className={Style.switch}>
          <span
            className={Style.switchAdd}
            style={{ left: variant == 'monthly' ? '3px' : '22px' }}
          ></span>
        </span>
        <p
          className={`${Style.variant} ${
            variant == 'yearly' ? Style.variantActive : ''
          }`}
        >
          Yeart
        </p>
      </button>
    );
  }
  const element = available[1].plan.map((step, index) => {
    const active = planId == step.id ? Style.active : '';
    return (
      <button
        key={index}
        className={`${Style.element} ${active}`}
        onClick={() => {
          getPlanId(step.id);
        }}
      >
        {/* <img src={step.icon} alt={`Plan ${step.title} `} /> */}

        {/* //Zmiana IMG na SVG// */}
        {step.icon}
        <div className={Style.descriotion}>
          <p className={Style.title}>{step.title} </p>
          <p className={Style.money}>{`$${
            step.price[variant]
          }/${convertVariantText(variant)}`}</p>
          {variant == 'monthly' ? null : (
            <p className={Style.free}>2 months free</p>
          )}
        </div>
      </button>
    );
  });

  return (
    <div className={Style.task}>
      {element} {Toggle()}
    </div>
  );
};

export default Plan;
