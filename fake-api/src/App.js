import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addName } from "./Redux/AddPersonName/action";

const App = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.addNameReducer);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      dispatch(addName(res.data));
    });
  }, []);

  console.log(data);

  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
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
      <h2>Name:</h2>

      {
        data.people.map((person)=>{
          return <h3 key={person.id}>{person.name}</h3>
        })
      }
    </>
  );
};

export default App;
