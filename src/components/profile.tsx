import { Typography, ButtonGroup, Button } from '@mui/material';
import Box from '@mui/material/Box'

import LOIcon from '@mui/icons-material/LocationOnOutlined';
import RESIcon from '@mui/icons-material/DescriptionOutlined';

import Avatar from '@mui/material/Avatar';
import Socials from './socials'

const Profile = () => {
  const pfp: string = '../assets/react.svg'

  return (
    <>
      <Box display="flex" flexDirection="column" gap={2.5} sx={{ alignItems: {xs: 'center', md: 'auto' } }}>
        <Box display="flex" flexDirection="column" gap={1} sx={{ alignItems: {xs: 'center', md: 'auto' } }}>
       {/* PROFILE PICTURE */}
          <Avatar src={pfp} sx={{
            marginLeft: { xs: 0, md: 'auto' },
            width: '11em',
            height: '11em'
            }}
          />
          {/* NAME */}
          <Typography variant='h3' sx={{ textAlign: {xs: 'center', md: 'right'}, fontWeight: 'bold' }}>
            Joshua Waters
          </Typography>
        </Box>
        {/* TITLE */}
        {/* LOCATION */}
        <Typography sx={{ fontSize: '1rem', fontStyle: 'italic !important', marginLeft: {xs: 0, md: 'auto'} }}>
          <LOIcon />Atlanta, Georgia, United States
        </Typography>
        {/* RESUME */}
        <Box display="inline-flex" gap={1.25} marginRight='0' sx={{
          marginLeft: { xs: 0, md: 'auto'},
          flexDirection: { xs: 'column', md: 'row'},
          alignContent: { xs: 'center', md: 'auto' }
        }}>
          <Box display="inline-flex" gap={.5} marginLeft="auto" marginRight="auto">
            <RESIcon sx={{ fontSize: '1.5rem' }} />
            <Typography variant='h6'>Resume</Typography>
          </Box>
          <ButtonGroup variant='outlined' size='large'>
            <Button 
              sx={{ fontSize: '1rem', fontWeight: 'bold' }} 
              href="/assets/resume.pdf" target="_blank" rel="noopener noreferrer"
            >
              View
            </Button>
            <Button 
              sx={{ fontSize: '1rem', fontWeight: 'bold' }} 
              href="/assets/resume.pdf" download
            >
              Download
            </Button>
          </ButtonGroup>
        </Box>
       {/* SOCIALS */}
       <Box sx={{ marginLeft: {xs: '0', md: 'auto'} }}><Socials space={3}/></Box>
      </Box>
    </>
  )
}

export default Profile;