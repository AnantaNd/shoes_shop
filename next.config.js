
module.exports = {
  optimizeFonts: false,
  reactStrictMode: true,
  serverRuntimeConfig: {
      secret: 'THIS IS USED TO SIGN AND VERIFY JWT TOKENS, REPLACE IT WITH YOUR OWN SECRET, IT CAN BE ANY STRING'
  },
  publicRuntimeConfig: {
      apiUrl: process.env.NODE_ENV === 'development'
          ? 'http://localhost:3000/api'
          : 'https://shoes-shop-green.vercel.app/api' 
  },
  
}
