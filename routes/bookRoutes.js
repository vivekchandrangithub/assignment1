const express = require('express')
const { getAllBooks, getAllBooksById, addBooks, updateBooks, deleteBooks } = require('./controllers/bookControllers')
const router = express.Router()

    router.get('/', getAllBooks)
    router.get('/:bookId', getAllBooksById)
    router.post('/', addBooks)
    router.patch('/:bookId', updateBooks)
    router.get('/:bookId', deleteBooks)


module.exports = router