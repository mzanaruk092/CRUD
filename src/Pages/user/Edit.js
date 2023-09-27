import React,{useState,useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'

function Edit() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const navigate = useNavigate();

    const {id} = useParams()

    useEffect(()  => {
        axios.get(`http://localhost:3003/users/${id}`).then((res) => {
            setName(res.data.name);
            setEmail(res.data.email);
            setPhone(res.data.phone)
            
        })
    }, [])

    const data  = {
        name: name,
        email: email,
        phone: phone,
    }

    function Update(e){
        e.preventDefault()
        axios.put(`http://localhost:3003/users/${id}`,data).then(
            navigate('/')
        )
    }



  return (
    <div className='w-screen h-full flex flex-col justify-center items-center mt-16'>
        
        <h1 className='text-black text-3xl font-semibold font-Montserrat'>Edit User</h1>
        <form className='w-[80%] h-full flex flex-col justify-center items-center'>
            <input value={name} onChange={(e) =>setName(e.target.value)} type='text' placeholder='enter your name' className='w-[80%] bg-white/10 mt-4 text-xl font-Monserrat font-normal outline-none py-4 pl-6 border border-zinc-500' />
            <input value={email} onChange={(e) =>setEmail(e.target.value)} type='email' placeholder='enter your email' className='w-[80%] bg-white/10 mt-4 text-xl font-Monserrat font-normal outline-none py-4 pl-6 border border-zinc-500' />
            <input value={phone} onChange={(e) =>setPhone(e.target.value)} type='phone' placeholder='enter your phone' className='w-[80%] bg-white/10 mt-4 text-xl font-Monserrat font-normal outline-none py-4 pl-6 border border-zinc-500' />
            <button onClick={Update}  className='w-[80%] bg-blue-400 mt-4 text-white font-semibold text-xl py-4 pl-6'>Update User</button>
        </form>
        
    </div>
  )
}

export default Edit