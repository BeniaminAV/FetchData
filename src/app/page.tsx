import ButtonRoute from "./components/ButtonRoute"

export default function Home() {
  return (
    <main className="mx-20 text-center">
      <h2 className="page-title">This is HomePage</h2>
      <p className="text-2xl text-green-500">
        I have created a simple application in Next.js where I made a fetch API
        call to https://jsonplaceholder.typicode.com/. I retrieved information
        about posts, comments, albums, photos, and users, and displayed them in
        the application.
      </p>
      <p>Let's start with the Post functionality, just click the button</p>
      <ButtonRoute />
    </main>
  )
}
