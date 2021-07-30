import React, {component} from 'react';
import DisplayCollections from '../DisplayCollections/displayCollections';

class CreateFlashcard extends React.Component {
    constructor(props) {
      super(props);
      this.state = {

            collections: [],

            question : '',
            answer: '',
            collectionId : '',

      }
    }
  
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
  
    handleSubmit(event) {
        event.preventDefault();
        const flashcard = {
            
            collectionId : this.state.collectionId,
            question : this.state.question,
            answer: this.state.answer,

        }

        this.props.addNewFlashcard();
        this.setState({
            question : '',
            answer: '',
            collectionId : '',

        });
    }
  
    render() {
      return (
        <div >
            <center>
            <form onSubmit={this.handleSubmit}>
                <div className="row col-sm-3 sidenav">
                <h3>Add A New Flashcard!</h3> 

                        <label>Question:</label>
                        <input type="text" name="question" value={this.state.question}
                        onChange={this.handleChange} />

                        <label>Answer:</label>
                        <input type="text" name="answer" value={this.state.answer}
                        onChange={this.handleChange} />
                        <hr/>
                        <input type="submit" class="btn btn-info" value="Add" />

                        <select name="collectionId" required id="id_collectionId">
                            <option value selected>Select a collection</option>
                            <option value="collection">{this.props.collectionId.name}</option>
                        </select>

                        <input type="submit" class="btn btn-info" value="Add" />

                </div>
            </form>
            </center>
        </div>
      )
    }
  }

export default CreateFlashcard;