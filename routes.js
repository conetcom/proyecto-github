const express = require('express')
const routes = express.Router()
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
  
routes.get('/', async(req, res)=>{
        const infoPiscina = await pool.query('SELECT * FROM piscina WHERE id_lectura=req.body.id_lectura')
        if (err) return res.send("error consulta")
        res.json(infoPiscina.row[{}])
    })
      
    routes.post('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('INSERT INTO piscina set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err)

            res.send('lectura almacenada!')
        })
    })
})

routes.delete('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('DELETE FROM pisicina WHERE id = ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('book excluded!')
        })
    })
})

routes.put('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('UPDATE piscina set ? WHERE id = ?', [req.body, req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('actualizado dato!')
        })
    })
})

module.exports = routes