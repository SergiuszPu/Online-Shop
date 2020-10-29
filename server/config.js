module.exports = {
  // PORT: 8000,
  // DB: 'mongodb://localhost:27017/shopapp',
  // DB: 'mongodb+srv://serek85:serek1234@cluster0.pfssk.gcp.mongodb.net/OnlineShop?retryWrites=true&w=majority',
  PORT: process.env.PORT || 8000,
  DB: process.env.PORT ? process.env.PORT : 'mongodb+srv://serek85:serek1234@cluster0.pfssk.gcp.mongodb.net/OnlineShop?retryWrites=true&w=majority',
  
}; 