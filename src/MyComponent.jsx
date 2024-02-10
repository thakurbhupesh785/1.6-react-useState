import React,{useState} from 'react'

function MyComponent () {

  const [name, setName] = useState('Guest');
  const [age, setAge] = useState(0);
  const [isEmployed, setIsEmployed] = useState(true);

  const updateName = () => {
    setName('Bhupesh')
  }

  const incrementAge = () => {
    setAge (age+10)
  }

  const toggleEmployedStatus = () => {
    setIsEmployed(!isEmployed);
  }

  return(
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>setName</button>
      <p>Age: {age}</p>
      <button onClick={incrementAge}>Increment Age</button>
      <p>Employed: {isEmployed? 'yes' : 'no'}</p>
      <button onClick={toggleEmployedStatus}>Toggle Employment Status</button>
    </div>
  )
}


export default MyComponent