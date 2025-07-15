import type React from "react"
import type { UserProps } from "@/interfaces"

const UserCard: React.FC<UserProps> = ({ id, name, username, email, address, phone, website, company }) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
        <p className="text-blue-600 font-medium">@{username}</p>
      </div>

      <div className="space-y-2 text-gray-600">
        <p>
          <span className="font-medium">Email:</span> {email}
        </p>
        <p>
          <span className="font-medium">Phone:</span> {phone}
        </p>
        <p>
          <span className="font-medium">Website:</span> {website}
        </p>
      </div>

      <div className="mt-4 p-3 bg-gray-50 rounded-lg">
        <h3 className="font-semibold text-gray-800 mb-2">Address</h3>
        <p className="text-sm text-gray-600">
          {address.street}, {address.suite}
          <br />
          {address.city}, {address.zipcode}
        </p>
      </div>

      <div className="mt-4 p-3 bg-blue-50 rounded-lg">
        <h3 className="font-semibold text-gray-800 mb-2">Company</h3>
        <p className="text-sm font-medium text-blue-800">{company.name}</p>
        <p className="text-sm text-gray-600 italic">"{company.catchPhrase}"</p>
        <p className="text-xs text-gray-500 mt-1">{company.bs}</p>
      </div>

      <div className="mt-4 text-sm text-gray-500">
        <span>User ID: {id}</span>
      </div>
    </div>
  )
}

export default UserCard
