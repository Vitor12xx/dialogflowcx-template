let router = require('express').Router()
let intents = require('../intents')

router.post('/', async (req, res) => {
    let { tag } = req.body.fulfillmentInfo

    res.status(200).json( await intents[tag](req.body) )
})

router.get('/', (req, res) => {

    res.status(200).json({status: 'OK'})
})

module.exports = router