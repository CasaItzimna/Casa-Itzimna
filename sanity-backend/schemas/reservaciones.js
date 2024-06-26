export default{
    name: 'reservaciones',
    type: 'document',
    title: 'Reservaciones',
    fields: [
        {
            name: 'name',
            title: 'name',
            type: 'string'
        }
        ,{
            name: 'tel',
            title: 'Tel',
            type: 'string'
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string',
        },
        {
            name: 'guests',
            title: 'Guests',
            type: 'string'
        },
        {
            name: 'checkin',
            title: 'Check-in',
            type: 'date'
        },
        {
            name: 'checkout',
            title: 'Check-Out',
            type: 'date'
        },
        {
            name: 'plan',
            title: 'Plan',
            type: "string"
        },
        {
            name: "experience",
            title: "Experience",
            type: 'array',
            of:[{type:"string"}]
        },
        {
            name: 'comments',
            title: 'Comments',
            type: 'string'
        },
        {
            name: 'total',
            title:'Total',
            type: 'string'
        },
        {
            name: 'status',
            title:'Status',
            type: 'string'
        },
        {
            name: 'idioma',
            title: 'Idioma',
            type:'string'
        },
        {
            name: 'registerDate',
            title: 'Register Date',
            type: 'datetime'
          },

    ]
}