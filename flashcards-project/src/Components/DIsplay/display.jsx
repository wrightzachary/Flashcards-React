import React from 'react';
import './display.ccs';


function Display(props){
    return (
        <div className="display">
            <div className="collection">
                <h1 className="collection">{props.book.title}</h1>
            </div>
        </div>
    );
}

export default Display;