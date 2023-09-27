import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

function Home ()  {
    const [users, setUsers] = useState([]);

    
    const loadUsers = () =>{
        axios.get("http://localhost:3003/users").then((res) => {
            setUsers(res.data.reverse());
            
        })
    }
    useEffect(()  => {
       loadUsers()
    }, [])

    function Delete(id){
        axios.delete(`http://localhost:3003/users/${id}`)
        .then(
            loadUsers()
        )
    }
  return (
    <div className='w-full h-full flex flex-col px-10 py-8'>
        <div class='w-full flex flex-col min-h-[50vh] justify-center items-center'>
        <h1 className='text-black text-3xl font-semibold font-Montserrat'>
            Home Pages  
        </h1>

        <table className='w-[90%] text-center overflow-hidden overflow-y-scroll mt-8 border border-black '>
            <thead className='border-b bg-gray-800'>
                <tr className=''>
                    <th scope='col' class='text-sm font-medium text-white px-6 py-4'>#</th>
                    <th scope='col' class='text-sm font-medium text-white px-6 py-4'>Name</th>
                    <th scope='col' class='text-sm font-medium text-white px-6 py-4'>Email</th>
                    <th scope='col' class='text-sm font-medium text-white px-6 py-4'>Phone</th>
                    <th scope='col' class='text-sm font-medium text-white px-6 py-4'>Action</th>
                </tr>
            </thead>
           
            <tbody>
                {users.map((data,index) => (

                    
                <tr key={index} class='bg-white border-b'>
                    <td  class='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>{index+1}</td>
                    <td class='text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap'>{data.name}</td>
                    <td class='text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap'>{data.email}</td>
                    <td class='text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap'>{data.phone}</td>
                    <td class='flex justify-center items-center space-x-4 mt-1'>
                        <Link to={`/users/${data.id}`} className='px-6 py-2 text-white font-normal bg-black rounded-lg'>
                            View    
                        </Link>
                        <Link to={`/edit-user/${data.id}`} className='px-6 py-2 text-white font-normal bg-blue-300 rounded-lg' >
                            Edit
                        </Link>
                        <button onClick={()=> Delete(data.id)} className='px-6 py-2 text-white font-normal bg-red-500 rounded-lg'>
                            Delete
                        </button>
                    </td>
                </tr>
               ))}
            </tbody>
        </table>
        </div>
    </div>
  )
}

export default Home