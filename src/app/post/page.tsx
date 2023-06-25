const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  return res.json()
}

export default async function Post() {
  const posts = await getPosts()

  return (
    <div className="mx-20">
      <h2 className="page-title">This is Post Page</h2>
      <div>
        {posts.map((post: any) => {
          return (
            <div>
              <h2 className="text-green-500">
                <strong className="text-rose-500">{post.id}</strong>. {""}
                {post.title}
              </h2>
              <p className="text-neutral-500">{post.body}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
