import { AppContext } from '@/context/StateContext';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import axios from 'axios'


function Login() {

  const {loginUser} = AppContext()

 const [credentials, setCredentials] = useState({
  email: '',
  password:'',
 })
 const handleChange = (e) =>{
  setCredentials({
    ...credentials,
    [e.target.name]: e.target.value
  })
 }
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const response = await axios.post('/api/auth/login', credentials)
    if(response.status === 200 ){
      router.push('/Dashboard')
    }

  };

  return (
    <div className='w-full h-full grid grid-cols-1 place-items-center'>
      <div className='flex flex-col w-[350px] h-full border-2 rounded-xl'>
        <h3 className='text-center'>Iniciar Sesión</h3>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
          
        <label htmlFor="email">Usuario</label>
        <input type="email"  className='border-2 border-gray-300 '
        name='email'
        id="email"
        onChange={handleChange}
        />
        <label htmlFor="password">Contraseña</label>
        <input type="password" className='border-2 border-gray-300 ' 
        id="password"
        name='password'
        onChange={handleChange}
        />
        <div className='flex flex-col justify-center items-center'>

        <button  className='bg-blue-500 w-[100px] px-4 py-2 mt-4 mb-4 rounded-lg'>Ingresar</button>
        </div>
      </form>
      </div>
      
    </div>
  )
}

export default Login