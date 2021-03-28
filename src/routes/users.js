const { Router } = require('express');
const router = Router();

const { getUsers, createUser, deleteUser, getUser, updateUser} = require('../controllers/users.controller.js')

router.route('/')
    .get(getUsers)
    .post(createUser)

router.route('/:id')
    .get(getUser)
    .put(updateUser)
    .delete(deleteUser)

module.exports = router;