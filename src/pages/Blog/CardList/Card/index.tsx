import { Issues } from '../..'
import { dateFormatter } from '../../../../utils/formatter'
import { CardContainer } from './styles'

interface CardProps {
  post: Issues
}

export function Card({ post }: CardProps) {
  const formattedDate = dateFormatter.format(new Date(post.created_at))
  return (
    <CardContainer to={`/post/${post.number}`}>
      <div>
        <h4>{post.title}</h4>
        <p>{formattedDate}</p>
      </div>
      <p>{post.body}</p>
    </CardContainer>
  )
}
