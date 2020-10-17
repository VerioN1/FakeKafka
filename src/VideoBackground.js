import React from 'react'
import Spotify from './pages/LifeLine/Videos/Spotify.mp4'

export const VideoBackground = (props) => {

    return (
      <video autoPlay muted
      style={{
          position:"absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit:"cover",
          transform: "translate(-50%,-50%)",
          zIndex: "-1"
      }}
      >
          <source src={Spotify} type="video/mp4"/>
      </video>
    )
}
