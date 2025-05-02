import { Outlet } from 'react-router-dom'
// import Header from './Header'
import Footer from './Footer'
import { Box, Flex } from '@chakra-ui/react'
import NavBar from './NavBar'
import Header from './Header'

function App() {
  return (
    <Flex
      direction="column"
      minHeight="100vh"
      background="black"
      color="whiteAlpha.800"
      p={2}
    >
      {/* Header and NavBar at the top */}
      <Box>
        {/* <Header /> */}
        <Header />
        <NavBar />
      </Box>

      {/* Center area: fills remaining space with independent scrollbar */}
      <Box flex="1" overflowY="auto" minHeight={0}>
        <Outlet />
      </Box>

      {/* Footer at the bottom */}
      <Box>
        <Footer />
      </Box>
    </Flex>
  )
}

export default App
