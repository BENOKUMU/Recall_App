import { useState } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import recall from './assets/recall.png';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container maxWidth="lg">
      <AppBar position='static' color='inherit'>
        <Typography variant='h2' align='center'>Recall</Typography>
        <img src={recall} alt="recall" height='60' />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify='space-between' alignItems='stretch' spacing={4}>
            
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}

export default App
