import React from 'react';
import Nav from 'Nav';

const Main = (props) => {
    return(
        <div>
            <div>
                <div>
                    <Nav/>
                    <p>Main.jsx</p>
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export {Main as default};
