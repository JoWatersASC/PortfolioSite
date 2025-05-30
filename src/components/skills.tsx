import { Typography, Stack, Box } from '@mui/material';

type SkillAreaProps = {
  sName: string, // skill name
  sColor?: string,
  skills: string[],
}
const SkillArea: React.FC<SkillAreaProps> = ({ sName, sColor = '#AFAFAF', skills}) => {
  const skillList = skills.map(skill =>
    <Typography sx={{ backgroundColor: sColor }} borderRadius='999px' paddingX='1em' paddingY='.5em'>
        {skill}
    </Typography>
  );

  return (
    <>
      <Stack direction='column'>
        <Typography variant='h3'>{sName}</Typography>

        <Stack direction="row"
          spacing={1}
          alignItems="left"
          sx={{
            display: 'inline-flex',
          }}>{skillList}</Stack>
      </Stack>
    </>
  ) 
}

export default SkillArea