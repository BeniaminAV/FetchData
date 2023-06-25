const getComments = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments")
  return res.json()
}

export default async function Comment() {
  const comments = await getComments()

  return (
    <div className="mx-20">
      <h2 className="page-title">This is Comments Page</h2>
      <div>
        {comments.map((comment: any) => {
          return (
            <div className="text-neutral-500">
              <strong className="text-yellow-500">{comment.id}.</strong>{" "}
              {comment.body}
            </div>
          )
        })}
      </div>
    </div>
  )
}
