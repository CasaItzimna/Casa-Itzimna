import React from "react";
import { AppContext } from "@/context/StateContext";

function TermsAndConditions() {
  const { idioma } = AppContext();

  return (
    <div>
    <div className='w-full h-[100px] md:h-[200px] lg:h-[250px] bg-[#31302c]'/>
    <div className="w-full max-w-4xl mx-auto p-4">
      {idioma === "ingles" ? (
        <div>
          <h1 className="text-3xl font-semibold mb-4">Terms and Conditions</h1>
          <h2 className="text-xl font-semibold mt-4 mb-2">Frequently Asked Questions</h2>
          <h3 className="text-lg font-semibold mt-2">Reservations</h3>
          <p>
            - Have I completed the reservation process, what should I do now?
            <br />
            Once your confirmation number is displayed on your screen and sent to you by email, your reservation is already registered in our system. We suggest keeping the reservation information for your personal records and any clarification.
            <br /><br />
            - What is the minimum stay?
            <br />
            There is a minimum booking requirement for 2 nights. Reservations are subject to availability.
            <br /><br />
            - How do I confirm my reservation?
            <br />
            You can confirm your reservation by paying in full.
            <br /><br />
            - Do the prices include taxes?
            <br />
            Yes, taxes are included.
            <br /><br />
            - Do I need to leave a credit card as a guarantee?
            <br />
            Yes, you will be asked for a guarantee card from the moment of your reservation.
            <br /><br />
            - Can I cancel my reservation?
            <br />
            There is a 50% cancellation fee of the total reservation for any cancellation notice received up to 2 weeks before the reservation. And a 100% cancellation fee of the total reservation for any cancellation notice 2 weeks from the arrival date. To obtain a full accommodation fee refund, the cancellation must be made within 48 hours of the reservation.
            <br /><br />
            - My travel plans have changed. How can I cancel or modify my reservation online?
            <br />
            In the Check Your Reservation section, you can make the necessary changes based on the change and cancellation policies, subject to availability.
            <br /><br />
            - What happens if I break or damage something?
            <br />
            Each item and piece of furniture is inventoried along with its replacement value. If the broken or damaged item is an item for sale, you will be charged the cost of the item. If the damage is to a piece of furniture and it can be repaired, a quote will be made for the damage and the amount will be charged. In case it cannot be repaired, the replacement value will be reviewed and the charge will be processed. If damage is caused to the property, as in the previous case, a quote will be requested and the customer will bear the cost. It is much faster and easier to remedy cases of broken or damaged items if you inform us while you are still at Casa Itzimná Boutique.
            <br /><br />
            - What is the minimum age for making a reservation?
            <br />
            To make a reservation in your name, you must be legally of legal age.
            <br /><br />
            - Is Casa Itzimná Boutique prepared to receive guests with disabilities?
            <br />
            Being an old Mansion, Casa Itzimná Boutique is distributed on a single floor, which helps elderly or disabled people to move freely within the general areas, only adapting provisional ramps for these situations.
            <br /><br />
            - When booking, they request personal information from me. What will it be used for?
            <br />
            The information you provide us will only be used to guarantee and register your reservation or, in the event of an unforeseen event, to contact you.
            <br /><br />
            - What are the check-in and check-out times?
            <br />
            The check-in time at Casa Itzimná Boutique is from 3:00 p.m. on the day of arrival and ends at 12:00 p.m. Late checkouts will have an extra charge, as long as we have availability.
            <br /><br />
            - What is the maximum guest occupancy?
            <br />
            Please note that the occupancy is from 6 to 8 people maximum, including in the prices of your reservation. Each additional guest will have an extra cost from the ninth onwards. You are responsible for not exceeding the maximum occupancy agreed at the beginning of the reservation; otherwise, access to the registered guests will be restricted, requesting that additional guests be removed from the property if you overlook this requirement.
            <br /><br />
            - Can I smoke at Casa Itzimná Boutique?
            <br />
            No. Our Mansion is strictly non-smoking, 100% tobacco smoke-free space. In case we are aware that such activity took place inside the property, a penalty will be charged according to the current law for smoke-free spaces.
          </p>
          <h2 className="text-xl font-semibold mt-4 mb-2">Payments</h2>
          <p>
            - Is it safe to provide my card number when booking?
            <br />
            Yes, the data provided on our site travels and is stored on our server through a secure or encrypted connection. This means that it is inaccessible from the Internet, and no one can intercept the transmitted information.
            <br /><br />
            - Is the credit card charge made when confirming the reservation?
            <br />
            When confirming your reservation, the full charge is made.
            <br /><br />
            - Can an additional charge be made to the card I left as a guarantee?
            <br />
            Due to the confidential information protection and management law, only charges for penalties are allowed. Any additional purchase or charge must be made directly on the website or through a deposit.
            <br /><br />
            - What payment methods does Casa Itzimná Boutique accept?
            <br />
            Credit or debit cards, cash, deposits, and interbank transfers.
          </p>
          <h2 className="text-xl font-semibold mt-4 mb-2">Website</h2>
          <p>
            - How can I find out the location of Casa Itzimná Boutique?
            <br />
            When entering the Casa Itzimná Boutique website and selecting the location section, you can find this data below the photograph of the property. You can also view a map.
            <br /><br />
            - What type of information and services can I get from your Online Help?
            <br />
            Our executives can guide you with any questions you have about this website, reservations, information about our mansion, and can assist you in making a reservation.
            <br /><br />
            - Im trying to get personalized online help, but nothing appears. Am I doing something wrong?
            <br />
            Check that your Internet browser (Internet Explorer, Safari, Firefox, etc.) is not blocking pop-ups or pop-up windows. If so, temporarily disable this function in the Internet Options section of your browser.
            <br /><br />
            - Is it safe to shop on the website?
            <br />
            Yes, the data provided on our site travels and is stored on our server through a secure or encrypted connection.
            <br /><br />
            - What is the origin of the products in the Online Store?
            <br />
            In the Boutique section of our website, you can find artisanal products from different states of Mexico.
            <br /><br />
            - Do I receive the same product as shown in the photograph?
            <br />
            Yes, in our Store section, all products offered are unique as they are made artisanally. Therefore, it is the same as the customer receives. However, colors may vary depending on the device where the products are being displayed. Consequently, you should check the item you received to verify that it does not have any unusual detail that may alter its quality.
            <br /><br />
            - How can I be sure that the purchase was made correctly?
            <br />
            At the moment you finish your purchase, the confirmation is displayed on your screen and sent to you by email with the details of your order; your purchase is already registered in our system. We suggest keeping the information for your personal control.
            <br /><br />
            - Is it possible to know the status of my order?
            <br />
            Yes, once the purchase is confirmed, the confirmation will be sent to you by email, and later the tracking number will be sent to you according to the selected shipping method.
            <br /><br />
            - What should I do if the item I received is incorrect or has defects?
            <br />
            At the moment you receive your product and it is incorrect or has a manufacturing defect, contact us at clientes@casaitzimnaboutique.com, where we will indicate how to proceed with the exchange or return. It is important to clarify that it can only be claimed within the first 7 days after receiving your product, as long as the damage is due to a defect and not to misuse or damage caused by the courier.
          </p>
          <h2 className="text-xl font-semibold mt-4 mb-2">Services</h2>
          <p>
            - How often is Casa Itzimná Boutique cleaned?
            <br />
            Casa Itzimná Boutique is professionally cleaned and inspected before, during, and after each reservation to ensure that all guests have a comfortable and clean stay. The service is included.
            <br /><br />
            - Are pets allowed to enter?
            <br />
            No, pets are not allowed as we have local natural fauna that we take care of. At Casa Itzimná Boutique, only guide dogs are accepted. It is necessary to present the documentation that accredits them, wearing the harness, provided that they are responsible for any damage to the property or any item.
            <br /><br />
            - What type of fauna do you have?
            <br />
            We have opossums, iguanas, birds, frogs, and fish.
            <br /><br />
            - What should I do if I need help or information during my stay?
            <br />
            You can contact us by phone or through WhatsApp, where we will be available to answer any of your questions during regular business hours.
            <br /><br />
            - Do you have parking?
            <br />
            We have 5 private parking spaces at no extra cost for guests.
            <br /><br />
            - Is there any extra activity?
            <br />
            Yes, we have different activities; we invite you to check all our available activities on the Experiences page.
            <br /><br />
            - Do the activities have an extra cost?
            <br />
            Yes, you can check our Experiences section, where you can see all the information.
          </p>
          <h2 className="text-xl font-semibold mt-4 mb-2">Billing</h2>
          <p>
            - How do I request an invoice?
            <br />
            To request your invoice, you can do it directly on the Casa Itzimná Boutique website in the Billing section, providing your tax information and reservation code. You can also share the information with us at clientes@casaitzimnaboutique.com. It is important to mention that the invoice can only be requested within the month of your stay/consumption for the preparation and/or correction of your invoice.
            <br /><br />
            - Can I invoice a penalty charge?
            <br />
            Yes, it is possible to invoice them within the month of your stay. To do this, we ask you to share your tax information and reservation code with us at clientes@casaitzimnaboutique.com.
            <br /><br />
            - Can I invoice a charge for breaking or damaging something?
            <br />
            Yes, it is possible to invoice them within the month of your stay. This only applies in the event that the item is an object for sale within Casa Itzimná Boutique. In case the damage is to a movable or immovable property, the billing will be borne by the store or service provider. To do this, we ask you to share your tax information and reservation code with us at clientes@casaitzimnaboutique.com.
            <br /><br />
            - When can I invoice?
            <br />
            Since Casa Itzimná Boutique issues invoices for services provided, the invoice can be issued once the guest has left, made a consumption in the Additional Services section, or made a purchase in our Store section. To invoice, you can provide your information directly on our website in the Billing section or share your tax information and reservation code with us at clientes@casaitzimnaboutique.com.
          </p>
        </div>
      ) : (
        <div>
          <h1 className="text-3xl font-semibold mb-4">Términos y Condiciones</h1>
          <h2 className="text-xl font-semibold mt-4 mb-2">Preguntas Frecuentes</h2>
          <h3 className="text-lg font-semibold mt-2">Reservaciones</h3>
          <p>
            - ¿He finalizado el proceso de reservación, ¿qué debo hacer ahora?
            <br />
            Desde el momento en que su número de confirmación se despliega en su pantalla y le es enviado por correo electrónico, su reservación ya está registrada en nuestro sistema. Le sugerimos guardar la información de su reservación para su control personal y para cualquier aclaración.
            <br /><br />
            - ¿Cuál es la estancia mínima?
            <br />
            Hay un requisito mínimo de reserva por 2 noches. Las reservas están sujetas a disponibilidad.
            <br /><br />
            - ¿Cómo confirmo mi reserva?
            <br />
            Puedes confirmar tu reserva liquidando al 100%
            <br /><br />
            - ¿Los precios incluyen impuestos?
            <br />
            Sí, los impuestos están incluidos.
            <br /><br />
            - ¿Necesito dejar una tarjeta en garantía?
            <br />
            Sí, se te solicitará una tarjeta en garantía desde el momento de su reservación.
            <br /><br />
            - ¿Puedo cancelar mi reservación?
            <br />
            Hay un cargo por cancelación del 50% del total de la reserva por cualquier notificación de cancelación recibida hasta 2 semanas antes de la reserva. Y un cargo por cancelación del 100% del total de la reserva por cualquier notificación de cancelación 2 semanas a partir de la fecha de llegada. Para obtener el reembolso completo de la tarifa de alojamiento, la cancelación debe realizarse dentro de las 48 horas posteriores a la reservación.
            <br /><br />
            - Mis planes de viaje han cambiado. ¿Cómo puedo cancelar o modificar mi reservación en línea?
            <br />
            En el apartado ¨Consulta tu reservación¨ podrás generar los movimientos que requieras, en base a las políticas de cambios y cancelaciones, esto último sujeto a disponibilidad.
            <br /><br />
            - ¿Qué pasa si rompo o daño algo?
            <br />
            Cada artículo y bienes muebles se encuentran inventariados junto con su valor de reemplazo,  si el artículo roto o dañado es algún objeto que está a la venta se te cobrara el costo del mismo, si el daño es a un bien mueble y este tiene reparación se hará una cotización por el daño y se cobrará el monto del mismo, en dado caso que este no tenga reparación se revisara el monto de su valor de reemplazo y se procederá al cobro, si el daño causado es al inmueble tal como en el caso anterior se procederá a solicitar una cotización y el costo lo absorberá el cliente. Es mucho más rápido y sencillo remediar los casos de artículos rotos o dañados si nos informan mientras usted todavía está en la Casa Itzimná Boutique.
            <br /><br />
            - ¿Cuál es la edad mínima para realizar una reservación?
            <br />
            Para que pueda realizar una reserva a su nombre debe ser legalmente mayor de edad.
            <br /><br />
            - ¿Casa Itzimná Boutique está preparada para recibir huéspedes con alguna discapacidad?
            <br />
            Al ser una Casona antigua Casa Itzimná Boutique se encuentra distribuida en una sola planta, lo que ayuda a que personas de edad avanzada o con alguna discapacidad se puedan mover libremente dentro de las áreas generales solo adaptando rampas provisionales para estas situaciones.
            <br /><br />
            - Al reservar me solicitan información personal. ¿Qué uso se le dará?
            <br />
            La información que usted nos proporciona, únicamente se utilizará para garantizar y registrar su reservación, o bien, para poderlo contactar en caso de un imprevisto.
            <br /><br />
            - ¿Cuáles son los horarios del Check in y Chek out?
            <br />
            La hora de entrada a Casa Itzimná Boutique es a partir de las 3:00 p.m. el día de llegada y termina a las 12:00 p.m. Las salidas tardías tendrán un cargo extra, siempre y cuando contemos con disponibilidad.
            <br /><br />
            - ¿Cuál es la ocupación máxima de huéspedes?
            <br />
            Por favor tome en cuenta que la ocupación es de 6 a 8 personas máximo incluidos dentro de los precios de su reservación. Cada huésped adicional tendrá un costo extra a partir del noveno. Usted es responsable de no exceder la ocupación máxima acordada al inicio de la reserva, de lo contario se restringirá el acceso al número de huéspedes registrados, solicitando se retiren de la propiedad a los huéspedes adicionales si pasa por alto este requisito.
            <br /><br />
            - ¿Puedo fumar en Casa Itzimná Boutique?
            <br />
            No. Nuestras Casona es estrictamente para no fumadores, espacio 100% libre de humo de tabaco, en caso de tener el conocimiento de que se efectuó dicha actividad dentro de la propiedad se le cobrara una penalización según la ley vigente para espacios libres de humo de tabaco.
          </p>
          <h2 className="text-xl font-semibold mt-4 mb-2">Pagos</h2>
          <p>
            - ¿Es seguro proporcionar mi número de tarjeta al reservar?
            <br />
            Sí, los datos proporcionados en nuestro sitio viajan y se almacenan en nuestro servidor a través de una conexión segura o encriptada. Esto quiere decir que es inaccesible desde Internet y que nadie podrá interceptar la información transmitida.
            <br /><br />
            - ¿El cargo a mi tarjeta de crédito se hace al momento de confirmar la reservación?
            <br />
            Al confirmar tu reserva se hace el cobro del 100%
            <br /><br />
            - ¿Me pueden realizar un cargo adicional a la tarjeta que dejé como garantía?
            <br />
            Debido a la ley de protección y manejo de la información confidencial únicamente se permite el cargo por penalizaciones. Cualquier compra o cargo adicional debe hacerse directamente en la página o a través de un depósito.
            <br /><br />
            - ¿Qué métodos de pago acepta Casa Itzimná Boutique?
            <br />
            Tarjetas de crédito o débito, efectivo, depósito y transferencias interbancarias.
          </p>
          <h2 className="text-xl font-semibold mt-4 mb-2">Página Web</h2>
          <p>
            - ¿Cómo puedo saber la ubicación la Casa Itzimná Boutique?
            <br />
            Al entrar en la página de Casa Itzimná Boutique y seleccionar el apartado de ubicación puede encontrar este dato, debajo de la fotografía de la propiedad, así mismo podrá visualizar un mapa.
            <br /><br />
            - ¿Qué tipo de información y servicios puedo obtener de su Ayuda en línea?
            <br />
            Nuestros ejecutivos podrán orientarlo con las dudas que tenga sobre este sitio web, sobre reservaciones, información de nuestra casona y pueden ayudarlo a reservar.
            <br /><br />
            - Estoy intentando obtener ayuda personalizada en línea pero no me aparece nada. ¿Estoy haciendo algo mal?
            <br />
            Verifique que su navegador de Internet (Internet Explorer, Safari, Firefox, etc.) no esté bloqueando los pop-ups o ventanas emergentes. En caso de ser así, desactive temporalmente esta función en la sección Opciones de Internet de su navegador.
            <br /><br />
            - ¿Es seguro comprar en la página?
            <br />
            Sí, los datos proporcionados en nuestro sitio viajan y se almacenan en nuestro servidor a través de una conexión segura o encriptada.
            <br /><br />
            - ¿Cuál es el origen de los productos de la Tienda en línea?
            <br />
            En la sección de Boutique de nuestro sitio web puede encontrar productos artesanales de diferentes estados de México.
            <br /><br />
            - ¿Recibo el mismo producto que se muestra en la fotografía?
            <br />
            Sí, en nuestra sección de Tienda todos los productos ofertados son únicos ya que son realizados artesanalmente, por lo que es el mismo que el cliente recibe. Sin embargo, los colores pueden variar dependiendo del dispositivo donde se estén visualizando los productos, por lo que le sugerimos revisar el artículo que recibió para verificar que no tenga algún detalle inusual que altere su calidad.
            <br /><br />
            - ¿Cómo puedo estar seguro de que la compra se realizó correctamente?
            <br />
            Al momento de concluir su compra se le desplegará la confirmación en su pantalla y se le enviará por correo electrónico con los detalles de su orden, su compra ya está registrada en nuestro sistema. Sugerimos guardar la información para su control personal.
            <br /><br />
            - ¿Es posible conocer el estado de mi pedido?
            <br />
            Sí, una vez confirmada la compra se le envía la confirmación por correo electrónico y posteriormente se le envía el número de rastreo de acuerdo al método de envío seleccionado.
            <br /><br />
            - ¿Qué debo hacer si el artículo que recibí es incorrecto o tiene defectos?
            <br />
            Al momento de recibir su producto y este sea incorrecto o tenga un defecto de fabricación, contáctenos al correo clientes@casaitzimnaboutique.com, donde le indicaremos cómo proceder con el cambio o devolución. Es importante aclarar que solo se podrá reclamar dentro de los primeros 7 días posteriores a haber recibido su producto, siempre y cuando el daño sea por un defecto y no por un mal uso o daño ocasionado por la paquetería.
          </p>
          <h2 className="text-xl font-semibold mt-4 mb-2">Servicios</h2>
          <p>
            - ¿Con qué frecuencia se limpia Casa Itzimná Boutique?
            <br />
            Casa Itzimná Boutique se limpia y se inspecciona profesionalmente antes, durante y después de cada reserva para garantizar que todos los huéspedes tengan una estancia cómoda y limpia. El servicio está incluido.
            <br /><br />
            - ¿Se permiten mascotas?
            <br />
            No, no se permiten mascotas ya que contamos con fauna natural local que cuidamos. En Casa Itzimná Boutique únicamente se aceptan perros guía, es necesario presentar la documentación que los acredite, portar el arnés, siempre y cuando sean responsables de algún daño en la propiedad o en algún artículo.
            <br /><br />
            - ¿Qué tipo de fauna tienen?
            <br />
            Contamos con tlacuaches, iguanas, aves, ranas y peces.
            <br /><br />
            - ¿Qué debo hacer si necesito ayuda o información durante mi estancia?
            <br />
            Puede ponerse en contacto con nosotros por teléfono o a través de WhatsApp, donde estaremos disponibles para responder a cualquiera de sus preguntas durante el horario de atención.
            <br /><br />
            - ¿Tienen estacionamiento?
            <br />
            Contamos con 5 espacios de estacionamiento privados sin costo adicional para los huéspedes.
            <br /><br />
            - ¿Existen actividades adicionales?
            <br />
            Sí, contamos con diferentes actividades, lo invitamos a consultar todas nuestras actividades disponibles en la página de Experiencias.
            <br /><br />
            - ¿Tienen un costo adicional las actividades?
            <br />
            Sí, puede consultar nuestra sección de Experiencias, donde podrá ver toda la información.
          </p>
          <h2 className="text-xl font-semibold mt-4 mb-2">Facturación</h2>
          <p>
            - ¿Cómo solicito una factura?
            <br />
            Para solicitar su factura puede hacerlo directamente en la página de Casa Itzimná Boutique en el apartado de Facturación, proporcionando su información fiscal y código de reservación. También puede compartirnos la información al correo clientes@casaitzimnaboutique.com. Es importante mencionar que la factura solo se podrá solicitar dentro del mes de su estancia/consumo para la elaboración y/o corrección de su factura.
            <br /><br />
            - ¿Puedo facturar un cargo por penalización?
            <br />
            Sí, es posible facturarlos dentro del mes de su estancia. Para esto le solicitamos que comparta su información fiscal y código de reservación al correo clientes@casaitzimnaboutique.com.
            <br /><br />
            - ¿Puedo facturar un cargo por romper o dañar algo?
            <br />
            Sí, es posible facturarlos dentro del mes de su estancia. Esto únicamente aplica en caso de que el artículo sea un objeto que está a la venta dentro de Casa Itzimná Boutique. En caso de que el daño sea a un bien mueble o inmueble, la facturación la absorberá la tienda o el proveedor del servicio. Para esto le solicitamos que comparta su información fiscal y código de reservación al correo clientes@casaitzimnaboutique.com.
            <br /><br />
            - ¿Cuándo puedo facturar?
            <br />
            Ya que Casa Itzimná Boutique emite facturas por los servicios prestados, la factura se podrá solicitar una vez que el huésped haya concluido, haya realizado un consumo en el apartado de Servicios Adicionales o haya realizado alguna compra en nuestra sección de Boutique. Para facturar puede proporcionar su información directamente en nuestra página en el apartado de Facturación o compartir su información fiscal y código de reservación al correo clientes@casaitzimnaboutique.com.
          </p>
        </div>
      )}
    </div>
    </div>
  );
}

export default TermsAndConditions;
