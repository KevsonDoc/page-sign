import { Divider, Grid } from '@chakra-ui/react';

const ChakraDivider: React.FC = () => {
  return (
    <Grid
      gridTemplateColumns="1fr 1fr"
      columnGap={12}
      opacity={0.4}
    >
      <Divider marginY={6}/>
      {' '}
      <Divider marginY={6}/>
    </Grid>
  )
}

export default Divider;