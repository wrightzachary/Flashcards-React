import React, {Component} from 'react';

class App  extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            flashcards:[], 
            collections: []
         }
    }
    render() { 
        return (  
            <React.Fragment>
                <h1>Flashcard Application</h1>
            </React.Fragment>
        );
    }
}
 
export default App;