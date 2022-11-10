import React from 'react';
import UserItem from "./UserItem";
import {Profile} from "../../types";

interface UserProps {
  profiles: Profile[];
}

const Users: React.FC<UserProps> = ({profiles}) => {
  return (
    <>
      {profiles.map((profile) => {
        return <UserItem key={profile.id} profile={profile}/>
      })}
    </>
  );
};

export default Users;