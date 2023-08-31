import React from "react";

function EmailjsGracias() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-[#d3cbc0]">
      <div className="w-[90%] xl:w-[80%] h-[70%] flex flex-col items-center bg-white">
        <div className="w-[90%] h-full mt-8 flex flex-col justify-center items-center ">
          <img
            src="https://casa-itzimna.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogomenumov.db66bba5.png&w=1920&q=75"
            alt="Casa Itzimná Logo"
            className="w-[80%] lg:w-[30%] "
          />

          <div>
            <h2 className="text-center font-apollo tracking-[4px] text-xl mt-8">
              ORDER CONFIRMATION
            </h2>
            <h3 className="text-center font-apollo tracking-[4px] text-xl text-[#d3cbc0]">
              THANK YOU FOR CHOOSING CASA ITZIMNÁ
            </h3>
            <p className="text-center font-apollo tracking-[2px]">
              WE ARE DELIGHTED TO CONFIRM YOUR ORDER.
            </p>

            <p className="text-center font-apollo tracking-[2px] mt-4">
              If you have any questions or need assistance, please contact us:
            </p>
            
            <p className="text-center font-apollo tracking-[2px]">
              Phone: <a href="tel:+52 55 2879 4515">+52 55 2879 4515</a>
            </p>
            <p className="text-center font-apollo tracking-[2px]">
              Email: <a href="mailto:CASAITZIMNA@HOTELBOUTIQUE.COM">CASAITZIMNA@HOTELBOUTIQUE.COM</a>
            </p>

            <p className="text-center font-apollo tracking-[2px] mt-4">
              You can also find us on social media:
            </p>
            
            <div className="flex justify-center mt-2">
              <a
                href="https://www.instagram.com/casaitzimna/"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2"
              >
                <img src="https://casa-itzimna.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffbcafe.db4ecd46.png&w=128&q=75" alt="Social Media Icon" className="h-6 w-4" />
              </a>
              <a
                href="https://www.facebook.com/casaitzimna/"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2"
              >
                <img src="https://casa-itzimna.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Figcafe.4490dc89.png&w=256&q=75" alt="Social Media Icon" className="h-6 w-6" />
              </a>
              {/* Add more social media links and icons here */}
            </div>

            <p className="text-center font-apollo tracking-[2px] mt-4">
              You can find us on the map:{" "}
              <a href="https://goo.gl/maps/GzpqxsC24WFuUFZS9" target="_blank" rel="noopener noreferrer">
                View on Google Maps
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailjsGracias;
