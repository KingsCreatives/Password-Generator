import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  

  return (
    <div className="w-full max-w-md mx-auto my-3 shadow-lg rounded-lg  text-center px-3 py-2 text-orange-500">
         <h1 className="text-2xl text-white px-3 py-2 border-b-2 mb-12">Password Generator</h1>

         <div className="flex mx-5  mb-4">
              <div className="w-full mx-1">
                  <input type="text"
                  className="w-full px-2 shadow-lg rounded-md py-1 outline-none"
                   placeholder="Password" 
                  />
              </div>
              <div className="">
                  <button 
                  className="bg-blue-700 shadow-lg rounded-md  px-2 py-1 text-white outline-none">
                    Copy
                  </button>
              </div>
         </div>

         <div className="flex mx-3 shadow-lg rounded-md px-2 py-1">
              <div className="flex mx-2">
                  <input type="range" name="length" id="length"
                   min={8}
                   max={30} 
                   className="mx-2"
                  />
                  <label htmlFor="length">Length: 8</label>
              </div>
              <div className="flex gap-3">
                 <div className="flex gap-1">  
                  <input type="checkbox" name="numbers"/>
                  <label htmlFor="numbers">Numbers</label>
                 </div>

                 <div className="flex gap-1">  
                  <input type="checkbox" name="numbers"/>
                  <label htmlFor="numbers">Char</label>
                 </div>
              </div>
         </div>
    </div>
  )
}

export default App
