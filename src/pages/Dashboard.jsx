
import { useEffect, useState } from 'react';
import Layout from '../components/Dashboard/Layout';
import axios from 'axios'
import {useRouter} from 'next/router'

const Dashboard = () => {
  const [user, setUser] = useState({
    email:'',
    name: ''
  })
  const router = useRouter()
  const getProfile = async() =>{
    const response = await axios.get('/api/auth/profile')
    setUser(response.data)
  }
  useEffect(() => {
    getProfile()
  }, [])

  const logout = async() =>{
    try {
      const response = await axios.post('/api/auth/logout')
      router.push('/Login')
      
    } catch (error) {
      console.error(error)
      router.push('/Login')
    }
  }
  
  return (
    <div>

    <h1>Dashboard</h1>
      <p>Bienvenido,{user?.name}</p>
      <button onClick={() => logout()}>
        Logout
      </button>
    </div>
   
  );
};

export default Dashboard;