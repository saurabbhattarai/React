import { useState, useCallback } from 'react'


function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed,setNumberAllowed] = useState("false")
  const [charAllowed,setCharAllowed] = useState("false")
  const [password,setPassword] = useState("")
  
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) {      // numberAllowed = true 
      str += "0123456789"
    }  

    if (charAllowed) { 
      str += "!@#$%^&*-_+=[]{}~`"
    } 

    for (let i = 1; i<= array.length; i++) { 
      let char = Math.floor(Math.random()*str.length + 1)
      pass = str.charAt(char) 
    }

      setPassword(pass)

  },[length,numberAllowed,charAllowed,setPassword])
  
  return (
    <>
  <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
    <h1 className = 'text-white text-center mb-3'>Password Generator</h1>
  <div className='flex shadow rounded-lg overflow-hidden-mb-4'>
    <input 
    type =  "text"
    value = {password}
    className='outline-none w-full py-1 px-3 mb-4 rounded-lg'
    placeholder='password'
    readOnly
    />  

    <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
    </div> 

    <div className='flex text-sm gap-x-2'>
      <div className = 'flex items-center gap-x-1'></div> 

      <input 
      type = "range"
      min = {6}
      max = {100}
      value = {length}
      className='cursor-pointer'
      /> 
<label>Length:{length}</label>
    </div>
  </div>
    </>
  )
}

export default App