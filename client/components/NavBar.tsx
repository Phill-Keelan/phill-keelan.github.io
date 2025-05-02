import { Button, Flex } from '@chakra-ui/react'
import Experience from './Experience'
import { useNavigate } from 'react-router-dom'
import Projects from './Projects'

function NavBar() {
  const navigate = useNavigate()
  return (
    <Flex direction="row" align="center" justifyContent="center" gap={2} pb={4}>
      <Button
        mt={2}
        size="md"
        variant="outline"
        borderColor="gray"
        background="yellow.700"
        color="whiteAlpha.900"
        width="168px"
        fontFamily="Unica One"
        fontSize="30px"
        onClick={() => navigate(`/`)}
      >
        Home
      </Button>
      {/* Dropdown menu for experiences */}
      <Experience />

      {/* Dropdown menu for projects */}
      <Projects />

      {/* Consistent styled button */}
      <Button
        mt={2}
        size="md"
        variant="outline"
        borderColor="gray"
        background="yellow.700"
        color="whiteAlpha.900"
        width="168px"
        fontFamily="Unica One"
        fontSize="30px"
        onClick={() => navigate(`/CV`)}
      >
        Full CV
      </Button>
    </Flex>
  )
}

export default NavBar
