import { Typography, Stack } from '@mui/material';
import { lighten } from '@mui/system';

type SkillAreaProps = {
  sName: string, // skill name
  sColor?: string,
  skills: string[],
}

const SkillArea: React.FC<SkillAreaProps> = ({ sName, sColor = '#AFAFAF', skills}) => {
  let num = 0

  const textColor = lighten(sColor, .8)
  const skillList = skills.map(skill =>
    <Typography sx={{ 
        backgroundColor: sColor, 
        color: textColor,
        flexShrink: 0
    }} borderRadius='999px' paddingX='.75em' paddingY='.15em' key={++num} fontWeight="bold">
        {skill}
    </Typography>
  );

  return (
    <>
      <Stack direction='column' spacing={.25}>
        <Typography variant='h6' >{sName}</Typography>

        <Stack direction="row"
          spacing={1}
          alignItems="left"

          sx={{
            display: 'inline-flex',
            overflowX: 'auto',
            whiteSpace: 'nowrap',
          }}>{skillList}</Stack>
      </Stack>
    </>
  )
}

export default SkillArea