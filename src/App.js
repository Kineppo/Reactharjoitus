import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Moro {this.state.name}</h1>
            
                <br><br><br>
            
                <h1>Moro {this.state.name}</h1>
                <input type="text" value={this.state.value} onChange={this.handleChange} />

            </div>
          
        );
    }
    
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    constructor(props){
        super(props);
        this.state = {name:'', value:''};
        
        this.handleChange = this.handleChange.bind(this);

    }
    

    componentDidMount(){
        this.setState({
            name:'Pingpong'
        });
    }
}

export default App;
