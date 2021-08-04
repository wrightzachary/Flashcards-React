import React from 'react';

const DisplayCollections = (props) => {
    return (
        <React.Fragment>
            <table>
                <tbody>
                    <tr><td>Collections</td></tr>
                        {props.collections.map((collection, id) => {
                            return (
                                <tr key= {id}>
                                    <td>{collection.name}</td>
                                    <td className="d-flex justify-content-center">
                                        <button className="btn btn-primary w-md-25" onClick={() => props.setShowFlashcards(collection.id)}>Flashcards</button>
                                    </td>
                                </tr>
                            )}
                        )}
                </tbody>
            </table>
        </React.Fragment>
    )
}


export default DisplayCollections;