import React from 'react';

const DisplayFlashcards = (props)=> {

   

    return (
        <React.Fragment>
            <table>
                <tbody>
                    <tr><td>Flashcards</td></tr>
                        {props.flashcards.map((flashcard, id) => {
                            return (
                                <tr key= {id}>
                                    <td>{flashcard.question}</td>
                                    <td className="d-flex justify-content-center">
                                        <button className="btn btn-primary w-md-25"onClick={() => props.showAnswer(flashcard.answer)}>Answer</button>
                                    </td>
                                    <td className="d-flex justify-content-center">
                                        <button className="btn btn-primary w-md-25" onClick={() => props.changeForm(flashcard.id)}>
                                        Update Flashcard
                                        </button>
                                    </td>
                                </tr>
                            )}
                        )}
                </tbody>
            </table>
        </React.Fragment>
    )
}

export default DisplayFlashcards;