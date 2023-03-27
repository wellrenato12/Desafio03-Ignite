import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
import { Loading } from '../../../../components/Loading'
import { dateFormatter } from '../../../../utils/formatter'
import { Issues } from '../../../Blog'
import { PostHeaderContainer } from './styles'

interface PostHeaderProps {
  posts: Issues
  isLoading: boolean
}

export function PostHeader({ isLoading, posts }: PostHeaderProps) {
  const formattedDate = dateFormatter(posts.created_at)

  return (
    <PostHeaderContainer>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <header>
            <NavLink to="/" title="Home">
              <FontAwesomeIcon icon={faChevronLeft} />
              Voltar
            </NavLink>
            <NavLink to={posts.html_url} target="_blank">
              Ver no GITHUB
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </NavLink>
          </header>
          <h2>{posts.title}</h2>
          <div>
            {posts.user && (
              <>
                <span>
                  <FontAwesomeIcon icon={faGithub} />
                  <p>{posts.user?.login}</p>
                </span>
                <span>
                  <FontAwesomeIcon icon={faCalendarDay} />
                  <p>{formattedDate}</p>
                </span>
                <span>
                  <FontAwesomeIcon icon={faComment} />
                  <p>{posts.comments} comentários</p>
                </span>
              </>
            )}
          </div>
        </>
      )}
    </PostHeaderContainer>
  )
}
