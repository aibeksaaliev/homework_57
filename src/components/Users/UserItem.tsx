import React from 'react';
import {Profile} from "../../types";

interface UserItemProps {
  profile: Profile;
}

const UserItem: React.FC<UserItemProps> = ({profile}) => {
  return (
    <div className="card">
      <div className="card-header">
        <span>{profile.role}</span>
      </div>
      <div className="card-body">
        <h5 className="card-title">{profile.name}</h5>
        <p className="card-text">{profile.email}</p>
        <span>{profile.status ? "Active" : "Not active"}</span>
      </div>
    </div>
  );
};

export default UserItem;