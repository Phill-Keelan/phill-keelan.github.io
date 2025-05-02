import { Heading, Image, Flex } from '@chakra-ui/react'

function Header() {
  return (
    <Flex align="center" gap={2}>
      <Image src="/images/sniper-badge.WebP" alt="medals" width="60px" />
      <Heading
        size="4xl"
        fontSize="50px"
        fontFamily="Montserrat Underline"
        justifyItems="center"
      >
        A Snipers Hide
      </Heading>
    </Flex>
  )
}

export default Header
