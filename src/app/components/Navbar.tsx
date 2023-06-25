import Link from "next/link"

const Navbar = () => {
  return (
    <div className="flex items-center justify-center gap-x-5 uppercase mt-10">
      <Link href={"/"}>home</Link>
      <Link href={"/post"}>post</Link>
      <Link href={"/comments"}>comments</Link>
      <Link href={"/albums"}>albums</Link>
      <Link href={"/photo"}>photo</Link>
      <Link href={"/users"}>users</Link>
    </div>
  )
}

export default Navbar
