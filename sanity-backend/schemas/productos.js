export default {
    name: 'producto',
    type: 'document',
      title: 'Producto',
    fields: [
      
      {
        name: 'name',
        title: 'Name',
        type: 'string'
      }
      ,
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 96
        }
      },
      
      {
        name: 'details',
        title: 'Details',
        type: 'string'
      },
      {
        name: 'description',
        title: 'Description',
        type: 'string'
      },
      {
        name: 'category',
        title: 'Category',
        type: 'reference',
        to:[{
          type: 'category'
        }]
      },
      
      
      
      {
        name: 'image',
        title: 'Imagen',
        type: 'array',
            of:[{type: 'image'}],
        options:{
          hotspot: true
        }
      },
      {
        name: 'file',
        title: 'Archivo',
        type: 'file'
      }
    ]
  }