import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  var person ={
  name: "Dr. Fahim",    
  job:"Singer"
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        <Users></Users>

        <Counter></Counter>

      <Person name= "Rubel" nayika="Mousumi"></Person>
      <Person name="Josim" nayika="Shabana"></Person>
      <Person name="Manna" nayika="Purnima"></Person>
      <Person name="Shakib" nayika="Shabnur"></Person>
      <Person name="BappaRaz" nayika="null"></Person>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
function Counter(){
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount(count + 1);  
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  //<button onMouseMove={() => setCount(count - 1)}>Decrease</button>
  )
}

function  Users(){
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  return (
    <div>
      <h1>Dynamic Users: {users.length}</h1>
      <ul>
        {
        users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

function Person(props){
  console.log(props);
  return(
  <div style={{border:'2px solid gold', margin:'10px'}}>
    <h1>Name: {props.name}</h1>
    <h3>Hero of {props.nayika}</h3>
  </div>
  )
}

export default App;
