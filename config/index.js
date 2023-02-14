const dev = process.env.NODE_ENV !== 'production'


export const server = dev ? '/' : '/'
export const API = dev ? 'http://localhost:1337/' : 'https://sjwca-strapi.herokuapp.com/';
