import React from 'react'

export default function Header() {
  return (
    <div>
        <div className="border-2 border-black text-3xl flex w-screen justify-between">
          <div className="text-8xl">GARDENA CINEMA</div>
          <div className="w-1/3 flex flex-col justify-end">
            <div className="flex flex-row justify-between"><span>HOME</span><span>EVENTS</span><span>CONTACT</span></div>
          </div>
        </div>
      </div>
  )
}
