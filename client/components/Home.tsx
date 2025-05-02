import { Box, Grid, Heading, Text, Image } from '@chakra-ui/react'

function Home() {
  return (
    <>
      <Heading textAlign="center" size="3xl">
        Kia Ora, I&apos;m Phill
      </Heading>
      <Grid
        templateColumns="repeat(2, 1fr)"
        templateRows="repeat(2, 1fr)"
        gap={4}
      >
        <Box
          bg="cyan.950"
          border="1px solid"
          borderColor="blackAlpha.500"
          borderRadius="8px"
          p={4}
          height="34vh"
          overflow="auto"
          textAlign="right"
          css={{
            scrollbarWidth: 'thin',
            scrollbarColor: '#555 #222',
            '&::-webkit-scrollbar': {
              width: '8px',
            },
            '&::-webkit-scrollbar-track': {
              background: '#222',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#555',
              borderRadius: '4px',
              border: '2px solid #222',
            },
          }}
        >
          <Box>
            <Heading size="xl">Education</Heading>
            <Heading size="lg">Dev Academy Aotearoa</Heading>
            <Text>NZ Certificate in Applied Software Development Level 6</Text>
            <Heading size="lg">NZ Army</Heading>
            <Text>Lead Teams Leadership</Text>
            <Text>Rifle Platoon Commander</Text>
            <Text>Senior Non-Commisioned Officer</Text>
            <Text>Senior Tracking Instructor</Text>
            <Text>Sniper Supervisor</Text>
            <Text>Health andSafety Coordinator</Text>
            <Text>NZ Certificate in Business Level 3</Text>
            <Text>NZ Certificate in Outdoor Education Level 4</Text>
            <Heading size="lg">Work Safe</Heading>
            <Text>Health and Safety Representative</Text>
            <Heading size="lg">Flip Global</Heading>
            <Text>Flip Learning Level 2</Text>
          </Box>
        </Box>
        <Box>
          <Box
            bg="cyan.950"
            border="1px solid"
            borderColor="blackAlpha.500"
            borderRadius="8px"
            p={4}
            height="34vh"
            overflow="auto"
            textAlign="left"
            css={{
              scrollbarWidth: 'thin',
              scrollbarColor: '#555 #222',
              '&::-webkit-scrollbar': {
                width: '8px',
              },
              '&::-webkit-scrollbar-track': {
                background: '#222',
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: '#555',
                borderRadius: '4px',
                border: '2px solid #222',
              },
            }}
          >
            <Heading size="xl">Volunteer Work</Heading>
            <Heading size="lg">NZ Army Reserve Force</Heading>
            <Text>
              Platoon Commander, 8 Platoon, East Coast Company, 5th/7th Bn RNZIR
            </Text>
            <Heading size="lg">Land Search and Rescue</Heading>
            <Text>Field Team</Text>
          </Box>
        </Box>
        <Box>
          <Box
            bg="cyan.950"
            border="1px solid"
            borderColor="blackAlpha.500"
            borderRadius="8px"
            p={4}
            height="34vh"
            overflow="auto"
            textAlign="right"
            css={{
              scrollbarWidth: 'thin',
              scrollbarColor: '#555 #222',
              '&::-webkit-scrollbar': {
                width: '8px',
              },
              '&::-webkit-scrollbar-track': {
                background: '#222',
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: '#555',
                borderRadius: '4px',
                border: '2px solid #222',
              },
            }}
          >
            <Heading size="xl">Technical Skills</Heading>
            <Text>TypeScript</Text>
            <Text>JavaScript</Text>
            <Text>React.js</Text>
            <Text>Git</Text>
            <Text>SQLite3</Text>
            <Text>Chakra UI</Text>
            <Text>Postman</Text>
            <Text>Node.js</Text>
            <Text>Express</Text>
            <Box>
              <Text
                textAlign="right"
                display="flex"
                alignItems="right"
                flexWrap="wrap"
                justifyContent="flex-end"
                gap={2}
              >
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                    alt="javascript"
                    width="7vh"
                    height="auto"
                  />
                </a>
                <a
                  href="https://www.typescriptlang.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
                    alt="typescript"
                    width="7vh"
                    height="auto"
                  />
                </a>
                <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                  <Image
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                    alt="react"
                    width="7vh"
                    height="auto"
                  />
                </a>
                <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
                  <Image
                    src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
                    alt="git"
                    width="7vh"
                    height="auto"
                  />
                </a>
                <a
                  href="https://www.sqlite.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src="https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg"
                    alt="sqlite"
                    width="7vh"
                    height="auto"
                  />
                </a>
                <a href="https://postman.com" target="_blank" rel="noreferrer">
                  <Image
                    src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
                    alt="postman"
                    width="7vh"
                    height="auto"
                  />
                </a>
                <a href="https://nodejs.org" target="_blank" rel="noreferrer">
                  <Image
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                    alt="nodejs"
                    width="7vh"
                    height="auto"
                  />
                </a>
                <a
                  href="https://expressjs.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
                    alt="express"
                    width="7vh"
                    height="auto"
                  />
                </a>
              </Text>
            </Box>
          </Box>
        </Box>
        <Box>
          <Box
            bg="cyan.950"
            border="1px solid"
            borderColor="blackAlpha.500"
            borderRadius="8px"
            p={4}
            height="34vh"
            overflow="auto"
            textAlign="left"
            css={{
              scrollbarWidth: 'thin',
              scrollbarColor: '#555 #222',
              '&::-webkit-scrollbar': {
                width: '8px',
              },
              '&::-webkit-scrollbar-track': {
                background: '#222',
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: '#555',
                borderRadius: '4px',
                border: '2px solid #222',
              },
            }}
          >
            <Heading size="xl">Human Skills</Heading>
            <Text>Communication</Text>
            <Text>Leadership</Text>
            <Text>Collaboration</Text>
            <Text>Team Influencer</Text>
            <Text>Agile Methodology</Text>
            <Text>Innovative Problem Solver</Text>
          </Box>
        </Box>
      </Grid>
    </>
  )
}

export default Home
