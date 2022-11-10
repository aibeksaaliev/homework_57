import React from 'react';
import {Profile} from "../../types";

interface UserItemProps {
  profile: Profile;
}

const UserItem: React.FC<UserItemProps> = ({profile}) => {
  return (
    <div className="card mb-2">
      <div className="card-header bg-warning bg-gradient">
        <span className="text-capitalize fw-bold text-white">{profile.role}</span>
      </div>
      <div className="card-body">
        <h5 className="card-title text-capitalize">Name: {profile.name}</h5>
        <p className="card-text">E-mail: {profile.email}</p>
        <span>Status: {profile.status ? "Active" : "Not active"}</span>
      </div>
    </div>
  );
};

export default UserItem;