import { useQuery } from '@tanstack/react-query'
import request from 'superagent'
import { Blog } from '../../models/blog'

export default function useAllBlogData() {
  return useQuery({
    queryFn: async () => {
      const res = await request.get('/api/v1/blog')
      return res.body as Blog[]
    },
    queryKey: ['Blog'],
  })
}
