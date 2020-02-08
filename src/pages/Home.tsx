import React from "react";
import { useGetUsersQuery } from "../generated/graphql";

interface Props {}

export const Home: React.FC<Props> = () => {
  const { data } = useGetUsersQuery({ fetchPolicy: "network-only" });

  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <div>Users:</div>
      <ul>
        {data.getUsers.map(user => {
          return (
            <li key={user.id}>
              Email: {user.email} Username: {user.username}{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
