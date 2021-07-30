import React, {Component} from 'react';
import TitleBar from './TitleBar/TitleBar';
import DisplayCollections from './DisplayCollections/displayCollections';
import DisplayFlashcards from './DisplayFlashcards/displayFlashcards';
import axios from 'axios';



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
        let collection = (event);
        console.log(collection);
        let res = await axios.get(`http://127.0.0.1:8000/flashcard/${collection}/`);
        this.setState({
            flashcards: res.data
        })
        console.log(this.state.flashcards)
    }

    showAnswer = (event) => {
        let flashcardAnswer = (event);
        window.alert(flashcardAnswer);
    }

    render() { 
        return (  
            <React.Fragment>
                <TitleBar />
                <DisplayCollections collections={this.state.collections} grabFlashcards={this.grabFlashcards} />
                <DisplayFlashcards flashcards={this.state.flashcards} showAnswer={this.showAnswer} />
            </React.Fragment>
        );
    }
}
 
export default App;