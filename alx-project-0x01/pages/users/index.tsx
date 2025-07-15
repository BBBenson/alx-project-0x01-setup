import UserCard from "@/components/common/UserCard";
import Header from "@/components/layout/Header";
import { UserProps } from "@/interfaces";

const Users: React.FC<{ posts: UserProps[] }> = ({ posts }) => {
  return (
    <div>
      <Header />
      <main className="p-4">
        <h1 className="text-2xl">Users</h1>
        <div className="grid grid-cols-3 gap-4">
          {posts.map(user => <UserCard key={user.id} {...user} />)}
        </div>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const posts = await res.json();
  return { props: { posts } }
}

export default Users;
