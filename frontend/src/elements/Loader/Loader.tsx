import React, { FC } from 'react'

interface Props {
  isShown: Boolean
}

export const Loader: FC<Props> = ({isShown}) => {
  return (
    <div className="lds-ellipsis" style={{'display': isShown ? 'inline-block' : 'none'}}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}