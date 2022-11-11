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

    setProfile({name: "", email: "", role: "", status:false});
  }

  return (
    <form onSubmit={onFormSubmit}>
      <h4 className="text-uppercase text-center">Add new user</h4>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            value={profile.name}
            required
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
          value={profile.email}
          required
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
          value={profile.role}
          required
          className="form-control bg-white bg-opacity-50"
          onChange={onProfileChange}>
          <option disabled selected value="">Choose a role</option>
          <option value="user">User</option>
          <option value="editor">Editor</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <div className="form-control w-50 bg-white bg-opacity-50 my-3 mx-auto">
        <label htmlFor="status">
        <input
          type="checkbox"
          name="status"
          className="bg-white bg-opacity-50 mx-3"
          id="status"
          onChange={onStatusChange}
        />
        Active</label>
      </div>
      <button type="submit" className="btn btn-primary w-50 mx-auto d-block bg-dark">Add</button>
    </form>
  );
};

export default UserForm;