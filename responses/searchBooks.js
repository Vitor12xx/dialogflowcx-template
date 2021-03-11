module.exports = {
    'presentSearch': (payload) => {
        let books = payload.map(elem => elem.name)
        
        return {
            text: [
            `${books.length} resultado${books.length > 1 ? 's' : ''}:\n`,
            books.join('#').replace(/#/g, ', \n')
            ]
        }
    }
}