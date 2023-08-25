export default{
    name: 'experiencias',
    type: 'document',
    title: 'Experiencias',
    fields: [
        {
            name: 'nombre',
            title: 'Nombre',
           type: 'string'
        },
        {
            name: 'nombreENG',
            title: 'NombreENG',
            type: 'string'
        },
        {
            name: 'descripcion',
            title: 'descripcion',
            type: 'string'
        },
        {
            name: 'descripcionENG',
            title: 'DescripcionENG',
            type: 'string'
        },
        {
            name: 'precio',
            title: 'Precio',
            type: 'number'
        },
        {
            name: 'image',
            title: 'Imagen',
            type: 'array',
            of: [{ type: 'image' }],
            options: {
              hotspot: true
            }
          },
    ]
}