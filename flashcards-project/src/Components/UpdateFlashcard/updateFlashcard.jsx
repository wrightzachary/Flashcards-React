import React from 'react';
import useForm from '../Form/useForm';
import './updateflashcard.css';


const UpdateFlashcard = (props) => {

    const { values, handleChange, handleSubmit } = useForm(update);
    function update(){
        props.putFlashcard(values);
      }

    if (props.displayForm === true) {
        return ( 
            <React.Fragment>
                <div className="update">
                <h1>Update a flashcard:</h1>
                <form onSubmit={handleSubmit}>
                        <label>
                            Question:
                            <input 
                                type="text"
                                name="question"
                                onChange={handleChange}
                                placeholder={props.currentCard.question}
                                values={values.question}
                                required={false}
                            />
                        </label>
                        <label>
                            Answer:
                            <input 
                                type="text"
                                name="answer"
                                onChange={handleChange}
                                placeholder={props.currentCard.answer}
                                values={values.answer}
                                required={false}
                                />
                        </label>
                        <label>
                            Collection:
                                <select name="collectionId"  onChange={handleChange} values={values.collectionId} required={false}>
                                    {props.collections.map((collection,  id) => {
                                        <option key={id}>{id}</option>
                                        return ( 
                                            <option value={collection.id}>
                                                {collection.name}
                                            </option>
                                        )
                                    })}
                                </select>
                        </label>
                    <input type="submit" className="btn btn-info" value="Add" />
                </form>
            </div>
            </React.Fragment>
        );
    }
    else{
        return null
    }
}  

export default UpdateFlashcard;