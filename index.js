const express = require('express')
const app = express()
const port = 3003

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/headers/host', (req, res) => {
    res.send(req.headers.host);
})

app.get('/headers', (req, res) => {
    res.send(req.headers);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})