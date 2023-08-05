const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
import {updateReservacion} from '../../context/StateContext'

export default async function handler(req, res) {
    if (req.method === 'POST') {
        console.log(req.body)
        console.log(req.body.items[0].price)
        try {
          
            const params = {
                submit_type: 'pay',
                mode: 'payment',
                payment_method_types: ['card'],
                billing_address_collection: 'required',
                shipping_address_collection: {
                    allowed_countries: ['US', 'CA', 'MX'],
                },
                shipping_options: [
                    { shipping_rate: 'shr_1NW71mH0fQs7emygxtUXa48C' },
                    { shipping_rate: 'shr_1NW72tH0fQs7emygSPggidLu' },
                ],
                
                tax_id_collection: {
                  enabled: true,
                },
                line_items:  req.body.items.map((item, index) =>{
                 return{   
                      price_data: {
                        currency: 'mxn',
                        product_data: {
                          name: item.name,
                          description: item.tipo
                        },
                        unit_amount: item.price*100, // El precio del producto en centavos (1000 representa $10.00 MXN)
                      },
                      quantity: 1, // Cantidad de este producto que se agregará a la sesión de pago
                    
                }
            }),
                    /* Puedes incluir más objetos para agregar más productos a la sesión de pago */
                success_url: `${req.headers.origin}/Confirmacion?session_id={CHECKOUT_SESSION_ID}`,
                cancel_url: `${req.headers.origin}/ErrorPago`,
                
            }

            // Create Checkout Sessions from body params.
            const session = await stripe.checkout.sessions.create(params);
            res.status(200).json(session);
          } catch (err) {
            console.error(err); // Agrega esta línea para registrar el error en la consola
            res.status(err.statusCode || 500).json(err.message);
          }
        } else {
          res.setHeader('Allow', 'POST');
          res.status(405).end('Method Not Allowed');
        }
}
