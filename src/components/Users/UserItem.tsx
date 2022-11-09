import React from 'react';

const UserItem = () => {
  return (
    <div className="card">
      <div className="card-header">
        <span>Role</span>
      </div>
      <div className="card-body">
        <h5 className="card-title">Name</h5>
        <p className="card-text">E-mail</p>
        <span>Active</span>
      </div>
    </div>
  );
};

export default UserItem;