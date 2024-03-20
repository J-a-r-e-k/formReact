// import { available } from './data';
// import { render } from 'react-dom';

import { available } from './data';
import { AddOns, Finishing, Input, Plan } from './task';

const stepSect = (index) => {
  const step = available[index];
  const titleStep = step.titleStep;
  const description = step.description;

  let stepElement;
  if (step.id == 1) stepElement = <Input />;
  else if (step.id == 2) stepElement = <Plan />;
  else if (step.id == 3) stepElement = <AddOns />;
  else if (step.id == 4) stepElement = <Finishing />;
  return (
    <section className="form__step">
      <h1 className="form__title">{titleStep}</h1>
      <p className="form__info">{description}</p>
      {stepElement}
    </section>
  );
};

export default stepSect;

{
  /* <p class="info__requier"></p> */
}
{
  /* <label class="infoName">Name</label> */
}
{
  /* <input id="1" type="text" name="Name" placeholder="  e.g. Stephen King" required="required"> */
}
