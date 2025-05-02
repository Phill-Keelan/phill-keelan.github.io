import { Box, Heading, Text } from '@chakra-ui/react'

function WebDev() {
  return (
    <Box>
      <Heading size="3xl">Web Development Experience</Heading>
      <Heading size="2xl">Dev Academy Aotearoa</Heading>
      <Text>2025</Text>
      <Heading size="2xl">Experience</Heading>
      <Text>
        This was an intense 15 week training period, totalling approximately 800
        hours, that simulates working in a high stress modern development team.
        The course teaches:
      </Text>
      <li>
        Create full-stack web applications using modern technologies such as
        React, Tailwind CSS, SQLite3, and Node.js.
      </li>
      <li>Employ testing, restful APIs, and database relationships.</li>
      <li>
        Human skills to improve collaborate in group projects as well as
        personal growth in high stress environments
      </li>
      <Heading size="2xl">Projects In Progress</Heading>
      <Heading size="xl">Motivating Mike</Heading>
      <Text>
        A fun and motivating task management app that encourages users to
        complete their to-do list by engaging with an avatar. Users can select
        an avatar, which acts as their...
      </Text>
      <Heading size="xl">Final Target</Heading>
      <Text>
        An immersive, strategic stealth game where players are assigned a secret
        target while being hunted by another player. To succeed, participants
        must... Tech: React, Chakra UI, Node, knex, express, SQLite
      </Text>
      <Heading size="xl">Project Tao Koi</Heading>
      <Text>
        This AI Assistant supports ground-based personnel by analyzing target,
        weather, and terrain information. By interpreting this data, the AI
        provides actionable insights—only the tip of the iceberg!
      </Text>
    </Box>
  )
}

export default WebDev
