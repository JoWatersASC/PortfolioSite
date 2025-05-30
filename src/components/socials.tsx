import { Stack, Button } from '@mui/material'
import GHIcon from '@mui/icons-material/GitHub'
import LIIcon from '@mui/icons-material/LinkedIn'
import EMIcon from '@mui/icons-material/Email'

export const Socials = () => {
  return (
    <div>
      <Stack spacing={2} direction='row'>
        <Button variant='outlined' startIcon={<GHIcon />}></Button>
        <Button variant='outlined' startIcon={<LIIcon />}></Button>
        <Button variant='outlined' startIcon={<EMIcon />}></Button>
      </Stack>
    </div>
  )
}

export default Socials;