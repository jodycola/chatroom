import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import actionCable from 'actioncable';
import './index.css';

const connection = {}

connection.cable = actionCable.createConsumer('ws://localhost:3000/cable')

ReactDOM.render(
  <React.StrictMode>
    <App connection={connection}/>
  </React.StrictMode>,
  document.getElementById('root')
);
