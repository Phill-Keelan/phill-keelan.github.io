import { Box, Button, Link, Menu, Portal } from '@chakra-ui/react'

function Projects() {
  return (
    <Box>
      <Menu.Root>
        <Menu.Trigger>
          <Button
            marginTop={2}
            size="md"
            variant="outline"
            borderColor="grey"
            background="yellow.700"
            color="whiteAlpha.900"
            width="168px"
            fontFamily="Unica One"
            fontSize="30px"
          >
            Projects
          </Button>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              <Menu.Item value="Home">
                <Link href={`/`}>Home</Link>
              </Menu.Item>
              <Menu.Item value="PitCH FJork">
                <Link href={`/PitCHFJork`}>PitCH FJork</Link>
              </Menu.Item>
              <Menu.Item value="MotivatingMike">
                <Link href={`/MotivatingMike`}>MotivatingMike</Link>
              </Menu.Item>
              <Menu.Item value="Final Target">
                <Link href={`/FinalTarget`}>Final Target</Link>
              </Menu.Item>
              <Menu.Item value="Project Tao Koi">
                <Link href={`/ProjectTaoKoi`}>Project Tao Koi</Link>
              </Menu.Item>
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </Box>
  )
}

export default Projects
