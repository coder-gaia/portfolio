import { ThemeProvider } from 'styled-components'
import About from './containers/About'
import Projects from './containers/Projects'
import Sidebar from './containers/Sidebar'
import GlobalStyle, { Container } from './styles'
import ligthTheme from './themes/light'
import darkTheme from './themes/dark'
import { useState } from 'react'

function App() {
  const [usingDarkTheme, setUsingDarkTheme] = useState(false)

  function themeToggle() {
    setUsingDarkTheme(!usingDarkTheme)
  }

  return (
    <ThemeProvider theme={usingDarkTheme ? darkTheme : ligthTheme}>
      <GlobalStyle />
      <Container>
        <Sidebar themeChanger={themeToggle} />
        <main>
          <About />
          <Projects />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
