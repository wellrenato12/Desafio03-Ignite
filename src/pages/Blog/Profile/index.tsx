import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useCallback, useEffect, useState } from 'react'
import { Loading } from '../../../components/Loading'
import { api } from '../../../lib/axios'
import { ProfileContainer, ProfileContent, ProfileTitle } from './styles'

const username = import.meta.env.VITE_GITHUB_USERNAME

interface ProfileData {
  name: string
  bio: string
  login: string
  company?: string
  followers: number
  avatar_url: string
  html_url: string
}

export function Profile() {
  const [profile, setProfile] = useState<ProfileData>({} as ProfileData)
  const [isLoading, setIsLoading] = useState(false)

  const getProfileData = useCallback(async () => {
    const response = await api.get(`/users/${username}`)
    try {
      setIsLoading(true)
      setProfile(response.data)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    getProfileData()
  }, [getProfileData])
  return (
    <ProfileContainer>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <img src={profile.avatar_url} alt="" />
          <ProfileContent>
            <ProfileTitle>
              <h2>{profile.name}</h2>
              <a href={profile.html_url} target="_blank" rel="noreferrer">
                GITHUB
                <FontAwesomeIcon icon={faUpRightFromSquare} />
              </a>
            </ProfileTitle>
            <p>{profile.bio}</p>
            <div>
              <span>
                <FontAwesomeIcon icon={faGithub} />
                {profile.login}
              </span>
              {profile?.company && (
                <span>
                  <FontAwesomeIcon icon={faBuilding} />
                </span>
              )}
              {profile.followers > 0 && (
                <span>
                  <FontAwesomeIcon icon={faUserGroup} />
                </span>
              )}
            </div>
          </ProfileContent>
        </>
      )}
    </ProfileContainer>
  )
}
