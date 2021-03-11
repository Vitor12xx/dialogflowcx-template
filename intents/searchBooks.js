let { extractParameters, sendTextResponse, fetchProducts } = require('../helpers')
let responses = require('../responses/searchBooks')

module.exports = {
    'buscarLivrosIntent': async (WebhookRequest) => {

        let { booknameentity } = extractParameters(WebhookRequest)

        console.log('booknameentity:', booknameentity)

        let booksAPI = await fetchProducts(booknameentity)
        
        console.log(sendTextResponse(responses.presentSearch(booksAPI)))
        return sendTextResponse(responses.presentSearch(booksAPI))
    },

    'noBookMatched': (WebhookRequest) => {
        console.log('WebhookRequest', WebhookRequest)
        
    },
    
}