import React from 'react';
import './displayFlashcards.css';

const DisplayFlashcards = (props)=> {
   
    if (props.showFlashcards === true){
        return (
            <React.Fragment>
                <div className="flashcards">
                        <h1>{props.currentCollection} Flashcards: </h1>
                        {props.flashcards.map((flashcard, id) => {
                            return (
                                <div key= {id}>
                                    <h2>{flashcard.question}</h2>
                                    <div className="d-flex justify-content-center">
                                        <button onClick={() => props.previousCard()}>Previous FlashCard</button>
                                        <button className="btn btn-primary w-md-25"onClick={() => props.showAnswer(flashcard.answer)}>Answer</button>
                                        <button  className="btn btn-primary w-md-25" onClick={() => props.changeForm(flashcard.id)} value={id}>Update Flashcard</button> 
                                        <button onClick={() => props.nextCard()}>Next Flashcard</button>
                                    </div>
                                </div>
                            )},
                        )}
                </div>
            </React.Fragment>
        )
    }
    else{
        return null
    }
}

export default DisplayFlashcards;