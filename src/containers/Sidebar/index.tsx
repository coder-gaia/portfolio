import Avatar from '../../components/Avatar'
import Paragraph from '../../components/Paragraph'
import Title from '../../components/Title'
import { Description, SidebarContainer, ThemeButton } from './styles'

const Sidebar = () => (
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
      <ThemeButton>Change Theme</ThemeButton>
    </SidebarContainer>
  </aside>
)
export default Sidebar
