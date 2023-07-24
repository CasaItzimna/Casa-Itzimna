// schemas/venta.js

export default {
    name: 'venta',
    title: 'Venta',
    type: 'document',
    fields: [
        {
            name: 'registerDate',
            title: 'Register Date',
            type: 'datetime'
          },
      {
        name: 'reservaciones',
        title: 'Reservaciones',
        type: 'array',
        of: [{ type: 'reference', to: [{ type: 'reservacion' }] }],
      },
      {
        name: 'productos',
        title: 'Productos',
        type: 'array',
        of: [{ type: 'reference', to: [{ type: 'producto' }] }],
      },
      {
        name:'total',
        title:'Total',
        type: 'number'
      }
      // Otros campos relacionados con la venta (p. ej., total, cliente, etc.)
    ],
  };
  