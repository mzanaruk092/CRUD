import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Adduser() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const navigate = useNavigate()

    const data = {
        name: name,
        email: email,
        phone: phone
    }

    function Submit(e) {
        e.preventDefault();

        axios.post("http://localhost:3003/users", data)
        .then(
            navigate('/')
        )
    }

  return (
    <div className='w-screen h-full flex flex-col justify-center items-center mt-16'>
        
        <h1 className='text-black text-3xl font-semibold font-Montserrat'>Add User</h1>
        <form className='w-[80%] h-full flex flex-col justify-center items-center'>
            <input value={name} onChange={(e) =>setName(e.target.value)} type='text' placeholder='enter your name' className='w-[80%] bg-white/10 mt-4 text-xl font-Monserrat font-normal outline-none py-4 pl-6 border border-zinc-500' />
            <input value={email} onChange={(e) =>setEmail(e.target.value)} type='email' placeholder='enter your email' className='w-[80%] bg-white/10 mt-4 text-xl font-Monserrat font-normal outline-none py-4 pl-6 border border-zinc-500' />
            <input value={phone} onChange={(e) =>setPhone(e.target.value)} type='phone' placeholder='enter your phone' className='w-[80%] bg-white/10 mt-4 text-xl font-Monserrat font-normal outline-none py-4 pl-6 border border-zinc-500' />
            <button onClick={Submit} className='w-[80%] bg-blue-400 mt-4 text-white font-semibold text-xl py-4 pl-6'>Add User</button>
        </form>
        
    </div>
  )
}

export default Adduser