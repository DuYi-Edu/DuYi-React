import React, { Component } from 'react'

class CompA extends React.Component {

    state = {
        a: 123,
        b: "abc"
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("CompA componentDidUpdate")
    }
    

    render() {
        return (
            <div>
                <h1>{this.state.a}</h1>
                <CompB n={this.state.b} />
                <button onClick={() => {
                    this.setState({
                        a: 321,
                        b: "cba"
                    })
                }}>点击</button>
            </div>
        )
    }
}


function CompB(props) {
    return (
        <div>
            <h1 id="title">{props.n}</h1>
            <CompC n={props.n} />
        </div>
    )
}

class CompC extends React.Component {
    componentDidUpdate(prevProps, prevState) {
        console.log("CompC componentDidUpdate")
    }
    
    render() {
        var title = document.getElementById("title");
        if(title){
            console.log(title.innerHTML);
        }
        else{
            console.log(title)
        }
        return (
            <div>
                <h1>{this.props.n}</h1>
            </div>
        )
    }
}


export default class App extends Component {
    render() {
        return (
            <div>
                <CompA />
            </div>
        )
    }
}
