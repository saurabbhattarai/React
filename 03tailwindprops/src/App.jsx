import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'


function App() {  

  let myObj = {
    username: "saurab", 
    age : 21, 
  }
let newArr = [1,2,3]


  return (
    <>
     <h1 className = 'bg-green-400 mb-4'>tailwind test</h1> 

     <Card username = "chai aur code" btnText = "click me" /> 
     <Card username = "saurab" btnText = "visit me" /> 



    </>
  )
}

export default App
