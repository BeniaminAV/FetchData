const getUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  return res.json()
}

export default async function Users() {
  const users = await getUsers()

  return (
    <div className="mx-20">
      <h2 className="page-title">This is User Page</h2>
      <div>
        {users.map((user: any) => {
          return (
            <div className="flex items-center justify-start gap-x-2">
              <strong className="text-blue-500">{user.id}. </strong>
              <h2 className="text-purple-500">{user.name}</h2>
            </div>
          )
        })}
      </div>
    </div>
  )
}
