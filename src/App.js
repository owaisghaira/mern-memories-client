import React, { useEffect } from 'react';
import { Container, AppBar, Typography, Grid, Grow } from '@material-ui/core'
import memories from './images/memories.png'
import Posts from './components/Posts/Posts'
import { getPosts } from './actions/posts'
import Form from './components/Form/Form'
import { useDispatch } from 'react-redux'
import useStyles from './styles'

function App() {
  const classes = useStyles();
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])

  return (
    <div>
      <Container maxWidth='lg'>
        <AppBar className={classes.appBar} position='static' color='inherit'>
          <Typography className={classes.heading} variant='h2' align='center'>Memories</Typography>
          <img className={classes.image} src={memories} alt='memories' width='60' />

        </AppBar>
        <Grow in>
          <Container>
            <Grid container justify='space-between' alignItems='stretch' spacing={4}>
              <Grid item xs={12} md={7}>
                <Posts />
              </Grid>
              <Grid item xs={12} md={4}>
                <Form />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </div>
  );
}

export default App;
