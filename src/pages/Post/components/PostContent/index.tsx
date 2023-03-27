import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { Loading } from '../../../../components/Loading'
import { PostoContentContainer } from './styles'

interface PostContentProps {
  content: string
  isLoading: boolean
}

export function PostContent({ content, isLoading }: PostContentProps) {
  return (
    <PostoContentContainer>
      {isLoading ? <Loading /> : <ReactMarkdown>{content}</ReactMarkdown>}
    </PostoContentContainer>
  )
}
