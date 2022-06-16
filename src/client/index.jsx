import * as React from 'react';
import * as  ReactDOM from 'react-dom';
import { ToDo } from '../ToDo';


window.addEventListener('load', ()=> {
  ReactDOM.hydrate(<ToDo />, document.getElementById('react_root'));
})

