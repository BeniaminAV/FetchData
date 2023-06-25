"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import Button from "../components/Button"

interface PhotoProps {
  url: string
}

const getPhoto = async (): Promise<PhotoProps> => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/photos", {
      cache: "no-store",
    })
    const data: PhotoProps[] = await res.json()
    const randomPhoto = data[Math.floor(Math.random() * data.length)]
    return randomPhoto
  } catch (error) {
    console.error("Something went wrong", error)
    throw error
  }
}

export default function Photo() {
  const [photo, setPhoto] = useState<PhotoProps | null>(null)

  const fetchPhoto = async () => {
    try {
      const randomPhoto = await getPhoto()
      setPhoto(randomPhoto)
    } catch (error) {
      console.error("Something went wrong", error)
    }
  }

  useEffect(() => {
    fetchPhoto()
  }, [])

  const handleChangePhoto = () => {
    fetchPhoto()
  }

  return (
    <div className="mx-20">
      <h2 className="page-title">This is Photo Page</h2>
      {photo && (
        <div className="flex items-center justify-center">
          <Image src={photo.url} priority alt="img" width={300} height={300} />
        </div>
      )}
      <div className="flex items-center justify-center">
        <Button label="Change Color Image" onClick={handleChangePhoto} />
      </div>
    </div>
  )
}
