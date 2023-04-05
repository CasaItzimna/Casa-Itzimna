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
            name: 'people',
            title: 'People',
            type: 'string'
        },
        {
            name: 'begin',
            title: 'Begin',
            type: 'date'
        },
        {
            name: 'end',
            title: 'End',
            type: 'date'
        },
        {
            name: 'comments',
            title: 'Comments',
            type: 'string'
        },
        {
            name: 'total',
            title:'Total',
            type: 'number'
        }

    ]
}