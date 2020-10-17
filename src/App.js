import { IconButton, Toolbar, Typography, AppBar ,Button} from '@material-ui/core';
import React, { useEffect, useRef } from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { KafkaWatcher } from './pages/KafkaWatcher';
import {TweenMax, Power3} from 'gsap';
import { VideoBackground } from './VideoBackground';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  Card: {
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

function App() {
  const classes = useStyles();
  let cardsItem = useRef();

  useEffect(() => {
    console.log(cardsItem)
    TweenMax.from(
      cardsItem, .8,
      {
        opacity: 0,
        y: -30,
        ease: Power3.easeInOut,
        delay: 3.8,
        
      }
    )
  }, [])
  return (
    <div>
      <VideoBackground BGvideo={"Spotify"} />
    <div  ref={el => {cardsItem = el}} style={{opacity : 1}}>
    <AppBar position="static" className="App" >
      <Toolbar>
      <IconButton edge="start"color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        <Typography variant="h6">
        News
        </Typography>
        <Button color="inherit" style={{"marginLeft" : "auto"}}>Login</Button>
      </Toolbar>
    </AppBar>
    <KafkaWatcher />
    </div>
    </div>
  );
}

export default App;
