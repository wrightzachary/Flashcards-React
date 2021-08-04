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
            console.log(response)
        }
        catch(e){
            console.log(e.message)
        }
    }

    putFlashcard = async (event) => {
        console.log(event)
        let cardToUpdate ={
            id : this.state.updatingCard.id,
            question: event.question,
            answer: event.answer,
            collectionId: event.collectionId
        }
        console.log(cardToUpdate);
		try{
			let res = await axios.put(`http://127.0.0.1:8000/flashcardid/${this.state.updatingCard.id}/`, cardToUpdate)
            console.log(res)
            this.state.displayForm = false
		}
		catch(e){
			console.log(e)
		}
    }

    render() { 
        return (  
            <React.Fragment>
                <TitleBar />
                <DisplayCollections collections={this.state.collections} grabFlashcards={this.grabFlashcards} flashcards={this.state.flashcards} />
                <CreateFlashcard addNewFlashcard={this.addNewFlashcard}  collections={this.state.collections} />
                <DisplayFlashcards flashcards={this.state.flashcards} showAnswer={this.showAnswer} changeForm={this.changeForm} />
                <UpdateFlashcard currentCard={this.state.updatingCard} putFlashcard={this.putFlashcard} displayForm={this.state.displayForm} collections={this.state.collections}/>
            </React.Fragment>
        );
    }
}
 
export default App;