let pg = require('pg')
let client = new pg.Client(
   {
        user: 'postgres',
        password: '123456',
        database: 'csv',
        host: 'localhost',
        protected: 5432
   }
)

client.connect()

client.query('select * from dm_nv limit 1', function(err, result) {
    console.log(err, result.rows)
})

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    client.query('select * from dm_nv limit 1', function(err, result) {
        res.send(JSON.stringify(result.rows))
        client.end()
    })
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
