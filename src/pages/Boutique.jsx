import { AppContext } from '@/context/StateContext'
import React, { useEffect, useState } from 'react'

function Boutique() {
  const {productos, getProductos} = AppContext()
  
  useEffect(() => {
    getProductos()
  }, [])

  console.log(productos)
  
  return (
    <div>Boutique</div>
  )
}

export default Boutique