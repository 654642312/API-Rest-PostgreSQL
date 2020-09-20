import { Router } from 'express'
import { getUsers, getUserById, createUser, deleteUserById, UpdateUserById } from '../controllers'

const router = Router()

router.get('/users', getUsers)
router.get('/users/:id', getUserById)
router.post('/users', createUser)
router.put('/users/:id', UpdateUserById)
router.delete('/users/:id', deleteUserById)

export default router