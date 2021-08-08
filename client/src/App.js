import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Join from './components/Join';
import Chat from './components/Chat';

export default function App({ connection }) {

  // States
  const API = 'https://limitless-hollows-63161.herokuapp.com/'
  const [currentUser, setCurrentUser] = useState(null);

  // Sets current user local storage token
  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      fetch(`${API}auth`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then(res => res.json())
        .then(setCurrentUser)
    }
  }, [])


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
            setCurrentUser={setCurrentUser}
            connection={connection}
          />
        </Route>
    </Router>
  );
}