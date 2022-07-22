import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
//useEffect manages side effects


function App() {

  const [state,setState] = useState([])

  useEffect(()=> {
    console.log("use Effect running")
    fetch('https://reqres.in/api/users?page=2')
    //fetch takes in a URL address
    .then((result)=>{
      console.log('result')
      return result.json()
      //JavaScript Object Notation
    }).then((res)=>{
      console.log(res)
      setState(res.data)
    })
    .catch((error)=>{
      console.log(error)
    })
    //setting up a promise that says we will make a request to the URL. if it works, we run .then(), if it doesnt we run .catch(). .catch() is a error finder
  },[])
  //[whatever we put in here will effect useEffect]

  return (
    <div className="App">
      {
        state.map((person)=> {
          return <div>
            <h1>{person.first_name} {person.last_name}</h1>
            <h2>Email: {person.email}</h2>
            <img src={person.avatar}></img>
            </div>
        })
      }

    </div>
  );
}

export default App;

//