import React from 'react'
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./Videos.css"

function videos({ image, title, channel, views, timestamp, channelimage}) {
  return (
    <div className="videocard">
      <img className='videocard__thumbnail' src={image} alt="" />
      <div className="video__info">
        <AccountCircleIcon
          className="video__avatar"
          alt={channel}
          src={channelimage}
        />
        <div className="videotext">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} . {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default videos