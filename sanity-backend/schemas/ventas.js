// schemas/venta.js

export default {
    name: 'ventas',
    title: 'Ventas',
    type: 'document',
    fields: [
        {
            name: 'registerDate',
            title: 'Register Date',
            type: 'datetime'
          },
     
      {
        name: 'productos',
        title: 'Productos',
        type: 'array',
        of: [{ type: 'reference', to: [{ type: 'productos' }] }],
      },
      {
        name: "nombre",
        title: "Nombre",
        type:"string"
      },
      {
        name: "correo",
        title: "Correo",
        type:"string"
      },
      {
        name: "telefono",
        title: "Telefono",
        type:"string"
      },
      {
        name: "estado",
        title: "Estado",
        initialValue: 'pendiente',
        type:"string"
      },
      {
        name: "comentarios",
        title: "Comentarios",
        type:"string"
      },
      // Otros campos relacionados con la venta (p. ej., total, cliente, etc.)
    ],
  };
  