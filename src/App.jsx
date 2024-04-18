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

  function getGlobalStep(value) {
    setGlobalStep(value);
  }
  function getUserData(value) {
    setUserData(value);
  }
  function getVariant(value) {
    setVariant(value);
  }
  function getPlanId(value) {
    setPlanId(value);
  }
  function getAddons(value) {
    setAddons(value);
  }
  function test() {
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
      <Nav globalStep={globalStep} getGlobalStep={getGlobalStep} test={test} />
      <Form
        globalStep={globalStep}
        getGlobalStep={getGlobalStep}
        userData={userData}
        getUserData={getUserData}
        requirementTest={requirementTest}
        variant={variant}
        getVariant={getVariant}
        planId={planId}
        getPlanId={getPlanId}
        addOns={addOns}
        getAddons={getAddons}
      />
      <StepNav
        globalStep={globalStep}
        getGlobalStep={getGlobalStep}
        userData={userData}
        test={test}
      />
    </div>
  );
}

export default App;
