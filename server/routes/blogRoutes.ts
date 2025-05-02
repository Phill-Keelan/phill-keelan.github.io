import express from 'express'

import * as db from '../db/functions/blog-functions.ts'

const router = express.Router()
export default router

// Read
router.get('/', async (req, res, next) => {
  try {
    const port = await db.getAllBlogs()
    res.json(port)
  } catch (e) {
    next(e)
  }
})

router.get('/:id', async (req, res, next) => {
  const id = Number(req.params.id)
  try {
    const port = await db.getBlogById(id)
    res.json(port)
  } catch (e) {
    next(e)
  }
})
