const getAlbum = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/albums")
  return res.json()
}

export default async function Album() {
  const albums = await getAlbum()

  return (
    <div className="mx-20">
      <h2 className="page-title">This is Album Page</h2>
      <div>
        {albums.map((album: any) => {
          return (
            <div className="text-neutral-500">
              <strong className="text-orange-500">
                {album.id}. {""}
              </strong>
              {album.title}
            </div>
          )
        })}
      </div>
    </div>
  )
}
