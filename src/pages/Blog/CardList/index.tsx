import { Issues } from '..'
import { Card } from './Card'
import { CardListContainer } from './styles'

interface PostPorps {
  posts: Issues[]
}

export function CardList({ posts }: PostPorps) {
  return (
    <CardListContainer>
      {posts.map((post) => {
        return <Card key={post.number} post={post} />
      })}
    </CardListContainer>
  )
}
