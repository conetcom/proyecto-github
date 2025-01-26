const express = require('express')
const routes = express.Router()
  
routes.get('/', async(req, res)=>{
        const infoPiscina = await pool.query('SELECT * FROM piscina WHERE id_lectura=req.body.id_lectura')
        if (err) return res.send(err)
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