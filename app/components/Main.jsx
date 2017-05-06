import React from 'react';
import Navigation from 'Navigation';

const Main = (props) => {
  return (
    <div>
      <div>
        <div>
          <Navigation/>
          <p>Main.jsx Rendered</p>
          {props.children}
        </div>
      </div>
    </div>
  );
}

export {Main as default};
