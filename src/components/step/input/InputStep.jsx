/* eslint-disable react/prop-types */
import { available } from '../../../data';
import Style from './step.module.scss';

const Input = ({ val, setVal, reg }) => {
  const inpChang = (value, type) => {
    setVal({ ...val, [type]: value });
  };

  const input = available[0].input.map((step, index) => (
    <div key={index} className={Style.info}>
      {!reg[step.typInput] ? (
        <p className={Style.infoRequier}>{`Requires ${step.name}`}</p>
      ) : (
        ''
      )}
      <label className={Style.infoName}>{step.name}</label>
      <input
        type={step.typInput}
        id={step.id}
        name={step.name}
        placeholder={step.placeholder}
        value={val[step.typInput]}
        style={{
          border: !reg[step.typInput] ? '1px solid red' : '1px solid #777',
        }}
        onChange={(e) => {
          inpChang(e.target.value, step.typInput);
        }}
      />
      {val[step.typInput] != '' ? (
        <button
          className={Style.clean}
          onClick={() => {
            setVal({ ...val, [step.typInput]: '' });
          }}
        >
          <p>X</p>
        </button>
      ) : (
        ''
      )}
    </div>
  ));
  return (
    <>
      <div className={Style.form__task}>{input}</div>
    </>
  );
};

export default Input;
