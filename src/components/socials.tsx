import { Stack, Button } from '@mui/material'
import { styled } from '@mui/material/styles';

import GHIcon from '@mui/icons-material/GitHub'
import LIIcon from '@mui/icons-material/LinkedIn'
import EMIcon from '@mui/icons-material/Email'
import type React from 'react'

const Sbutton = styled(Button)(({theme}) => ({
  width: '4.5rem',
  height: '4.5rem',
  borderRadius: '50%',
  borderColor: '#A4A4A4', 
  color: '#A4A4A4'
}));

type SocialsProps = { space: number }
const Socials: React.FC<SocialsProps> = ({ space = 2 }) => {
  const gh_link: string = "https://github.com/JoWatersASC"
  const li_link: string = "https://linkedin.com/in/joshua-b-waters"
  const email_a: string = "j.b.waters365@gmail.com"

  return (
    <div>
      <Stack spacing={space} direction='row'>
        <Sbutton variant='outlined' href={gh_link}><GHIcon sx={{ fontSize: '3em'}} /></Sbutton>
        <Sbutton variant='outlined' href={li_link}><LIIcon sx={{ fontSize: '3em'}}/></Sbutton>
        <Sbutton variant='outlined' href={email_a}><EMIcon sx={{ fontSize: '3em'}}/></Sbutton>
      </Stack>
    </div>
  )
}

export default Socials;