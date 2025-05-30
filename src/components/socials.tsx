import { Stack, Button } from '@mui/material'
import { styled } from '@mui/material/styles';

import GHIcon from '@mui/icons-material/GitHub'
import LIIcon from '@mui/icons-material/LinkedIn'
import EMIcon from '@mui/icons-material/Email'
import type React from 'react'

const Sbutton = styled(Button)(({theme}) => ({
  width: '4em',
  height: '4.5em',
  borderRadius: '50%',
  borderColor: '#A4A4A4', 
  color: '#A4A4A4'
}));

type SbuttonData = {
  link: string,
  icon: React.ReactNode
}

type SocialsProps = { space?: number }
const Socials: React.FC<SocialsProps> = ({ space = 2 }) => {
  const buttons: SbuttonData[] = [
    { link: "https://github.com/JoWatersASC",          icon: <GHIcon sx={{ fontSize: '2em'}} /> },
    { link: "https://linkedin.com/in/joshua-b-waters", icon: <LIIcon sx={{ fontSize: '2em'}} /> },
    { link: "mailto:j.b.waters365@gmail.com",          icon: <EMIcon sx={{ fontSize: '2em'}} /> }
  ]

  let num = 0;
  const buttonList: React.ReactNode[] = buttons.map(button => 
    <Sbutton variant='outlined' href={button.link} key={++num}> {button.icon} </Sbutton>
  )

  return (
    <div>
      <Stack spacing={space} direction='row'>
        {buttonList}
      </Stack>
    </div>
  )
}

export default Socials;