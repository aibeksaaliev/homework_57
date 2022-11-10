import React, {useState} from 'react';
import {Profile, ProfileMutation} from "../../types";

interface UserFormProps {
  onSubmit: (newProfile: Profile) => void;
}

const UserForm: React.FC<UserFormProps> = ({onSubmit}) => {
  const [profile, setProfile] = useState<ProfileMutation>({
    name: "",
    email: "",
    role: "",
    status: false
  });

  const onProfileChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const {name, value} = e.target;
    setProfile(prevState => ({...prevState, [name]: value}))
  };

  const onStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setProfile(prevState => ({...prevState, [e.target.name]: true}));
    } else {
      setProfile(prevState => ({...prevState, [e.target.name]: false}));
    }
  }

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit ({
      id: Math.random().toString(),
      ...profile
    })
  }

  return (
    <form onSubmit={onFormSubmit}>
      <h4>Add new user</h4>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            className="form-control bg-white bg-opacity-50"
            type="text"
            onChange={onProfileChange}
          />
        </div>
      <div>
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          name="email"
          className="form-control bg-white bg-opacity-50"
          type="email"
          onChange={onProfileChange}
        />
      </div>
      <div>
        <label htmlFor="role">Role</label>
        <select
          name="role"
          id="role"
          className="form-control bg-white bg-opacity-50"
          onChange={onProfileChange}>
          <option selected>Choose a role</option>
          <option value="user">User</option>
          <option value="editor">Editor</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <div className="form-control">
        <input
          type="checkbox"
          name="status"
          className="btn-check bg-white bg-opacity-50"
          id="status"
          onChange={onStatusChange}
        />
        <label className="btn btn-outline-primary" htmlFor="status">Active</label>
      </div>
      <button type="submit" className="btn btn-primary">Add</button>
    </form>
  );
};

export default UserForm;