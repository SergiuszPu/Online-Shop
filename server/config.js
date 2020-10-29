module.exports = {
  // PORT: 8000,
  // DB: 'mongodb://localhost:27017/shopapp',
  // DB: 'mongodb+srv://serek85:serek1234@cluster0.pfssk.gcp.mongodb.net/OnlineShop?retryWrites=true&w=majority',
  PORT: process.env.PORT || 3000,
  DB: process.env.DB ? process.env.DB : 'mongodb+srv://serek85:serek1234@cluster0.pfssk.gcp.mongodb.net/OnlineShop?retryWrites=true&w=majority',
  
}; 