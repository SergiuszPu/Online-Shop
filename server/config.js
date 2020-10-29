module.exports = {
  PORT: process.env.NODE_ENV || 8000,
  DB: process.env.DB ? process.env.PORT : 'mongodb+srv://serek85:serek1234@cluster0.pfssk.gcp.mongodb.net/OnlineShop?retryWrites=true&w=majority',
}; 