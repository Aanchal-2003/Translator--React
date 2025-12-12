import React from 'react'

export default function Display({ translate }) {
  return (
    <div className='box shadow w-50 bg-light mx-auto  rounded-3 mt-5 p-3'>
      <h2>{translate}</h2>
    </div>
  )
}
