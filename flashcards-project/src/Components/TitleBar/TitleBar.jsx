import React from 'react';
import './TitleBar.css'


const TitleBar = (props) => {

    return ( 
        <div className="titlebar">
            <div className="col-md-12" style={{padding: 0}}>
                <div className="titlebar-nav">
                    <h1>dCC Flashcards</h1>
            </div>
            </div>
        </div>
     );
}
 
export default TitleBar;