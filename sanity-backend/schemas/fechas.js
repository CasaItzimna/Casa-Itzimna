export default {
    name: 'fechas',
    type: 'document',
    title: 'Fechas',
    fields:[
        {
            name: 'nombre',
            title:"Nombre",
            type: "string"
        },
        {
            name: 'fecha',
            title: 'Fecha',
            type: 'date'
        },
        {
            name: 'precioSelect',
            title: 'Precio Select',
            type: 'number'
        },
        {
            name: 'precioLuxury',
            title: 'Precio Luxury',
            type: 'number'
        },
    
        {
            name: 'precioPremier',
            title: 'Precio Premier',
            type: 'number'
        }
    ]
    
}