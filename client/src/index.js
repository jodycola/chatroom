import React from 'react';
import ReactDOM from 'react-dom';
import actionCable from 'actioncable';
import './index.css';
import App from './App';

const connection = {}

connection.cable = actionCable.createConsumer('ws://localhost:3000/cable')

ReactDOM.render(
  <React.StrictMode>
    <App connection={connection}/>
  </React.StrictMode>,
  document.getElementById('root')
);
