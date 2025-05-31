import { Avatar, Box, Stack, Typography } from "@mui/material";


type ExperienceProps = {
  iPath: string, // icon path
  eName: string, // experience name
  loc?: string,  // location (employer and geospatial)
  points: string[],
  side?: boolean,
}
const Experience: React.FC<ExperienceProps> = ({ iPath, eName, loc, points, side = true }) => {
  const pointList = points.map(point => <li>{point}</li>)

  return (
    <>
      <Stack direction="column">
        <Box display="inline-flex">
        {/* icon */}
          { !side && (<Avatar src={iPath}/>) }
        {/* Name and Location */}
          <Stack direction="column">
            <Typography>{eName}</Typography>
            <Typography>{loc}</Typography>
          </Stack>
          { side && (<Avatar src={iPath}/>) }
        </Box>

        <Box component="ul">
          {pointList}
        </Box>
      </Stack>
    </>
  )
};

export default Experience;