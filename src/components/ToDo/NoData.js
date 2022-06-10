import React from 'react'

export default function NoData() {
  return (
    <div className='flex flex-col items-center justify-center bg-white maxHeightForTable'>
        <img src='https://img.freepik.com/free-vector/no-data-concept-illustration_114360-626.jpg?w=1380&t=st=1654441112~exp=1654441712~hmac=fbb5d54c6077eb1395dea1cf7f810840cd715bf53f3b397643eacb7ff97f6f5a' alt='No Data Found!' className='h-96'/>
        <span className='text-2xl text-slate-300'>No Data Found!</span>
        <span className='text-lg text-slate-300'>Add todo items from top add button.</span>
    </div>
  )
}
