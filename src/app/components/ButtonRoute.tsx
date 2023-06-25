"use client"

import { useRouter } from "next/navigation"
import React from "react"

const ButtonRoute = () => {
  const router = useRouter()

  return (
    <div>
      <button
        onClick={() => router.push("/post")}
        className="cursor-pointer p-5 bg-rose-500 rounded-md my-5 hover:bg-orange-500 ease-out transition">
        Let's start with the Post functionality, just click the button.
      </button>
    </div>
  )
}

export default ButtonRoute
