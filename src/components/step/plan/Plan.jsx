import { available } from '../../../data';
import Style from './Plan.module.scss';

const Plan = ({ variant, getVariant, planId, getPlanId }) => {
  function Toggle() {
    return (
      <button
        className={Style.toggle}
        onClick={() => getVariant(variant == 'monthly' ? 'yearly' : 'monthly')}
      >
        <p style={{ color: variant == 'monthly' ? '#022a61' : '#999' }}>
          Monthly
        </p>
        <span className={Style.switch}>
          <span
            className={Style.switchAdd}
            style={{ left: variant == 'monthly' ? '3px' : '22px' }}
          ></span>
        </span>
        <p style={{ color: variant == 'yearly' ? '#022a61' : '#999' }}>Yeart</p>
      </button>
    );
  }
  const element = available[1].plan.map((step, index) => {
    const active = {
      backgroundColor: planId == step.id ? 'rgb(240, 246, 255)' : '',
      borderColor: planId == step.id ? 'rgb(2, 42, 97)' : '',
    };
    return (
      <button
        key={index}
        className={Style.element}
        style={active}
        onClick={() => {
          getPlanId(step.id);
        }}
      >
        <img src={step.icon} alt={`Plan ${step.title} `} />
        <div className={Style.descriotion}>
          <p className={Style.title}>{step.title} </p>
          <p className={Style.money}>{`$${step.price[variant]}/${
            variant == 'monthly' ? 'mo' : 'yr'
          }`}</p>
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
