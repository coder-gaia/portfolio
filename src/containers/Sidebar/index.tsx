import Avatar from '../../components/Avatar'
import Paragraph from '../../components/Paragraph'
import Title from '../../components/Title'
import { Description, SidebarContainer, ThemeButton } from './styles'

type Props = {
  themeChanger: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Title fontSize={20}>Alexandre Gaia</Title>
      <Paragraph type="secondary" fontSize={16}>
        coder-gaia
      </Paragraph>
      <Description fontSize={12} type="main">
        Full Stack Engineer
      </Description>
      <ThemeButton onClick={props.themeChanger}>Change Theme</ThemeButton>
    </SidebarContainer>
  </aside>
)
export default Sidebar
