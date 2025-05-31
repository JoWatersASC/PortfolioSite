import './App.css'

import Box from '@mui/material/Box'
import Profile from './components/profile'
import InfoSection from './components/info'

function App() {
  return (
    <>
      <Box display="flex" alignItems="center" justifyContent="center" sx={{
          alignItems: "center",
          flexDirection: { xs: 'column', md: 'row-reverse', },
          marginRight: '1rem',
          marginLeft: '1rem',
          width: '100%',
          height: '100%',
        }}
      >
        {/* Profile */}
        <Box display="flex" alignItems="baseline" sx={{
          flex: 1,
          flexShrink: { xs: 1, md: 0 },
          justifyContent: { xs: 'center', md: 'right' },
          marginTop: { xs: '30rem', md: 'auto' },
          marginBottom: '1rem',
          height: '100%',
        }}>
          <Profile />
        </Box>

        {/* Median */}
        <Box display="flex" sx={{
          flexGrow: 0, justifyContent: 'center',
          height: {xs: 'auto', md: '100%' }, width: { xs: '100%', md: 'auto' }
        }}>
          <Box justifyContent="center" alignItems="center"
            sx={{
              width: { xs: '95vh', md: '1px' },
              height: { xs: '1px', md: '85%' },
              backgroundColor: 'grey.400',
            }}
          />
        </Box>

        {/* Info Section */}
        <Box display="flex" sx={{
          flex: 1,
          flexShrink: { xs: 0, md: 1 },
          overflowY: { xs: 'unset', md: 'auto' },
          height: { xs: '100%', md: '90vh' },
          width: '100%',
          marginTop: { xs: '1rem', md: 'auto' },
          marginBottom: '3rem',
          borderRight: { xs: '0px', md: '1px' },
          borderBottom: { xs: '1px', md: '0px' }
        }}>
          <InfoSection />
        </Box>
      </Box>
    </>
  )
}

export default App
