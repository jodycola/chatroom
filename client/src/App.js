import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Join from './components/Join';
import Chat from './components/Chat';

export default function App() {

  // States
  const [currentUser, setCurrentUser] = useState(null);

  // Sets current user local storage token
  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      fetch("http://localhost:3000/auth", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then(res => res.json())
        .then(setCurrentUser)
    }
  }, [])

  // // Logs a user out and removes local stroage token
  // const logout = () => {
  //   localStorage.removeItem("token")
  //   setCurrentUser(null)
  // }

  return (
    <Router>
        <Route exact path="/">
          <Join
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
          />
        </Route>
        <Route exact path="/chat">
          <Chat
            currentUser={currentUser}
          />
        </Route>
    </Router>
  );
}