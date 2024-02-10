// react hook - special functions that allows functional components to use react features withou writing class components (useState,useEffect,UserContent,useReducer,useCallback,and more)

// useState() - a react hook that allows the creation of a stateful variable AND a setter function to update its value in the virtual DOM (name,setName)


import MyComponent from "./MyComponent.jsx"
import Counter from "./Counter.jsx"
function App() {

  
  
  return(
   <>
   <Counter/>
   <MyComponent/>
   </>
  )
 
}

export default App
