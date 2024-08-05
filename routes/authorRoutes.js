const express = require('express')
const { getAllAuthors, getAllAuthorsById, addAuthors, updateAuthors, deleteAuthors } = require('./controllers/authorControllers')
const router = express.Router()

    router.get('/',getAllAuthors)
    router.get('/:authorId', getAllAuthorsById)
    router.post('/', addAuthors)
    router.patch('/:authorId',updateAuthors)
    router.get('/:authorId',deleteAuthors)


module.exports = router