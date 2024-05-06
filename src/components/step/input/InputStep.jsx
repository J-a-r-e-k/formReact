import { available } from '../../../data';
import Style from './InputStep.module.scss';

const Input = ({ userData, addUserData, requirementTest }) => {
  const inpChang = (value, type) => {
    addUserData({ ...userData, [type]: value });
  };

  const input = available[0].input.map((step, index) => (
    <div key={index} className={Style.info}>
      {requirementTest[step.typInput] || requirementTest == '' ? (
        ''
      ) : (
        <p className={Style.infoRequier}>{`Requires ${step.name}`}</p>
      )}
      <label className={Style.infoName}>{step.name}</label>
      <input
        type={step.typInput}
        id={step.id}
        name={step.name}
        placeholder={step.placeholder}
        value={userData[step.typInput]}
        style={{
          border:
            requirementTest[step.typInput] || requirementTest == ''
              ? '1px solid #777'
              : '1px solid red',
        }}
        onChange={(e) => {
          inpChang(e.target.value, step.typInput);
        }}
      />
      {userData[step.typInput] != '' ? (
        <button
          className={Style.clean}
          onClick={() => {
            addUserData({ ...userData, [step.typInput]: '' });
          }}
        >
          <p>X</p>
        </button>
      ) : (
        <> </>
      )}
    </div>
  ));
  return (
    <>
      <div className={Style.task}>{input}</div>
    </>
  );
};

export default Input;
