import { available } from '../../../data';
import Check from '../../../assets/icon-checkmark.svg';
import Style from './AddOns.module.scss';

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
        className={Style.element}
        style={active.element}
        onClick={addClick}
      >
        <div className={Style.check} style={active.check}>
          {active.check.icon}
        </div>
        <div className={Style.wrapDescriotion}>
          <h3 className={Style.title}>{step.title}</h3>
          <p className={Style.descriotion}>{step.description}</p>
        </div>
        <p className={Style.money}>{`+$${step.price[variant]}/${
          variant == 'monthly' ? 'mo' : 'yr'
        }`}</p>
      </button>
    );
  });

  return <div className={Style.task}>{element}</div>;
};

export default AddOns;
