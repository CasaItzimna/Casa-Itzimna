import { AppContext } from '@/context/StateContext';
import { useRouter } from 'next/router';
import React, { useState } from 'react'


function Login() {

  const {loginUser} = AppContext()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Aquí debes implementar la lógica de autenticación
      // Puedes hacerlo con una función serverless o usando una API externa
      const user = await loginUser(email, password);

      if (user) {
        router.push('/dashboard');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className='w-full h-full grid grid-cols-1 place-items-center'>
      <div className='flex flex-col w-[350px] h-full border-2 rounded-xl'>
        <h3 className='text-center'>Iniciar Sesión</h3>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
          
        <label htmlFor="email">Usuario</label>
        <input type="text"  className='border-2 border-gray-300 '
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Contraseña</label>
        <input type="password" className='border-2 border-gray-300 ' 
        
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        <div className='flex flex-col justify-center items-center'>

        <button type="submit" className='bg-blue-500 w-[100px] px-4 py-2 mt-4 mb-4 rounded-lg'>Ingresar</button>
        </div>
      </form>
      </div>
      
    </div>
  )
}

export default Login