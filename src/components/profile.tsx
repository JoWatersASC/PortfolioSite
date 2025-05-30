import { Typography, ButtonGroup, Button } from '@mui/material';
import Box from '@mui/material/Box'

import LOIcon from '@mui/icons-material/LocationOnOutlined';
import RESIcon from '@mui/icons-material/DescriptionOutlined';

import Avatar from '@mui/material/Avatar';
import Socials from './socials'

const Profile = () => {
  const pfp = '../assets/react.svg'

  return (
    <>
      <Box display="flex" flexDirection="column" gap={2.5}>
        <Box display="flex" flexDirection="column" gap={1}>
       {/* PROFILE PICTURE */}
          <Avatar src={pfp} sx={{
            marginLeft: 'auto',
            width: '9em',
            height: '9em'
            }}
          />
          {/* NAME */}
          <Typography textAlign='right' variant='h4' sx={{ fontWeight: 'bold' }}>
            Joshua Waters
          </Typography>
        </Box>
        {/* TITLE */}
        {/* LOCATION */}
        <Typography sx={{ fontSize: '.8rem', fontStyle: 'italic !important'}} marginLeft='auto'>
          <LOIcon />Atlanta, Georgia, United States
        </Typography>
        {/* RESUME */}
        <Box display="inline-flex" gap={2} alignItems="center">
          <Box display="inline-flex" gap={.5}>
            <RESIcon />
            <Typography>Resume</Typography>
          </Box>
          <ButtonGroup variant='text'>
            <Button href="/assets/resume.pdf" target="_blank" rel="noopener noreferrer">View</Button>
            <Button href="/assets/resume.pdf" download>Download</Button>
          </ButtonGroup>
        </Box>
       {/* SOCIALS */}
       <Box marginLeft='auto'><Socials /></Box>
      </Box>
    </>
  )
}

export default Profile;