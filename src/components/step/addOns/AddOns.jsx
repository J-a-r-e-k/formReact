/* eslint-disable react/prop-types */
import { available } from '../../../data';
import Check from '../../../assets/icon-checkmark.svg';
import Style from './step.module.scss';

const AddOns = ({ variant, addOns, getAddons }) => {
  const element = available[2].addOns.map((step, index) => {
    const testAdd = addOns.some((i) => i == step.id);
    const active = {
      check: {
        backgroundColor: testAdd ? 'rgb(2, 42, 97)' : '',
        icon: testAdd ? <img src={Check} alt="selected" /> : '',
      },
      element: { backgroundColor: testAdd ? 'rgb(240, 246, 255)' : '' },
    };

    function addClick() {
      addOns = addOns.includes(step.id) // sprawdza czy jest w tablicy //
        ? addOns.filter((e) => e != step.id) // jeśli jest -> zwraca tablice bez elementy klikniętego
        : [...addOns, step.id]; // jełsi nie ma -> dodaje do tablicy
      getAddons(addOns);
    }

    return (
      <button
        key={index}
        className={Style.form__element}
        style={active.element}
        onClick={addClick}
      >
        <div className={Style.addOns__check} style={active.check}>
          {active.check.icon}
        </div>
        <div className={Style.form__descriotion}>
          <h3 className={Style.form__title}>{step.title}</h3>
          <p className={Style.addOns__descriotion}>{step.description}</p>
        </div>
        <p className={Style.form__money}>{`$${step.price[variant]}/${
          variant == 'monthly' ? 'mo' : 'yr'
        }`}</p>
      </button>
    );
  });

  return <div className={Style.form__task}>{element}</div>;
};

export default AddOns;
