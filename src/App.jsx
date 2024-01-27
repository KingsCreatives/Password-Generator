import { useState, useEffect, useCallback, useRef} from 'react'
import './App.css'

function App() {
  const [length, useLength] = useState(8)
  const [addNums, useAddNums] = useState(false)
  const [specialChar, useSpecialChar] = useState(false)
  const [password, usePassword] = useState("")
  const passwordRef = useRef(null)

  const generatePassword = useCallback(() => {
    let generatedPassword = ''
    let alphabets = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let nums = "1234567890"
    let char = "!@#$%^&*()_-+[]{}"

    if(addNums) alphabets += nums
    if(specialChar) alphabets += char

    for(let i = 1; i < length; i++){
      let charIndex = Math.floor(Math.random() * alphabets.length +  1)
      generatedPassword += alphabets.charAt(charIndex)
    }

    usePassword(generatedPassword)
  }, [length, addNums, specialChar])

  const copyPassword = () => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
  }

  useEffect(() => {
    generatePassword()
  }, [length, addNums, specialChar])
  

  return (
    <div className="w-full max-w-md mx-auto my-3 shadow-lg rounded-lg  text-center px-3 py-2 text-orange-500">
         <h1 className="text-2xl text-white px-3 py-2 border-b-2 mb-12">Password Generator</h1>

         <div className="flex mx-5  mb-4">
              <div className="w-full mx-1">
                  <input type="text"
                  className="w-full px-2 shadow-lg rounded-md py-1 outline-none"
                   placeholder="Password"
                   readOnly
                   value={password} 
                   ref={passwordRef}
                  />
              </div>
              <div className="">
                  <button 
                  className="bg-blue-700 shadow-lg rounded-md  px-2 py-1 text-white outline-none"
                  onClick={copyPassword}
                  >
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
                   value={length}
                   onChange={e => useLength(e.target.value)}
                  />
                  <label htmlFor="length">Length: {length}</label>
              </div>
              <div className="flex gap-3">
                 <div className="flex gap-1">  
                  <input type="checkbox" name="numbers"
                  defaultChecked = {addNums}
                   onChange={() => useAddNums((bool) => !bool)}
                  />
                  <label htmlFor="numbers">Numbers</label>
                 </div>

                 <div className="flex gap-1">  
                  <input type="checkbox" name="numbers"
                  onChange={() => useSpecialChar((bool => !bool))}
                  defaultChecked = {specialChar}
                  />
                  <label htmlFor="numbers">Char</label>
                 </div>
              </div>
         </div>
    </div>
  )
}

export default App
