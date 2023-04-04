import sanityClient from '@sanity/client' 
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId:'kr6xz9vc',
    dataset:'production',
    apiVersion:'2023-04-04',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)