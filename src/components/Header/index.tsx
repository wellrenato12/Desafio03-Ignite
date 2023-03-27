import { HeaderContainer } from './styles'
import LogoGitHub from '../../assets/Logo.svg'
import Effect from '../../assets/effect.svg'
import Effect2 from '../../assets/effect-2.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={Effect} alt="" />
      <img src={LogoGitHub} alt="" />
      <img src={Effect2} alt="" />
    </HeaderContainer>
  )
}
