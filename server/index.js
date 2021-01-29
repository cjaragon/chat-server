const express = require('express')
const app = express()
const mc = require('./controllers/messages-controller.js')

app.use(express.json())
app.use(express.static(__dirname + '/../public/build'))

app.post('/api/messages', mc.create)
app.get('/api/messages', mc.read)
app.put('/api/messages/:id', mc.update)
app.delete('/api/messages/:id', mc.delete)


const port = 3001
app.listen(port, () => {
    console.log(`server listening to port ${port}`)
})