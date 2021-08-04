import React from 'react';
import useForm from '../Form/useForm';


const CreateFlashCard = (props) => {
    const { values, handleChange, handleSubmit } = useForm(create);

    function create(){
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
                    <select name="collectionId" onChange={handleChange} values={values.id}>
                        {props.collections.map((collection, id) => {
                            <option key={id}>{id}</option>
                            return (
                                <option value={id+1}>
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