import React from 'react'
import "./VideoFooter.css"
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import Ticker from "react-ticker"

function VideoFooter({chanel, description, song}) {
  return (
    <div className="VideoFooter">
    <div className="videoFooter__text">
    <h3>@{chanel}</h3>
    <p>{description}</p>
    <div className="videoFooter__ticker">
    <MusicNoteIcon className="videoFooter__icon"/>
    <Ticker mode="smooth">
    {({ index }) => (
            <>
                <p>{song}</p>
            </>
        )}
    </Ticker>
    </div>
    </div>
    <img 
    className="videoFooter__record" 
    src="https://static.thenounproject.com/png/934821-200.png" 
    alt="videoFooter__record" />
    </div>
  )
}

export default VideoFooter