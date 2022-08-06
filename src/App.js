import React from 'react';  
import {QUOTES_ARRAY} from "./QuotesComponent.js";
import './App.css'

let randomIndex = Math.round(Math.random() * QUOTES_ARRAY.length);

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            quote: QUOTES_ARRAY[randomIndex].quote,
            author: QUOTES_ARRAY[randomIndex].author
        }

        this.fetchNewQuote = this.fetchNewQuote.bind(this);
    }

    fetchNewQuote(){
        let newRandomIndex = Math.round(Math.random() * QUOTES_ARRAY.length);
        
        this.setState({
            quote: QUOTES_ARRAY[newRandomIndex].quote,
            author: QUOTES_ARRAY[newRandomIndex].author
        })
    }

    render(){
        return(
            <div class='container'>
                <div class="row py-5">
                    <wrapper id="quote-box">
                        <div class="card text-center">
                            <div class="card-header">
                            Famous Quotes
                            </div>
                            <div class="card-body">
                            <h5 class="card-title">
                                <div id="text">
                                    <p>"{this.state.quote}"</p>
                                </div>
                            </h5>
                            <p class="card-text">
                                <div id="author">
                                    <p> - {this.state.author}</p>
                                </div>
                            </p>
                            <button id="new-quote" class="btn btn-success" onClick={this.fetchNewQuote}>Generate New Quote</button>
                            &nbsp;
                            <a class="btn btn-primary" href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${this.state.quote} - ${this.state.author}`} target="_blank" id="tweet-quote"> Tweet Quote</a>
                            </div>
                            <div class="card-footer text-muted">
                            This project was built as a part of freeCodeCamp's Front End Libraries Certification.
                            </div>
                        </div>                   
                    </wrapper>
                </div>                    
            </div>
            
        )
    }    
}

export default App;