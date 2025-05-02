import { Box, Grid, Image } from '@chakra-ui/react'

function Footer() {
  return (
    <>
      <Grid templateColumns="repeat(3, 1fr)" gap="6">
        <Box display="flex" justifyContent="center">
          <Image src="/images/github.WebP" alt="Github Logo" width="50px" />
        </Box>
        <Box display="flex" justifyContent="center">
          <Image src="/images/linkedin.WebP" alt="LinkedIn Logo" width="50px" />
        </Box>
        <Box display="flex" justifyContent="center">
          <Image src="/images/email.WebP" alt="Mail Logo" width="50px" />
        </Box>
      </Grid>
    </>
  )
}

export default Footer
