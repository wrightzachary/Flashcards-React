// import axios from 'axios';
import React, { useEffect } from 'react';
import useForm from '../Form/useForm';


const CreateFlashCard = (props) => {
    const { flashcards, handleChange, handleSubmit } = useForm(create);

    function create(){
      // axios.post ('http://127.0.0.1:8000/flashcard/')
      console.log(`${flashcards.question} was added to ${flashcards.collection} collection `)
      // props.addNewFlashcard();
      console.log(props.addNewFlashcard);
      props.addNewFlashcard(flashcards);
    }

  return ( 
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <label>
            Question:
            <input 
                type="question"
                name="question"
                onChange={handleChange}
                values={flashcards.question}
                required={true}
              />
        </label>
        <label>
            Answer:
              <input 
                  type="answer"
                  name="answer"
                  onChange={handleChange}
                  values={flashcards.answer}
                  required={true}
                />
        </label>
        {/* <label>
            Collection:
              <input 
                  type="collectionId"
                  name="collectionId"
                  onChange={handleChange}
                  values={flashcards.collection}
                  required={true}
                />
        </label> */}
        <input type="submit" className="btn btn-info" value="Add" />

      </form>
    </React.Fragment>
   );
}
 
export default CreateFlashCard;