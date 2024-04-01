import { available } from '../../../data';
import Style from './step.module.scss';

// eslint-disable-next-line react/prop-types
const Plan = ({ variant, setVariant, planId, setPlanId }) => {
  function Toggle() {
    // setToggleStan(variant == 'monthly' ? true : false);
    // setShortVariant(toggleStan ? 'mo' : 'yr');
    // state.shortVariant = shortVariant;
    return (
      <button
        className={Style.toggle}
        onClick={() => setVariant(variant == 'monthly' ? 'yearly' : 'monthly')}
      >
        <p style={{ color: variant == 'monthly' ? '#022a61' : '#999' }}>
          Monthly
        </p>
        <span className={Style.switch}>
          <span
            className={Style.switch__add}
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
        className={Style.form__element}
        style={active}
        onClick={() => {
          setPlanId(step.id);
        }}
      >
        <img src={step.icon} alt={`Plan ${step.title} `} />
        <div className={Style.form__descriotion}>
          <h3 className={Style.form__title}>{step.title} </h3>
          <p className={Style.form__money}>{`$${step.price[variant]}/${
            variant == 'monthly' ? 'mo' : 'yr'
          }`}</p>
        </div>
      </button>
    );
  });

  return (
    <div className={Style.form__task}>
      {element} {Toggle()}
    </div>
  );
};

export default Plan;
