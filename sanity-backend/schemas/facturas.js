export default{
    name: 'facturas',
    type: 'document',
    title: 'Facturas',
    fields: [
        {
            name: 'name',
            title: 'name',
            type: 'string'
        }
        ,{
            name: 'phone',
            title: 'Phone',
            type: 'string'
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string',
        },
        {
            name: 'date',
            title: 'Date',
            type: 'string'
        },
        {
            name: 'rfc',
            title: 'RFC',
            type: 'string'
        },
        {
            name: 'total',
            title:'Total',
            type: 'number'
        },
         {
      name: 'registerDate',
      title: 'Register Date',
      type: 'datetime'
    },

    ]
}