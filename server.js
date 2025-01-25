const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')

const routes = require('./routes')

const app = express()
app.set('port', process.env.PORT || 9000)
const dbOptions = {
    host: 'postgresql://wilmerm:z1rTQuZFDHDpI43f4M3mbSt73QXEA9zM@dpg-cu9q8shu0jms73fitbcg-a.oregon-postgres.render.com/informacion_piscina',
    port: 5432,
    user: 'wilmerm',
    password: 'z1rTQuZFDHDpI43f4M3mbSt73QXEA9zM',
    database: 'informacion_piscina'
}

// middlewares -------------------------------------
app.use(myconn(mysql, dbOptions, 'single'))
app.use(express.json())

// routes -------------------------------------------
app.get('/', (req, res)=>{
    res.send('Welcome to my API')
})
app.use('/api', routes)

// server running -----------------------------------
app.listen(app.get('port'), ()=>{
    console.log('server running on port', app.get('port'))
})