const dev = process.env.NODE_ENV !== 'production'

export const server = dev ? 'http://localhost:3000/' : 'https://sjwca.herokuapp.com/'
export const API = dev ? 'https://sjwca-strapi.herokuapp.com/' : 'https://sjwca-strapi.herokuapp.com/'