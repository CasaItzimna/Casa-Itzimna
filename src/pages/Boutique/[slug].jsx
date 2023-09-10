import React, { useState } from 'react'
import { useRouter } from 'next/router';
import { AppContext } from '@/context/StateContext';
import { useEffect } from 'react';
import Boutique from '../Boutique';
import Modal from "./Modal/Modal";
import ProductoModal from './ProductoModal';

function Product() {
  const router = useRouter();
  const { slug } = router.query;
  const [modalOpen, setModalOpen] = useState(false);
  const { product, getProduct } = AppContext();

  useEffect(() => {
    if (slug) {
      getProduct(slug)
    }
  }, [slug]);

  useEffect(() => {
    // Abrir el modal una vez que el producto se haya cargado exitosamente
    if (product) {
      setModalOpen(true);
    }
  }, [product]);


  return (
    <div>
      <Boutique />
       {product && modalOpen && (
        <ProductoModal
          producto={product}
          isOpen={modalOpen}
          onRequestClose={() => {
            setModalOpen(false);
            router.push('/Boutique');
          }}
        />
      )}
    </div>
  );
}

export default Product;
