import React from 'react';


const TitleBar = (props) => {

    return ( 
        <React.Fragment>
            <div className="row row-spacer">
                <h1>dCC Flashcards</h1>
            </div>
            <div className="row row-spacer">
                <h2>{props.currentCollection}</h2>
            </div>
        </React.Fragment>
     );
}
 
export default TitleBar;