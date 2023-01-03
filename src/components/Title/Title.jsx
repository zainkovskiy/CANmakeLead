import React from "react";
import './Title.scss'
export const Title = ({ title, anchor }) => {
  return (
    <div className={`title ${anchor || ''}`}>
      <span className='text title__text '>{title}</span>
    </div>
  )
}