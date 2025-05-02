import { Blog } from '../../../models/blog.ts'
import database from '../connection.ts'

// Read
export async function getAllBlogs() {
  try {
    const result: Blog[] = await database('blog').select(
      'id',
      'name',
      'content',
    )
    // console.log(result)
    return result
  } catch (error) {
    console.error('failed to get all blogs', error)
    return null
  }
}

export async function getBlogById(id: number) {
  try {
    const result = await database('blog')
      .where('blog.id', id)
      .select('id', 'name', 'content')
      .first()
    // console.log('blog: ', result)
    return result
  } catch (error) {
    console.error('failed to get blog', error)
    return null
  }
}
