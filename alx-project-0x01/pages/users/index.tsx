import type React from "react"
import UserCard from "@/components/common/UserCard"
import Header from "@/components/layout/Header"
import type { UserProps } from "@/interfaces"

const Users: React.FC<{ posts: UserProps[] }> = ({ posts }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">Users Content</h1>
          <button className="bg-blue-700 px-4 py-2 rounded-full text-white">Add User</button>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {posts?.map((user: UserProps, key: number) => (
            <UserCard
              key={key}
              id={user.id}
              name={user.name}
              username={user.username}
              email={user.email}
              address={user.address}
              phone={user.phone}
              website={user.website}
              company={user.company}
            />
          ))}
        </div>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const posts = await response.json()

  return {
    props: {
      posts,
    },
  }
}

export default Users
