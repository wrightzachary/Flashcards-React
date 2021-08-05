// Paired programmed by Kirk and Zach

import './App.css';
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
            updatingCard: null,
            currentCollection: null
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
        this.grabFlashcards(event.id);
        this.setState({
            showFlashcards: true,
            currentCollection: event.name
        });
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
                showFlashcards: false,
                // cardNumber: tempCardNumber
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

    goToNextCard(){
        let tempCardNumber = this.state.cardNumber;
        tempCardNumber++;
        if(tempCardNumber === this.flashcards.length){
            tempCardNumber = 0;
        }
        this.setState({
            cardNumber: tempCardNumber
        });
    }

    goToPreviousCard(){
        let tempCardNumber = this.state.cardNumber;
        tempCardNumber--;
        if(tempCardNumber < 0)
        tempCardNumber = this.flashcards.length - 1;
        this.setState({
            cardNumber: tempCardNumber
        });
        }


    render() { 
        return (  
            <React.Fragment>
                <TitleBar />
                <CreateFlashcard addNewFlashcard={this.addNewFlashcard}  collections={this.state.collections} />
                <UpdateFlashcard currentCard={this.state.updatingCard} putFlashcard={this.putFlashcard} displayForm={this.state.displayForm} collections={this.state.collections}/>
                <DisplayCollections collections={this.state.collections} setShowFlashcards={this.setShowFlashcards} flashcards={this.state.flashcards} />
                <DisplayFlashcards flashcards={this.state.flashcards} showFlashcards={this.state.showFlashcards} showAnswer={this.showAnswer} currentCollection={this.state.currentCollection} changeForm={this.changeForm} />
                {/* <DisplayFlashcards flashcard={this.flashcards[this.state.flashcardNumber]} nextCard={() => this.goToNextCard()} previousCard={() => this.goToPreviousCard()}/> */}
            </React.Fragment>
        );
    }
}
 
export default App;