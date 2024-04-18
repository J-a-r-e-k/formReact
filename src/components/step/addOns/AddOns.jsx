import { available } from '../../../data';
import Check from '../../../assets/icon-checkmark.svg';
import Style from './AddOns.module.scss';
import { convertVariantText } from '../../../utils/helpers';

// import classnames from 'classnames'

const AddOns = ({ variant, addOns, getAddons }) => {
  const element = available[2].addOns.map((step, index) => {
    const isAddonChecked = addOns.some((i) => i == step.id);
    const active = {
      check: {
        backgroundColor: isAddonChecked ? 'rgb(2, 42, 97)' : '',
        icon: isAddonChecked ? <img src={Check} alt="selected" /> : '',
      },
      element: { backgroundColor: isAddonChecked ? 'rgb(240, 246, 255)' : '' },
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
        {/* <div className={classnames(Styles.klasa1, {[Styles.klasa2]: testAdd})}></div> */}

        <div className={Style.check} style={active.check}>
          {active.check.icon}
        </div>
        <div className={Style.wrapDescriotion}>
          <p className={Style.title}>{step.title}</p>
          <p className={Style.descriotion}>{step.description}</p>
        </div>
        <p className={Style.money}>{`+$${
          step.price[variant]
        }/${convertVariantText(variant)}`}</p>
      </button>
    );
  });

  return <div className={Style.task}>{element}</div>;
};

export default AddOns;
