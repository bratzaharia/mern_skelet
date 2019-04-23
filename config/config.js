module.exports = {
  port: process.env.PORT || 3000,
  env: process.env.NODE_ENV || 'development',
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoURI:
    "mongodb+srv://bratzaharia:!roxana2010@cluster0-cvnr1.mongodb.net/devconnector?retryWrites=true"
};