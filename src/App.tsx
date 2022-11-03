// import { useState } from 'react';
import './App.css';
import Form from './Form';
// import { User } from './interfaces';

function App() {
  // const [user, setUser] = useState<null | User>(null); // union type

  // const fetchUser = () =>
  //   setUser({
  //     name: 'Mitchel',
  //     age: 23,
  //     country: 'the Netherlands',
  //     address: {
  //       street: 'Main st.',
  //       number: 88,
  //       zip: '21345',
  //     },
  //     admin: false,
  //   });

  return (
    // <div className="App">
    //   <button onClick={fetchUser}>Fetch user on click</button>
    //   <p>{user && user.name}</p>
    // </div>
    <Form />
  );
}

export default App;
