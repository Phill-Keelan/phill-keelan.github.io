import { useQuery } from '@tanstack/react-query'
import request from 'superagent'
import { Blog } from '../../models/blog'

export default function useBlogData(id: number) {
  return useQuery({
    queryKey: ['blog', id],
    queryFn: async () => {
      const res = await request.get(`/api/v1/blog/${id}`)
      return res.body as Blog
    },
  })
}
