import React, {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom';

function User() {

    const [users, setUsers] = useState([]);
    useEffect(()  => {
        axios.get(`http://localhost:3003/users/${id}`).then((res) => {
            setUsers(res.data);
            
        })
    }, [])

    const {id} = useParams()

  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
        <Link to='/' className='text-white font-semibold px-6 py-2 rounded-xl bg-zinc-400 font-Inter text-2xl mt-8'>Back to home</Link>
        {users && (
          <>

            <div className='w-[700px] h-[200px] flex justify-center items-center px-6 py-4 border border-black mt-16'>

                <div className='w-5/12 flex flex-col space-y-4'>
                    <h2 className='text-black font-semibold font-Inter text-2xl border-b border-black'>Name</h2>
                    <h2 className='text-black font-semibold font-Inter text-2xl border-b border-black'>Email</h2>
                    <h2 className='text-black font-semibold font-Inter text-2xl border-b border-black'>Phone</h2>
                </div>
                <div className='w-7/12 flex flex-col space-y-4'>
                <h2 className='text-black font-semibold font-Inter text-2xl border-b border-black'>{users.name}</h2>
                    <h2 className='text-black font-semibold font-Inter text-2xl border-b border-black'>{users.email}</h2>
                    <h2 className='text-black font-semibold font-Inter text-2xl border-b border-black'>{users.phone}</h2>
                    
                </div>
            </div>
          </>
          
        )}
        
    </div> 
   )
}

export default User