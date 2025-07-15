"use client"

import type React from "react"

import PostCard from "@/components/common/PostCard"
import PostModal from "@/components/common/PostModal"
import Header from "@/components/layout/Header"
import type { PostData, PostProps } from "@/interfaces"
import { useState } from "react"

interface PostsPageProps {
  posts: PostProps[]
}

const Posts: React.FC<PostsPageProps> = ({ posts }) => {
  const [isModalOpen, setModalOpen] = useState(false)
  const [allPosts, setAllPosts] = useState<PostProps[]>(posts)

  const handleAddPost = (newPost: PostData) => {
    const postWithId = { ...newPost, id: allPosts.length + 1 }
    setAllPosts([postWithId, ...allPosts])
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="p-4 flex-grow">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Post Content</h1>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-blue-700 px-4 py-2 rounded-full text-white hover:bg-blue-800 transition"
          >
            Add Post
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {allPosts?.map(({ title, body, userId, id }: PostProps) => (
            <PostCard title={title} body={body} userId={userId} id={id} key={id} />
          ))}
        </div>
      </main>

      {isModalOpen && <PostModal onClose={() => setModalOpen(false)} onSubmit={handleAddPost} />}
    </div>
  )
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts")
  const posts = await response.json()

  return {
    props: {
      posts,
    },
  }
}

export default Posts
