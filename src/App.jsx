import './App.module.scss';
import Window from './Window.module.scss';
import { useState } from 'react';

import { state } from './data';

//Module//
import Nav from './components/Nav/Nav';
import Form from './components/sectionIntro/form/form';
import { StepNav } from './components/stepNavigation/StepNav';

function App() {
  //Stan//
  const [globalStep, setglobalStep] = useState(0);
  const [val, setVal] = useState({ text: '', email: '', tel: '' });
  const [reg, setReg] = useState({ text: 'true', email: 'true', tel: 'true' });
  const [variant, setVariant] = useState('monthly');
  const [planId, setPlanId] = useState(state.selectedPlanId);
  const [addOns, setAddons] = useState(state.addOns);

  return (
    <div className={Window.window}>
      <Nav globalStep={globalStep} setglobalStep={setglobalStep} />
      <Form
        globalStep={globalStep}
        setglobalStep={setglobalStep}
        val={val}
        setVal={setVal}
        reg={reg}
        variant={variant}
        setVariant={setVariant}
        planId={planId}
        setPlanId={setPlanId}
        addOns={addOns}
        setAddons={setAddons}
      />
      {globalStep != 4 ? (
        <StepNav
          globalStep={globalStep}
          setglobalStep={setglobalStep}
          val={val}
          reg={reg}
          setReg={setReg}
        />
      ) : (
        ''
      )}
    </div>
  );
}
window.addEventListener('beforeunload', (e) => {
  e.preventDefault();
  e.returnValue = '';
});
export default App;
