import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'

export default function PitchFjork() {
  return (
    <>
      <Flex>
        <Box width="20%">
          <Heading>Tech Stack</Heading>
          <Text>React.js</Text>
          <Text>Chakra UI</Text>
          <Text>Tanstack</Text>
          <Text>Express</Text>
          <Text>Knex</Text>
          <Text>SQLite3</Text>
          <Text>Node.js</Text>
        </Box>
        <Box width="80%">
          <Heading>PitCH FJork</Heading>
          <Text>
            PitCH Fjork is a light hearted trivia game that allows players to
            sign in anonymously and answer the questions that are displayed.
            Once all the questions have been answered the player will be taken
            to a statistics page where you can see graphs and percentages of all
            answers that were selected.
          </Text>
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
              'https://github.com/Phill-Keelan/pitch-fjork',
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
              'https://github.com/Phill-Keelan/pitch-fjork',
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
