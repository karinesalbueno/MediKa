import React from 'react';
import './index.css';

const Navigation = (props) => {
  return (
    <nav >
      {props.isLogged ?
        <div className='nav'>
          <h3>mediKa</h3>
          <button onClick={props.onLogout}>Sair</button>
        </div>
        :
        <h3>mediKa</h3>}
    </nav>
  );
};

export default Navigation;
