import React, {Component} from 'react';


class CreateFlashcard extends Component {

    constructor(props) {
      super(props);
      this.state = {
            collections: [],
            question : null,
            answer: null,
            collectionId : null,
      }
    }
  
    // handleChange(event) {
    //     this.setState({
    //         
    //     })
    // }
  
    handleSubmit(event) {
        event.preventDefault();
        const flashcard = {
            collectionId : '',
            question : '',
            answer: '',
        }
        this.setState({
            [event.target.name]: event.target.value
        });
        this.addNewFlashcard(flashcard);
    }
  
    mapCollections = async () => {
        return(
            this.state.collections.map()
        )
        

    }
    


    render() {
      return (
        <div >
            <center>
            <form onSubmit={this.handleSubmit}>
                <div className="row col-sm-3 sidenav">
                <h3>Add A New Flashcard!</h3> 

                        <label>Question:</label>
                        <input type="text" name="question" value={this.state.question} />

                        <label>Answer:</label>
                        <input type="text" name="answer" value={this.state.answer} />
                        <hr/>

                        <select name="collectionId" required id="id_collectionId">
                            <option value selected >Select a collection</option>
                            <option value="collection">{this.mapCollections}</option>
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