import React from 'react';
import './displayCollections.css';


const DisplayCollections = (props) => {
    return (
        <React.Fragment>
            <div className="collections">
            <h1>Collections:</h1>
                <div>
                        {props.collections.map((collection, id) => {
                            return (
                                <div className="info" key= {id}>
                                    <h2>{collection.name}</h2>
                                        <button className="btn btn-primary w-md-25" onClick={() => props.setShowFlashcards(collection)}>Flashcards</button>
                                </div>
                            )}
                        )}
                </div>
            </div>
            
        </React.Fragment>
    )
}


export default DisplayCollections;