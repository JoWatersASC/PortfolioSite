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
      <Box display="flex" flexDirection="column" gap={2.5}>
        <Box display="flex" flexDirection="column" gap={1}>
       {/* PROFILE PICTURE */}
          <Avatar src={pfp} sx={{
            marginLeft: 'auto',
            width: '11em',
            height: '11em'
            }}
          />
          {/* NAME */}
          <Typography textAlign='right' variant='h3' sx={{ fontWeight: 'bold' }}>
            Joshua Waters
          </Typography>
        </Box>
        {/* TITLE */}
        {/* LOCATION */}
        <Typography sx={{ fontSize: '1rem', fontStyle: 'italic !important'}} marginLeft='auto'>
          <LOIcon />Atlanta, Georgia, United States
        </Typography>
        {/* RESUME */}
        <Box display="inline-flex" gap={1.25} marginLeft="auto" marginRight='0'>
          <Box display="inline-flex" gap={.5} marginTop="auto" marginBottom="auto">
            <RESIcon sx={{ fontSize: '2rem' }} />
            <Typography variant='h6'>Resume</Typography>
          </Box>
          <ButtonGroup variant='outlined' size='large'>
            <Button 
              sx={{ fontSize: '1.5rem', fontWeight: 'bold' }} 
              href="/assets/resume.pdf" target="_blank" rel="noopener noreferrer"
            >
              View
            </Button>
            <Button 
              sx={{ fontSize: '1.5rem', fontWeight: 'bold' }} 
              href="/assets/resume.pdf" download
            >
              Download
            </Button>
          </ButtonGroup>
        </Box>
       {/* SOCIALS */}
       <Box marginLeft='auto'><Socials space={3}/></Box>
      </Box>
    </>
  )
}

export default Profile;