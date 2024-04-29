import { available } from '../../../data';
import Style from './AddOns.module.scss';
import { convertVariantText } from '../../../utils/helpers';
// import classnames from 'classnames'

const AddOns = ({ variant, addOns, getAddons }) => {
  const element = available[2].addOns.map((step, index) => {
    const isAddonChecked = addOns.some((i) => i == step.id)
      ? [Style.activeIcon, Style.active]
      : '';

    function addClick() {
      addOns = addOns.includes(step.id) // sprawdza czy jest w tablicy //
        ? addOns.filter((e) => e != step.id) // jeśli jest -> zwraca tablice bez elementy klikniętego
        : [...addOns, step.id]; // jełsi nie ma -> dodaje do tablicy
      getAddons(addOns);
    }

    return (
      <button
        key={index}
        className={`${Style.element} ${isAddonChecked[1]}`}
        onClick={addClick}
      >
        <div className={`${Style.check} ${isAddonChecked[0]}`}></div>
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
