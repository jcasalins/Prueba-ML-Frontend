import { Router } from 'express'
import { getItems, getItemById } from '../controllers/api.controller.js'

const router = Router()

router.get('/items/', getItems)
router.get('/items/:id', getItemById)

export default router
