let fetch = require('node-fetch')

module.exports = {
    sendTextResponse(response) {

        let textResponses = response.text.map((elem) => {
            return { 
                text: {
                    text: [
                        elem
                    ]
                } 
            } 
        })

        return {
            fulfillmentResponse: {
                messages: textResponses
            }}
    },

    extractParameters(WebhookRequest) {
        let parameters = Object.entries(WebhookRequest.intentInfo.parameters)
        
        // console.log('parameters', parameters)
        let extractedParameters = []
        for(param of parameters) {
            extractedParameters[param[0]] = param[1].originalValue
        }

        return extractedParameters
    },

    fetchProducts(bookName) {
        let searchParams = encodeURI(`?term=${bookName}&onlyAvailable=true`)
        
        return fetch(process.env.BOOK_SEARCH + searchParams)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                return res.data.books
            })
            .catch(err => console.log('Error:', err))
    }
}