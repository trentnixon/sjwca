const dev = process.env.NODE_ENV !== 'production'

export const server = dev ? 'http://localhost:3000' : 'https://yourwebsite.com'
export const API = dev ? 'http://localhost:1337' : 'https://yourwebsite.com'