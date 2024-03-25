import { useState } from 'react';
import './app.scss';
import Nav from './nav';
import StepSect from './form';
import { End } from './task';
import { available, state } from './data';

function App() {
  const [index, stanIndex] = useState(state.selectedTile);
  const [testReg, setTestReg] = useState(false);

  function test(flag) {
    const regName = /^[a-zA-Z]+(\s*[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]*)*$/;
    const regEmail =
      /^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i;
    const regNr = /^([+]\d{2})?[- ]?(\d{3})[- ]?(\d{3})[- ]?(\d{3})$/;
    let result =
      regName.test(state.userInfo.text.trim()) &&
      regEmail.test(state.userInfo.email.trim()) &&
      regNr.test(state.userInfo.tel.trim());
    setTestReg(result);
    btn(result, flag);
  }

  function btn(result, flag) {
    // console.log(a);
    if (result && flag && index < available.length) {
      stanIndex(index + 1);
      state.selectedTile = index + 1;
    } else if (!flag && index > 0) {
      stanIndex(index - 1);
      state.selectedTile = index - 1;
    }
  }

  return (
    <div className="window">
      <nav className="navigation">
        <ul className="navigation__wrap">
          {/* <Nav ind={index != 4 ? index : ''} /> */}
          <Nav />
        </ul>
      </nav>
      <div className="form">{index != 4 ? StepSect() : <End />}</div>

      <button
        className="window__btn window__btn--next"
        onClick={() => {
          test(true);
        }}
      >
        Next {index}
      </button>
      <button
        className="window__btn window__btn--back"
        onClick={() => btn(false)}
      >
        Back
      </button>
    </div>
  );
}

export default App;

{
  /* <div>
<a href="https://vitejs.dev" target="_blank">
  <img src={viteLogo} className="logo" alt="Vite logo" />
</a>
<a href="https://react.dev" target="_blank">
  <img src={reactLogo} className="logo react" alt="React logo" />
</a>
</div>
<h1>Vite + React</h1>
<div className="card">
<button onClick={() => setCount((count) => count + 1)}>
  count is {count}
</button>
<p>
  Edit <code>src/App.jsx</code> and save to test HMR
</p>
</div>
<p className="read-the-docs">
Click on the Vite and React logos to learn more
</p> */
}
