import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'

export default function MotivatingMike() {
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
          <Heading>Motivating Mike</Heading>
          <Text>
            A fun and motivating task management app that encourages users to
            complete their to-do list by engaging with an avatar. Users can
            select an avatar, which acts as their virtual companion or guide
            throughout their productivity journey. The app transforms task
            completion into an interactive experience, making everyday chores
            and goals more engaging and rewarding. With a playful and supportive
            environment, it helps users stay organized, motivated, and on track
            by turning productivity into an adventure with their chosen avatar
            cheering them on. (Beware of procrastination—your avatar might
            disagree!).
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
              'https://github.com/Phill-Keelan/motivating-mike',
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
              'https://github.com/Phill-Keelan/motivating-mike',
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
