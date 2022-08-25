import React,{useState} from 'react'

export default function Login({signIn}) {
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const check={
        user:username.trim().length===0,
        parol:password.trim().length===0
    }
  return (
    <div className='inputGroup px-3 w-100 mx-auto d-flex flex-column justify-content-around align-items-start'>
        <input type="text" className='form-control py-3 loginInput' placeholder='Enter your username...' value={username} onChange={(e)=>setUsername(e.target.value)}/>
        <input type="text" className='form-control py-3 loginInput' placeholder='Enter your password...' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button className='btn btn-info w-25 text-light' onClick={()=>signIn(username,password,check)}>Sign in</button>
    </div>
  )
}
