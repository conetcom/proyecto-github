const express = require('express')
const pg = require('pg') 
const { Pool, Client } = pg
//const mysql = require('mysql')
//const myconn = require('express-myconnection')
const pool = new Pool({
    url: 'postgresql://wilmerm:z1rTQuZFDHDpI43f4M3mbSt73QXEA9zM@dpg-cu9q8shu0jms73fitbcg-a/informacion_piscina',
    host: 'dpg-cu9q8shu0jms73fitbcg-a',
    port: 5432,
    user: 'wilmerm',
    password: 'z1rTQuZFDHDpI43f4M3mbSt73QXEA9zM',
    database: 'informacion_piscina'
}
)

const app = express()
 
// you can also use async/await

const routes = require('./routes')


app.set('port', process.env.PORT || 9000)

// middlewares -------------------------------------
//app.use(myconn(mysql, dbOptions, 'single'))
app.use(express.json())

// routes -------------------------------------------
app.get('/', async(req, res)=>{
    const infoPiscina = await pool.query('SELECT * FROM piscina WHERE id_lectura=${req.params.id_lectura}')
    console.log(infoPiscina)
    res.send(infoPiscina.rows[0])
})
app.use('/api', routes)

// server running -----------------------------------
app.listen(app.get('port'), ()=>{
    console.log('server running on port', app.get('port'))
})