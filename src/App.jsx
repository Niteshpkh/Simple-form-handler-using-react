import React, { useState } from 'react'

const App = () => {
  const [username, setusername] = useState('')
  const submitHandler = (e)=>{
e.preventDefault(e)
console.log(username)
setusername('')
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input
        value={username} onChange={(e)=>{
          setusername(e.target.value)
        }}
         type="text" placeholder='Enter your pretty name' />
        <button>submit</button>
      </form>
    </div>
  )
}

export default App