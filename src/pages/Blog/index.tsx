import { useCallback, useEffect, useState } from 'react'
import { Loading } from '../../components/Loading'
import { api } from '../../lib/axios'
import { CardList } from './CardList'
import { Profile } from './Profile'
import { SearchForm } from './SearchForm'
import { BlogContainer } from './styles'

const username = import.meta.env.VITE_GITHUB_USERNAME
const repoName = import.meta.env.VITE_GITHUB_REPONAME

export interface Issues {
  title: string
  created_at: string
  html_url: string
  body: string
  comments: number
  number: number
  user: {
    login: string
  }
}

export function Blog() {
  const [posts, setPost] = useState<Issues[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const getIssuesPost = useCallback(async (query: string) => {
    try {
      setIsLoading(true)
      const response = await api.get(
        `/search/issues?q=${query}%20repo:${username}/${repoName}`,
      )
      setPost(response.data.items)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    getIssuesPost('')
  }, [getIssuesPost])

  return (
    <BlogContainer>
      <Profile />
      <SearchForm getIssuesPost={getIssuesPost} postLength={posts.length} />
      {isLoading ? <Loading /> : <CardList posts={posts} />}
    </BlogContainer>
  )
}
