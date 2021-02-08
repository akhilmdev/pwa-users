import React, { useEffect, useState } from 'react';
import './App.css';
import UserCard from './userCard/userCard';

interface UserInterface {
  avatar: string,
  email: string,
  first_name: string,
  id: number,
  last_name: string
}

function App() {

  const [users, setUsers] = useState<UserInterface[]>([]);
  // const [user, setUser] = useState<UserInterface | null>(null);

  useEffect(() => {
    fetch("https://6021303e46f1e40017804036.mockapi.io/users")
      .then(users => users.json())
      .then((users: any) => {
        setUsers(users);
      })
  }, []);

  return (
    <div className="App">
      {users?.map((user: UserInterface) => {
        return (
          <div key={user.id} className="user-card-wrapper">
            <UserCard {...user}></UserCard>
          </div>
        )
      })}
    </div>
  );
}

export default App;
