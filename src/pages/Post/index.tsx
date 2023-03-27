import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../lib/axios'
import { Issues } from '../Blog'
import { PostContent } from './components/PostContent'
import { PostHeader } from './components/PostHeader'
import { PostContainer } from './styles'

const username = import.meta.env.VITE_GITHUB_USERNAME
const repoName = import.meta.env.VITE_GITHUB_REPONAME

export function Post() {
  const [posts, setPosts] = useState<Issues>({} as Issues)
  const [isLoading, setIsLoading] = useState(false)

  const { id } = useParams()

  const getPost = useCallback(async () => {
    try {
      setIsLoading(true)
      const response = await api.get(
        `/repos/${username}/${repoName}/issues/${id}`,
      )
      setPosts(response.data)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }, [id])

  useEffect(() => {
    getPost()
  }, [getPost])

  return (
    <PostContainer>
      <PostHeader isLoading={isLoading} posts={posts} />
      <PostContent isLoading={isLoading} content={posts.body} />
    </PostContainer>
  )
}
