import React from "react";
import { AppContext } from "@/context/StateContext";

function PrivacyPolicy() {
  const { idioma } = AppContext();

  return (
    <div>
            <div className='w-full h-[100px] md:h-[200px] lg:h-[250px] bg-[#31302c]'/>

    <div className="w-full max-w-4xl mx-auto p-4">
      {idioma === "ingles" ? (
        <div>
          <h1 className="text-3xl font-semibold mb-4">Privacy Policy</h1>
          <p className="mb-4">
            This Privacy Policy describes how Casa Itizimna Boutique 
            collects, uses, and shares your personal information when you use our website.
          </p>
          <h2 className="text-xl font-semibold mb-2">Website Information:</h2>
          <p>
            - Website Name: Casa Itizimna Boutique
            <br />
            - Website URL:{" "}
            <a href="https://www.casaitzimnaboutique.com" className="text-blue-500">
              https://www.casaitzimnaboutique.com
            </a>
          </p>
          <h2 className="text-xl font-semibold mt-4 mb-2">Contact Information:</h2>
          <p>
            - Contact Email:{" "}
            <a href="https://www.casaitzimnaboutique.com/Contacto" className="text-blue-500">
              Contact Link
            </a>
            <br />
            - Contact Phone: +52 55 2879 4515
            <br />
            - Physical Address: AVENIDA PÉREZ PONCE 120, COLONIA ITZIMNÁ, 07100, MÉRIDA, YUCATÁN
          </p>
          <h2 className="text-xl font-semibold mt-4 mb-2">Type of Collected Information:</h2>
          <p>
            We collect the following personal information:
            <br />
            - First Name
            <br />
            - Last Name
            <br />
            - Address
            <br />
            - Email
            <br />
            - Phone
            <br />
            - Browsing Data (via Google Analytics)
            <br />
            - Content of the shopping cart stored in the browser local storage (localstorage)
          </p>
          <h2 className="text-xl font-semibold mt-4 mb-2">Purpose of Data Collection:</h2>
          <p>
            Personal information is collected for the purpose of providing optimal service to our customers and guests. We use this information to process reservations, facilitate product delivery, and provide personalized service.
          </p>
          <h2 className="text-xl font-semibold mt-4 mb-2">Use of Cookies and Tracking:</h2>
          <p>
            We use Google Analytics and local storage in your browser to collect information about user browsing behavior on our website. This helps us improve the user experience and better understand how our site is used.
          </p>
          <h2 className="text-xl font-semibold mt-4 mb-2">Data Security:</h2>
          <p>
            Personal data is stored in our Sanity database, ensuring a high level of security and protection.
          </p>
          <h2 className="text-xl font-semibold mt-4 mb-2">Data Sharing:</h2>
          <p>
            We do not share the collected information with third parties. The provided data is used exclusively for the purposes mentioned above.
          </p>
          <h2 className="text-xl font-semibold mt-4 mb-2">User Rights:</h2>
          <p>
            Users do not have specific rights regarding their personal data on this website, as the data is used solely for processing reservations and product deliveries.
          </p>
          <h2 className="text-xl font-semibold mt-4 mb-2">Consent:</h2>
          <p>
            By clicking the BOOK NOW button on our website, users consent to us collecting and processing their personal data as described in this privacy policy.
          </p>
          <h2 className="text-xl font-semibold mt-4 mb-2">Data Retention Policy:</h2>
          <p>
            Personal data is stored in our database and retained only for as long as necessary for the purposes mentioned above. It will be deleted when no longer needed.
          </p>
        </div>
      ) : (
        <div>
          <h1 className="text-3xl font-semibold mb-4">Política de Privacidad</h1>
          <p className="mb-4">
            Esta Política de Privacidad describe cómo Casa Itizimna Boutique recopila, utiliza y comparte su información personal cuando utiliza nuestro sitio web.
          </p>
          <h2 className="text-xl font-semibold mb-2">Información del Sitio Web:</h2>
          <p>
            - Nombre del Sitio Web: Casa Itizimna Boutique
            <br />
            - URL del Sitio Web:{" "}
            <a href="https://www.casaitzimnaboutique.com" className="text-blue-500">
              https://www.casaitzimnaboutique.com
            </a>
          </p>
          <h2 className="text-xl font-semibold mt-4 mb-2">Información de Contacto:</h2>
          <p>
            - Correo Electrónico de Contacto:{" "}
            <a href="https://www.casaitzimnaboutique.com/Contacto" className="text-blue-500">
              Enlace de Contacto
            </a>
            <br />
            - Teléfono de Contacto: +52 55 2879 4515
            <br />
            - Dirección Física: AVENIDA PÉREZ PONCE 120, COLONIA ITZIMNÁ, 07100, MÉRIDA, YUCATÁN
          </p>
          <h2 className="text-xl font-semibold mt-4 mb-2">Tipo de Información Recopilada:</h2>
          <p>
            Recopilamos la siguiente información personal:
            <br />
            - Nombre
            <br />
            - Apellidos
            <br />
            - Dirección
            <br />
            - Correo Electrónico
            <br />
            - Teléfono
            <br />
            - Datos de navegación (a través de Google Analytics)
            <br />
            - Contenido del carrito de compras almacenado en el almacenamiento local del navegador (localstorage)
          </p>
          <h2 className="text-xl font-semibold mt-4 mb-2">Propósito de la Recopilación de Datos:</h2>
          <p>
            La información personal se recopila con el propósito de proporcionar un servicio óptimo a nuestros clientes y huéspedes. Utilizamos esta información para procesar reservaciones, facilitar la entrega de productos y brindar un servicio personalizado.
          </p>
          <h2 className="text-xl font-semibold mt-4 mb-2">Uso de Cookies y Seguimiento:</h2>
          <p>
            Utilizamos Google Analytics y almacenamiento local en su navegador para recopilar información sobre el comportamiento de navegación de los usuarios en nuestro sitio web. Esto nos ayuda a mejorar la experiencia del usuario y a comprender mejor cómo se utiliza nuestro sitio.
          </p>
          <h2 className="text-xl font-semibold mt-4 mb-2">Seguridad de Datos:</h2>
          <p>
            Los datos personales se almacenan en nuestra base de datos de Sanity, lo que garantiza un alto nivel de seguridad y protección.
          </p>
          <h2 className="text-xl font-semibold mt-4 mb-2">Compartir Datos:</h2>
          <p>
            No compartimos la información recopilada con terceros. Los datos proporcionados se utilizan únicamente para los fines mencionados anteriormente.
          </p>
          <h2 className="text-xl font-semibold mt-4 mb-2">Derechos del Usuario:</h2>
          <p>
            Los usuarios no tienen derechos específicos con respecto a sus datos personales en este sitio web, ya que los datos se utilizan exclusivamente para procesar reservaciones y entregas de productos.
          </p>
          <h2 className="text-xl font-semibold mt-4 mb-2">Consentimiento:</h2>
          <p>
            Al hacer clic en el botón BOOK NOW en nuestro sitio web, los usuarios otorgan su consentimiento para que recopilemos y procesemos sus datos personales según lo descrito en esta política de privacidad.
          </p>
          <h2 className="text-xl font-semibold mt-4 mb-2">Política de Retención de Datos:</h2>
          <p>
            Los datos personales se almacenan en nuestra base de datos y se conservan únicamente mientras sean necesarios para los fines mencionados anteriormente. Se eliminarán cuando ya no sean necesarios.
          </p>
        </div>
      )}
    </div>
    
    </div>
  );
}

export default PrivacyPolicy;
