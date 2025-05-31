import { Avatar, Box, Stack, Typography } from "@mui/material";


type ExperienceProps = {
  iPath: string, // icon path
  eName: string, // experience name
  loc?: string,  // location (employer and geospatial)
  points: string[],
  side?: boolean, // true means left, false means right
}
const Experience: React.FC<ExperienceProps> = ({ iPath, eName, loc, points, side = true }) => {
  const pointList = points.map(point => <li>{point}</li>)

  return (
    <>
      <Stack
        direction="column"
        marginTop="2% !important"
        display="flex"
        sx={{ alignItems: (side ? 'baseline' : 'end')
      }}>
        <Box display="inline-flex" width="100%" sx={{ justifyContent: (side ? 'left' : 'right') }}>
        {/* icon */}
          { side && (<Avatar src={iPath}/>) }
        {/* Name and Location */}
          <Stack direction="column" marginLeft={(side?'1rem':'0rem')} marginRight={(side?'0rem':'1rem')}>
            <Typography>{eName}</Typography>
            <Typography>{loc}</Typography>
          </Stack>
          { !side && (<Avatar src={iPath}/>) }
        </Box>

        <Box component="ul" textAlign={(side ? 'left' : 'right')} sx={{ direction: (side?'ltr':'rtl') }}>
          {pointList}
        </Box>
      </Stack>
    </>
  )
};

export default Experience;