import { AppContext } from "@/context/StateContext";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";

function AR() {
  const router = useRouter();
  const { productSlug } = router.query;
  const { product, getProduct } = AppContext();

  console.log(productSlug);

  useEffect(() => {
    if (productSlug) {
      getProduct(productSlug);
    }
  }, [productSlug]);

  console.log(product);

  if (!product || product.length === 0) {
    return <div>Loading...</div>;
  }

  console.log(product);

  const ar = product[0].file.asset._ref;
  const newAR = ar
    .replace("file-", "https://cdn.sanity.io/files/kr6xz9vc/production/")
    .replace("-glb", ".glb");
  console.log("AR", newAR);

  return (
    <div>
    <div className='w-full h-[100px] md:h-[150px] lg:h-[250px] bg-[#31302c]'/>

    <div className="flex flex-col justify-start lg:justify-center w-full h-screen  relative">
      
      <div className="flex flex-row justify-center">
        
        
        <model-viewer
        className="center-block relative"
        style={{ width: "100vh", height: "80vh" }}
          src={newAR}
          ar
          ar-modes="webxr scene-viewer quick-look"
          camera-controls
          poster="poster.webp"
          shadow-intensity="1.98"
          exposure="0.86"
          shadow-softness="0.97"
          auto-rotate
          camera-target="0m 0m 0m"
          min-camera-orbit="auto 87deg auto"
          max-camera-orbit="auto 101deg auto"
        >
          <div className="absolute top-5 left-5">
            <Link href="/Boutique">
            <FaArrowLeft className="cursor-pointer w-[40px] h-[40px] xl:w-[50px] xl:h-[50px] text-[#d3cbc0]"/>
            </Link>
          </div>
         
          <button slot="ar-button" className="absolute bottom-[10%] left-[25%] md:left-[35%] xl:hidden xl:bottom-[15%] xl:left-[45%] "  >
            <span  className="rounded-[4px] bg-[#31302c] text-white hover:text-[#d3cbc0] w-[200px] h-[45px] text-xl tracking-[4px] mt-8 font-apollo flex flex-col justify-center">
       Activate AR
            </span>
  </button>
        </model-viewer>
      </div>
    </div>
    </div>
  );
}

export default AR;
