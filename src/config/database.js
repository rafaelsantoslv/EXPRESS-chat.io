require('dotenv/config')
module.exports = {
  dialect: process.env.DATABASE_DIALECT,
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USER,
  password: '123456',
  database: process.env.DATABASE_DB,
  port: '5432',
  define: {
    timestamps: true,
    undescored: true
  }
}
