import React from 'react';

const UserForm = () => {
  return (
    <form>
      <h4>Add new user</h4>
        <div className="">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            className="form-control"
            type="text"
          />
        </div>
      <div>
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          name="email"
          className="form-control"
          type="email"
        />
      </div>
      <div>
        <label htmlFor="role">Role</label>
        <select name="role" id="role" className="form-control">
          <option selected>Choose a role</option>
          <option value="user">User</option>
          <option value="editor">Editor</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <div className="form-control">
        <input type="checkbox" className="btn-check" id="btncheck1" autoComplete="off"/>
        <label className="btn btn-outline-primary" htmlFor="btncheck1">Active</label>
      </div>
    </form>
  );
};

export default UserForm;