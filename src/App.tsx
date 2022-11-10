import React, {useState} from 'react';
import UserForm from "./components/UserForm/UserForm";
import Users from "./components/Users/Users";
import {Profile} from "./types";

function App() {
  const [profiles, setProfiles] = useState<Profile[]>([]);

  const addProfile = (newProfile: Profile) => {
    setProfiles(prevState => [...prevState, newProfile]);
  }

  return (
    <>
      <main className="container-fluid h-100">
        <div className="row">
          <div className="col-3 bg-warning bg-gradient vh-100 pt-5">
            <UserForm onSubmit={addProfile}/>
          </div>
          <div className="col bg-dark pt-5 overflow-scroll vh-100">
            <Users profiles={profiles}/>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
