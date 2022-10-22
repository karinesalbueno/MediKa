import React from 'react';
import './index.css';

const Navigation = (props) => {
  return (
    <nav >
      {props.isLogged ?
        <div className='nav'>
          <h1>mediKa</h1>
          <button onClick={props.onLogout}>Sair</button>
        </div>
        :
        <h3>mediKa</h3>}
    </nav>
  );
};

export default Navigation;
