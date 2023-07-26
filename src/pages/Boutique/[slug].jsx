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
  const [modalOpen, setModalOpen] = useState(true);
  const { product, getProduct } = AppContext();

  useEffect(() => {
    if (slug) {
      getProduct(slug)
    }
  }, [slug]);
  console.log(product)

  return (
    <div>
      <Boutique />
      {product &&
        <ProductoModal
          producto={product}
          isOpen={modalOpen}
          onRequestClose={() => {
            setModalOpen(false);
            router.push('/Boutique');
          }}
        />
      }
    </div>
  );
}

export default Product;
