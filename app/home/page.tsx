"use client"
import Link from 'next/link'
import React, { useState } from 'react'

const page = () => {

 const [open, setOpen] = useState<any>();
  return (
    <div>
      <div className="">Home {open}</div>
      <Link href="/">Index</Link>

      <input type="text" onChange={(e) => setOpen(e.target.value)} />
    </div>
  )
}

export default page