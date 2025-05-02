import { Box, Heading, Text, Image } from '@chakra-ui/react'

function HonoursAndAwards() {
  return (
    <Box>
      <Image
        src="/images/my-medals.WebP"
        alt="My Medals"
        width="50vh"
        mx="auto"
        display="block"
      />
      <Heading size="3xl">Honours and Awards</Heading>
      <Text>
        Operation Deans Citation – For first response to Christchurch Mosque
        shooting.
      </Text>
      <Text>
        NZ Operational Service Medal – For serving on military operations
      </Text>
      <Text>
        NZ General Service Medal Timor-Leste – For service on operations within
        Timor-Leste
      </Text>
      <Text>
        NZ General Service Medal Afghanistan – For service on operations within
        Afghanistan
      </Text>
      <Text>
        NATO Medal – For participation in NATO-led operations conducted in
        Afghanistan
      </Text>
      <Text>
        NZ General Service Medal Iraq – For service on operations within Iraq
      </Text>
      <Text>
        Long Service and Good Conduct Medal – For 14 years unblemished service
      </Text>
      <Text>
        NZ Defence Service Medal (Regular Clasp) – For 3 years of service within
        the military regular{' '}
      </Text>
      <Text>
        Timor-Leste Solidarity Medal – For service in stability and peace
        operations in Timor-Leste
      </Text>
    </Box>
  )
}

export default HonoursAndAwards
