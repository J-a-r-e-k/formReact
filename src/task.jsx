import { available, state } from './data';
import { useState } from 'react';
import thank from './assets/icon-thank-you.svg';

export const Input = () => {
  const input = available[0].input.map((step, index) => (
    <div key={index} className="info">
      <label className="infoName">{step.name}</label>
      <input
        type={step.type}
        id={step.id}
        name={step.name}
        placeholder={step.placeholder}
        required="required"
      />
    </div>
  ));
  return (
    <>
      <div className="from__task">{input}</div>
    </>
  );
};

export const Plan = () => {
  const [variant, setVariant] = useState(state.selectedPlanVariant);
  const [shortVariant, setShortVariant] = useState('');
  const [toggleStan, setToggleStan] = useState(0);

  const toggleAdd = () => {
    setVariant(variant == 'monthly' ? 'yearly' : 'monthly');
  };
  state.selectedPlanVariant = variant;

  function Toggle() {
    setToggleStan(variant == 'monthly' ? true : false);
    setShortVariant(toggleStan ? 'mo' : 'yr');
    state.shortVariant = shortVariant;
    return (
      <button className="toggle" onClick={toggleAdd}>
        <p style={{ color: toggleStan ? '#022a61' : '#999' }}>Monthly </p>
        <span className="switch">
          <span
            className="switch__add"
            style={{ left: toggleStan ? '3px' : '22px' }}
          ></span>
        </span>
        <p style={{ color: !toggleStan ? '#022a61' : '#999' }}>Yeart</p>
      </button>
    );
  }

  const element = available[1].plan.map((step, index) => {
    return (
      <button key={index} className="form__element">
        <img src={step.icon} alt={`Plan ${step.title}`} />
        <div className="form__descriotion">
          <h3 className="form__title">{step.title}</h3>
          <p className="form__money">{`$${step.price[variant]}/${shortVariant}`}</p>
        </div>
      </button>
    );
  });
  return (
    <div className="form__task form__task--plans">
      {element} {<Toggle />}
    </div>
  );
};

export const AddOns = () => {
  const element = available[2].addOns.map((step, index) => {
    return (
      <button key={index} className="form__element form__element--addOns">
        <div className="addOns__check"></div>
        <div className="form__descriotion form__descriotion--addOns">
          <h3 className="form__title">{step.title}</h3>
          <p className="addOns__descriotion">{step.description}</p>
        </div>
        <p className="form__money">{`$${
          step.price[state.selectedPlanVariant]
        }/${state.shortVariant}`}</p>
      </button>
    );
  });
  return <div className="form__task ">{element}</div>;
};

export const Finishing = () => {
  const finishPlan = available[1].plan.find(
    (step) => step.id === state.selectedPlanId
  );
  let sum = finishPlan.price[state.selectedPlanVariant];
  const total = (value) => {
    sum = sum + value;
  };

  const finishAdd = state.addOns.map((element, index) => {
    const addElement = available[2].addOns.find((add) => add.id === element);

    total(addElement.price[state.selectedPlanVariant]);

    return (
      <div key={index}>
        <p className="sum__text">{addElement.title}</p>
        <p className="sum__text">{`+$${
          addElement.price[state.selectedPlanVariant]
        }/${state.shortVariant}`}</p>
      </div>
    );
  });

  return (
    <div className="form__task ">
      <div className="form__element--SumPlan">
        <div>
          <h3 className="form__title">{`${finishPlan.title}(${state.selectedPlanVariant})`}</h3>
          <button className="change">Change</button>
        </div>
        <p className="sum__text sum__totalPlan">{`$${
          finishPlan.price[state.selectedPlanVariant]
        }/${state.shortVariant}`}</p>
      </div>
      <div className="form__element--SumAddOns">{finishAdd}</div>
      <div className="form__element--SumTotal">
        <p className="sum__text">{`Total(per ${
          state.selectedPlanVariant == 'monthly' ? 'month' : 'year'
        })`}</p>
        <p className="sum__text sum__totalMoney">{`$${sum}/${state.shortVariant}`}</p>
      </div>
    </div>
  );
};

export const End = () => {
  return (
    <div className="thankYou">
      <img src={thank} alt="planBasic" />
      <h3 className="form__title">Thank you!</h3>
      <p className="form__money">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
};
