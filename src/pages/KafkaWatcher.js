import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Grid, Typography, Container } from '@material-ui/core'
import { VideoBackground } from '../VideoBackground';
import CustomizedDialogs from './Demo';
import videoBG from  "./LifeLine/Videos/Pulse.gif";


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    Card: {
      backgroundImage: 'url('+videoBG+')',
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      backgroundSize: "cover",
      backgroundPosition: "center center",
      background: "linear-gradient(270deg, #6fcbff, #49ceac, #2da5d2, #84cdce)",
      backgroundRepeat: "no-repeat",
      height: "100%"
    },

  }));
  

export const KafkaWatcher = () => {

    const classes = useStyles();

    return (
        <div className={classes.root} >
            <br></br>
            <Container maxWidth={false}>
            <Grid container spacing={5}>
                <Grid item xs={6}>
                    <Card className={classes.Card}>
                        <VideoBackground BGvideo={"Pulse"}/>
                        <Typography variant="h2">hey</Typography>
                        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                        <CustomizedDialogs />
                    </Card>
                </Grid>
                <Grid item xs={6} >
                    <Card className={classes.Card}>
                        <Typography variant="h2">Worl</Typography>
                      
                    </Card>
                </Grid>
            </Grid>
            </Container>
        </div>
    )
}
