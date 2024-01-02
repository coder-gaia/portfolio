import Paragraph from '../Paragraph'
import Title from '../Title'
import Card, { ButtonLink } from './style'

const Project = () => (
  <Card>
    <Title fontSize={16}>To-Do List</Title>
    <Paragraph type="secondary">To-Do List built with VueJs</Paragraph>
    <ButtonLink>View</ButtonLink>
  </Card>
)

export default Project
