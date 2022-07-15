import React from 'react'

const GamePlay = (props) => {
    const classes = props.className ? `${props.className} gameX `: 'gameX';
  return (
    <span className={classes} onClick={props.onClick}>  {props.state} </span>
  )
}
export default GamePlay