import Title from '../../components/Title'
import Paragraph from '../../components/Paragraph'
import { GithubSection } from './styles'

const About = () => (
  <section>
    <Title fontSize={16}>About Me</Title>
    <Paragraph type="main">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
      eveniet aperiam necessitatibus nemo fugit magni quam laudantium dolorem
      quibusdam, facilis ex cumque aut nisi distinctio porro ipsa soluta, optio
      possimus.
    </Paragraph>
    <GithubSection>
      <img src="https://github-readme-stats.vercel.app/api?username=coder-gaia&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=coder-gaia&layout=compact&langs_count=7&theme=dracula" />
    </GithubSection>
  </section>
)
export default About
