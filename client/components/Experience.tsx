import { Box, Button, Link, Menu, Portal } from '@chakra-ui/react'

function Experience() {
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
            Experience
          </Button>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              <Menu.Item value="Home">
                <Link href={`/`}>Home</Link>
              </Menu.Item>
              <Menu.Item value="Introduction">
                <Link href={`/Introduction`}>Introduction</Link>
              </Menu.Item>
              <Menu.Item value="Web Development">
                <Link href={`/WebDevelopment`}>Web Development</Link>
              </Menu.Item>
              <Menu.Item value="Military Career">
                <Link href={`/MilitaryCareer`}>Military Career</Link>
              </Menu.Item>
              <Menu.Item value="Honours and Awards">
                <Link href={`/HonoursAndAwards`}>Honours and Awards</Link>
              </Menu.Item>
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </Box>
  )
}

export default Experience
