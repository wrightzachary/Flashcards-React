import React, {Component} from 'react';
import TitleBar from './TtitleBar/TitleBar';

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
                <TitleBar />
            </React.Fragment>
        );
    }
}
 
export default App;