import './App.scss';

import styles from './Window.module.scss';
import { useEffect, useState } from 'react';

import { initialData } from './data';

import Nav from './Components/Nav/Nav';
import Form from './Components/SectionIntro/Form/Form';

import { StepNav } from './Components/StepNavigation/StepNav';

function App() {
  const [globalStep, setGlobalStep] = useState(0);
  const [userData, setUserData] = useState({ text: '', email: '', tel: '' });
  const [requirementTest, setRequirementTest] = useState('');
  const [variant, setVariant] = useState('monthly');
  const [planId, setPlanId] = useState(initialData.selectedPlanId);
  const [addOns, setAddons] = useState(initialData.addOns || []);

  function onGlobalStep(value) {
    setGlobalStep(value);
  }
  function addUserData(value) {
    setUserData(value);
  }
  function selectedVariant(value) {
    setVariant(value);
  }
  function selectedPlan(value) {
    setPlanId(value);
  }
  function selectedAddons(value) {
    setAddons(value);
  }
  function checkFormValue() {
    const requirementTestName = /^[a-zA-Z]+(\s*[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]*)*$/;
    const requirementTestEmail =
      /^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+\.){1,5}[a-z]{2,6}$/i;
    const requirementTestNr =
      /^([+]\d{2})?[- ]?(\d{3})[- ]?(\d{3})[- ]?(\d{3})$/;

    const text = requirementTestName.test(userData.text.trim());
    const email = requirementTestEmail.test(userData.email.trim());
    const tel = requirementTestNr.test(userData.tel.trim());
    const result = text && email && tel;
    setRequirementTest({
      ...requirementTest,
      ['text']: text,
      ['email']: email,
      ['tel']: tel,
    });
    return result;
  }

  function handleBeforeUnload(event) {
    event.preventDefault();
    event.returnValue = '';
  }
  useEffect(() => {
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <div className={styles.window}>
      <Nav
        globalStep={globalStep}
        onGlobalStep={onGlobalStep}
        checkFormValue={checkFormValue}
      />
      <Form
        globalStep={globalStep}
        onGlobalStep={onGlobalStep}
        userData={userData}
        addUserData={addUserData}
        requirementTest={requirementTest}
        variant={variant}
        selectedVariant={selectedVariant}
        planId={planId}
        selectedPlan={selectedPlan}
        addOns={addOns}
        selectedAddons={selectedAddons}
      />
      <StepNav
        globalStep={globalStep}
        onGlobalStep={onGlobalStep}
        userData={userData}
        checkFormValue={checkFormValue}
      />
    </div>
  );
}

export default App;
