require('dotenv').config()

let express = require('express')
let app = express()
let routes = require('./routes')

app.use(express.json())
    .use(express.urlencoded({extended: false}))

app.use('/', routes)

app.listen(process.env.PORT, () => {
    console.log('Server up in PORT: ', process.env.PORT)
})
