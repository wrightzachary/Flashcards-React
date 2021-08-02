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
        console.log(event)
        try {
            let response = await axios.post('http://127.0.0.1:8000/flashcard/', event);
            this.setState({
                flashcards: response.data
            });
            this.grabFlashcards(this.state.collection.id)
        }
        catch(e){
            console.log(e.message)
        }
    }

    mapCollections = async () => {
        let optionItems = this.state.collections.map((collection) => {
            <option key={collection}>{collection}</option>
            return (
                <div>                
                    <div className="row">
                        <div className="col-9 text-left">
                            <label>Select the percent to transfer</label>
                        </div>
                        <div className="col-2 text-left">
                            <select>
                                {optionItems}
                            </select>
                        </div>
                        <div className="col-1 text-left">
                            <label>&nbsp;</label>
                        </div>
                    </div>
                </div>
            )
    })}
    
    render() { 
        return (  
            <React.Fragment>
                <TitleBar />
                <DisplayCollections collections={this.state.collections} grabFlashcards={this.grabFlashcards} />
                <CreateFlashcard addNewFlashcard={this.addNewFlashcard} mapCollections={this.mapCollections} collections={this.state.collections} />
                <DisplayFlashcards flashcards={this.state.flashcards} showAnswer={this.showAnswer} />
            </React.Fragment>
        );
    }
}
 
export default App;