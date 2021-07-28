import './App.css';
import StripeContainer from './components/StripeContainer';
import holiday from './assets/holiday.jpg';
import { useState } from 'react';

function App() {
  const [ showItem, setShowItem ] = useState(false)
  return (
    <div className="App">
      <h1>Payment Test</h1>
      {showItem ? <StripeContainer /> : <> <h3>£10</h3> <img src={holiday} alt='Holiday' />
      <button onClick={() => setShowItem(true)}>Make Payment</button></>}
    </div>
  );
}

export default App;
