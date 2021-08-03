import React, {Component} from 'react';
import TitleBar from './TitleBar/TitleBar';
import DisplayCollections from './DisplayCollections/displayCollections';
import axios from 'axios';
import CreateFlashcard from './CreateFlashcard/createFlashcard';
import DisplayFlashcards from './DisplayFlashcards/displayFlashcards';



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

    grabFlashcards = async (event) => {
        let res = await axios.get(`http://127.0.0.1:8000/flashcard/${event}/`)
        this.setState({
            flashcards: res.data
        })
    }

    showAnswer = (event) => {
        window.alert(event);
    }

    addNewFlashcard = async (event) => {
        try {
            let response = await axios.post('http://127.0.0.1:8000/flashcard/', event);
        }
        catch(e){
            console.log(e.message)
        }
    }
    
    render() { 
        return (  
            <React.Fragment>
                <TitleBar />
                <DisplayCollections collections={this.state.collections} grabFlashcards={this.grabFlashcards} flashcards={this.state.flashcards} />
                <CreateFlashcard addNewFlashcard={this.addNewFlashcard}  collections={this.state.collections} />
                <DisplayFlashcards flashcards={this.state.flashcards} showAnswer={this.showAnswer} />
            </React.Fragment>
        );
    }
}
 
export default App;