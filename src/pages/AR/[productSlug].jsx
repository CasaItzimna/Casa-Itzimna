import { AppContext } from "@/context/StateContext";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

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
        className="center-block"
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
          min-camera-orbit="auto 0deg auto"
          max-camera-orbit="auto 98deg auto"
        >
          {" "}
        </model-viewer>
      </div>
    </div>
    </div>
  );
}

export default AR;
