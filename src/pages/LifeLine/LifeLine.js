
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect } from 'react'
import video1 from  "./Back.gif";



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundImage: 'url(${video1})',
    backgroundSize: "cover"
  },
  Card: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    background: "linear-gradient(270deg, #6fcbff, #49ceac, #2da5d2, #84cdce)",
    backgroundSize: "200% 200%",
  },

}));

export const LifeLine = () => {

  var pulseMiddle = document.querySelector('.pulseMiddle');
  var waveSVG = document.querySelector('.waveSVG');
  var numItems = 6;
  
  //<img src={video1} width="600" />
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <svg id="waveSVG" x="0px" y="0px" viewBox="0 0 298 53.9">
        <defs>
          <filter id="glow" y="-50%" height="200%">
            <feGaussianBlur stdDeviation="1 1" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path id="pulseMiddle" fill="none" stroke="#fff" strokeWidth="0.2" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M297.5,41.2h-76.6c-0.5,0-0.9,0.4-1,0.8l-1.6,11.3l-3.1-32c0-0.5-0.4-0.9-0.9-0.9c-0.5,0-0.9,0.3-1,0.8
            l-5.3,25.5l-2.3-10.9c-0.1-0.4-0.4-0.7-0.9-0.8c-0.4,0-0.8,0.2-1,0.6l-2.3,4.8h-107c0,0,0,0,0,0H82c-1.6,0-2.2,1.1-2.2,1.6
            l-1.6,11.3l-3.1-52c0-0.5-0.4-0.9-0.9-0.9c-0.5,0-0.9,0.3-1,0.8l-9.3,45.5l-2.3-10.9c-0.1-0.4-0.4-0.7-0.9-0.8c-0.4,0-0.8,0.2-1,0.6
            l-2.3,4.8H0.5"/>
      </svg>
    </div>
  )
}
