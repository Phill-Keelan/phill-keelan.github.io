import { Box } from '@chakra-ui/react'

function CV() {
  return (
    <Box
      width="100%"
      height="70vh"
      overflow="auto"
      style={{ transform: 'scale(1)', transformOrigin: 'center' }}
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
      <object
        width="100%"
        height="100%"
        data="/PDFs/my-cv.pdf"
        type="application/pdf"
        aria-label="My CV PDF document"
      ></object>
    </Box>
  )
}

export default CV
