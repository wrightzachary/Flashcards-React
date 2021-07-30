import React, {Component} from 'react';
import TitleBar from './TitleBar/TitleBar';
import DisplayCollections from './DisplayCollections/displayCollections';
import axios from 'axios';
import CreateFlashcard from './CreateFlashcard/createFlashcard';



class App  extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            flashcards:[], 
            collections: []
         }
    }

    componentDidMount() {
        this.makeGetRequest();
    }

    makeGetRequest = async () => {
        let res = await axios.get('http://127.0.0.1:8000/collection/')
        this.setState({
            collections: res.data
        })
    }

    grabFlashcards = async () => {
        let res = await axios.get(`http://127.0.0.1:8000/flashcard/${this.state.collection.id}`)
        this.setState({
            flashcards: res.data
        })
        console.log(this.state.flashcards)
    }

    addNewFlashcard = async (event) => {
        console.log(event)
        try {
            let response = await axios.post(`http://127.0.0.1:8000/flashcard/`, event);
            this.setState({
                flashcards: response.data
            });
            this.grabFlashcards(this.state.collection.id)
        }
        catch(e){
            console.log(e.message)
        }
    
    }
    
    render() { 
        return (  
            <React.Fragment>
                <TitleBar />
                <DisplayCollections collections={this.state.collections} grabFlashcards={this.grabFlashcards} />
                <CreateFlashcard addNewFlashcard={this.addNewFlashcard} />
            </React.Fragment>
        );
    }
}
 
export default App;