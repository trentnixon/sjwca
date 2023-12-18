const dev = process.env.NODE_ENV !== 'production'


export const server = dev ? '/' : '/'
export const API = dev ? 'https://sjwca-strapi.herokuapp.com/' : 'https://sjwca-strapi.herokuapp.com/';
