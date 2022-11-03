import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

interface AppProps {
  headerText: string;
  extraText?: string;
}

function App({ headerText, extraText }: AppProps) {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>{headerText}</h1>
      {extraText && <h2>{extraText}</h2>}
    </div>
  );
}

export default App;
