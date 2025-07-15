import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, phone, website, company }) => {
  return (
    <div className="bg-white rounded shadow p-4 m-2">
      <h2 className="text-xl font-bold">{name}</h2>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>Website: {website}</p>
      <p>Company: {company.name}</p>
    </div>
  );
};

export default UserCard;
