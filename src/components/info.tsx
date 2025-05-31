import { Stack, Typography, Box } from "@mui/material"
import Skill from "./skills"

const InfoSection = () => {
  const skillSet: { name: string, color?: string, value: string[] }[] = [
    { name: 'Languages',            color: '#FF3E40',
        value: ['C', 'C++', 'Python', 'Go', 'TypeScript', 'SQL', 'Bash'],
    },
    { name: 'Technologies',         color: '#3E84FF',
        value: ['Linux', 'GNU Toolchain', 'Docker', 'Git'],
    },
    { name: 'ML/AI',                color: '#FF983E',
        value: ['PyTorch', 'NumPy', 'NLP', 'Vertex AI', 'ONNX'],
    },
    { name: 'Web & Backend Frameworks',     color: '#06A85B',
        value: ['Flask', 'React', 'Node.js', 'MySQL', 'MongoDB'],
    },
    { name: 'Cloud & DevOps',       color: '#A04FFF',
        value: ['GCP', 'Networks', 'Jira', 'Terraform', 'Jenkins', 'Kubernetes']
    },
  ]
  let num = 0
  const skillSection = skillSet.map(skill =>
    <Skill sName={skill.name} sColor={skill.color} skills={skill.value} key={++num}></Skill>
  )

  return (
    <>
      <Stack direction='column' spacing={5}>
        <Typography variant="h5" fontWeight="bold">About Me</Typography>
        <Box>
          <Typography variant="h5">Skills</Typography>
          <Stack direction='column' spacing={2}>
            {skillSection}
          </Stack>
        </Box>
          <Typography variant="h5">Experience</Typography>
      </Stack>
    </>
  )
}

export default InfoSection