const dev = process.env.NODE_ENV !== 'production'

export const server = dev ? 'http://localhost:3000/' : 'http://localhost:3000/'
export const API = dev ? 'http://localhost:1337/' : 'https://sjwca-strapi.herokuapp.com/'