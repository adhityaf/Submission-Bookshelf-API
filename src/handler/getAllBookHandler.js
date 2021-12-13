const books = require("../books.js");

const getAllBookHandler = (request, h) => {
    const {
        name, 
        finished, 
        reading 
    } = request.query;

    function bookMap(data) {
        return data.map(book => ({
            id: book.id,
            name: book.name,
            publisher: book.publisher
        }));
    }

    let bookData = bookMap(books);
    if(name !== null){
        bookData = bookMap(books.filter(book => book.name.toLowerCase().includes(book.name.toLowerCase())));
    }else if(finished !== null){
        finished = parseInt(finished)
        if (finished === 1) {
            bookData = bookMap(books.filter(book => book.finished === 1));
        } else if (finished === 0) {
            bookData = bookMap(books.filter(book => book.finished === 0));
        }
    }else if(reading !== null){
        reading = parseInt(reading)
        if (reading === 1) {
            bookData = bookMap(books.filter(book => book.reading === 1));
        } else if (reading === 0) {
            bookData = bookMap(books.filter(book => book.reading === 0));
        }
    }

    const response = h.response({
            status: 'success',
            data: {
                books: bookData
            },
        });

        response.code(200);
        return response;
};

module.exports = getAllBookHandler;