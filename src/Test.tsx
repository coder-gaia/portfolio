import styled from 'styled-components'

type ButtonProps = {
  main?: boolean
  fontSize?: string
}

const Button = styled.button<ButtonProps>`
  background-color: ${(props) => (props.main ? 'green' : 'blue')};
  font-size: ${(props) => props.fontSize || '16px'};
`

const ButtonDanger = styled(Button)`
  background-color: orange;
  color: #fff;

  span {
    text-decoration: line-through;
  }
`

function Test() {
  return (
    <>
      <Button fontSize="18px" main>
        Send
      </Button>
      <Button main={false}>Cancel</Button>
      <ButtonDanger as="a">
        <span>Do not click</span>
      </ButtonDanger>
    </>
  )
}

export default Test
