const addBookHandler = require("./handler/addBookHandler.js");
const getAllBookHandler = require("./handler/getAllBookHandler.js");
const getBookByIdHandler = require("./handler/getBookByIdHandler.js");
const editBookByIdHandler = require("./handler/editBookByIdHandler.js");
const deleteBookByIdHandler = require("./handler/deleteBookByIdHandler.js");

const routes = [
    {
        method: 'POST',
        path: '/books',
        handler: addBookHandler,
    },
    {
        method: 'GET',
        path: '/books',
        handler: getAllBookHandler,
    },
    {
        method: 'GET',
        path: '/books/{id}',
        handler: getBookByIdHandler,
    },
    {
        method: 'PUT',
        path: '/books/{id}',
        handler: editBookByIdHandler,
    },
    {
        method: 'DELETE',
        path: '/books/{id}',
        handler: deleteBookByIdHandler,
    }
];
   
module.exports = routes;