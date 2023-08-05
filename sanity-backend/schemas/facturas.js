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
            type: 'date'
        },
        {
            name: 'id_fiscal',
            title: 'ID FISCAL',
            type: 'string',
          
        },
        {
            name:"calle",
            title: "CALLE",
            type:"string"
        },
        {
            name:"pais",
            title: "PAIS",
            type:"string"
        },
        {
            name:"ciudad",
            title: "CIUDAD",
            type:"string"
        },
        {
            name:"codigo_postal",
            title: "CODIGO_POSTAL",
            type:"string"
        },
        {
            name: 'total',
            title:'Total',
            type: 'number'
        },
        {
            name: 'state',
            title: 'State',
            type: 'boolean',
            initialValue: true
            
        },
         {
      name: 'registerDate',
      title: 'Register Date',
      type: 'datetime'
    },

    ]
}