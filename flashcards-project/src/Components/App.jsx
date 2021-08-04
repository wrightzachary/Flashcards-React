// Paired programmed by Kirk and Zach


import React, {Component} from 'react';
import TitleBar from './TitleBar/TitleBar';
import DisplayCollections from './DisplayCollections/displayCollections';
import axios from 'axios';
import CreateFlashcard from './CreateFlashcard/createFlashcard';
import DisplayFlashcards from './DisplayFlashcards/displayFlashcards';
import UpdateFlashcard from './UpdateFlashcard/updateFlashcard';


class App  extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            flashcards:[], 
            collections: [],
            showFlashcards: false,
            displayForm : false,
            updatingCard: null
         }
    }

    changeForm = async (id)=>{
        let res = await axios.get(`http://127.0.0.1:8000/flashcardid/${id}/`)
        this.setState({
            displayForm:true,
            updatingCard: res.data
        })
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
    setShowFlashcards = async (event) => {
        this.setState({
            showFlashcards: true
        })
        this.grabFlashcards(event);
    }
    grabFlashcards = async (event) => {
            let res = await axios.get(`http://127.0.0.1:8000/flashcard/${event}/`)
            this.setState({
                flashcards: res.data
            })
    }

    showAnswer = (event) => {
        window.alert(event);
        this.setState({
            showFlashcards: false
        })
    }

    addNewFlashcard = async (event) => {
        try {
            let response = await axios.post('http://127.0.0.1:8000/flashcard/', event);
            this.setState({
                showFlashcards: false
            })
        }
        catch(e){
            console.log(e.message)
        }
    }

    putFlashcard = async (event) => {
        let cardToUpdate ={
            id : this.state.updatingCard.id,
            question: event.question,
            answer: event.answer,
            collectionId: event.collectionId
        }
		try{
			let res = await axios.put(`http://127.0.0.1:8000/flashcardid/${this.state.updatingCard.id}/`, cardToUpdate)
            this.setState({
                displayForm: false,
                showFlashcards: false
            })           
		}
		catch(e){
			console.log(e)
		}
    }

    render() { 
        return (  
            <React.Fragment>
                <TitleBar />
                <DisplayCollections collections={this.state.collections} setShowFlashcards={this.setShowFlashcards} flashcards={this.state.flashcards} />
                <CreateFlashcard addNewFlashcard={this.addNewFlashcard}  collections={this.state.collections} />
                <DisplayFlashcards flashcards={this.state.flashcards} showFlashcards={this.state.showFlashcards} showAnswer={this.showAnswer} changeForm={this.changeForm} />
                <UpdateFlashcard currentCard={this.state.updatingCard} putFlashcard={this.putFlashcard} displayForm={this.state.displayForm} collections={this.state.collections}/>
            </React.Fragment>
        );
    }
}
 
export default App;