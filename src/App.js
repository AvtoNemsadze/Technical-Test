import React, { useState, useEffect } from 'react';
import './App.css';


// users api
// https://api.github.com/users/john-smilga/followers?per_page=100

function App(){
  const [githubUsers, setGithubUsers] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/john-smilga/followers?per_page=100")
    .then((res) => res.json())
    .then((githubUsers) => setGithubUsers(githubUsers));
  }, []);


  return (
    <>
      <h2>github users</h2>
      <ul className='users'>
        {githubUsers.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url} target="_blank" rel="noreferrer">profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default App;
