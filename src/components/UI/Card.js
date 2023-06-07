import React from 'react'

const Card = (children) => {
    const classes = 'card ' + children.className;
  return (
   <>
   <div className={classes}>{children.children}</div>
   </>
  )
}

export default Card;