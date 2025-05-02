import { Box, Button, Flex, Heading, Text, Image } from '@chakra-ui/react'

export default function ProjectTaoKoi() {
  return (
    <>
      <Flex>
        <Box width="20%">
          <Heading>Tech Stack</Heading>
          <Text>TBC</Text>
        </Box>
        <Box width="80%">
          <Heading>Project Tao Koi</Heading>
          <Image src="/images/shush.WebP" alt="ssshhhh" width="100vh" />
        </Box>
      </Flex>
      <Flex
        direction="row"
        align="center"
        justifyContent="center"
        gap={2}
        pb={4}
      >
        <Button
          mt={2}
          size="md"
          variant="outline"
          borderColor="gray"
          background="teal.900"
          color="whiteAlpha.900"
          width="220px"
          fontFamily="Unica One"
          fontSize="30px"
          onClick={() =>
            window.open(
              'https://github.com/Phill-Keelan',
              '_blank',
              'noopener,noreferrer',
            )
          }
        >
          Github
        </Button>
        <Button
          mt={2}
          size="md"
          variant="outline"
          borderColor="gray"
          background="teal.900"
          color="whiteAlpha.900"
          width="220px"
          fontFamily="Unica One"
          fontSize="30px"
          onClick={() =>
            window.open(
              'https://github.com/Phill-Keelan',
              '_blank',
              'noopener,noreferrer',
            )
          }
        >
          Website
        </Button>
      </Flex>
    </>
  )
}
