// import axios from 'axios';
import React from 'react';
import useForm from '../Form/useForm';


const CreateFlashCard = (props) => {
    const { values, handleChange, handleSubmit } = useForm(create);

    function create(){
      console.log(`${values.question} was added to ${values.collection} collection `)
      props.addNewFlashcard(values);
    }

  return ( 
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <label>
            Question:
            <input 
                type="text"
                name="question"
                onChange={handleChange}
                values={values.question}
                required={true}
              />
        </label>
        <label>
            Answer:
              <input 
                  type="text"
                  name="answer"
                  onChange={handleChange}
                  values={values.answer}
                  required={true}
                />
        </label>
        <label>
            Collection:
                    <select>
                        {props.collections.map((collection, id) => {
                            <option key={id}>{id}</option>
                            {console.log(collection)}
                            return (
                                <option>
                                    {collection.name}
                                </option>
                            )
                        })}
                    </select>
        </label>
        <input type="submit" className="btn btn-info" value="Add" />

      </form>
    </React.Fragment>
   );
}
 
export default CreateFlashCard;