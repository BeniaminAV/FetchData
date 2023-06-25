"use client"

import React from "react"

interface ButtonProps {
  onClick?: () => void
  label?: string
}

const Button: React.FC<ButtonProps> = ({ onClick, label }) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer p-5 bg-rose-500 rounded-md my-5 hover:bg-orange-500 ease-out transition">
      {label}
    </div>
  )
}

export default Button
