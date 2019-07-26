import React from 'react'

class Comp1 extends React.Component {
    state = {}
    constructor(props) {
        super(props);
        console.log(4, "Comp1 Constructor")
    }

    static getDerivedStateFromProps(props, state) {
        console.log(5, "Comp1 getDerivedStateFromProps")
        return null;
    }

    componentDidMount() {
        console.log("b", "App componentDidMount")
    }

    render() {
        console.log(6, "Comp1 render");
        return (
            <h1>Comp1</h1>
        )
    }
}

export default class App extends React.Component {

    state = {}
    constructor(props) {
        super(props);
        console.log(1, "App Constructor")
    }

    static getDerivedStateFromProps(props, state) {
        console.log(2, "App getDerivedStateFromProps")
        return null;
    }

    componentDidMount() {
        console.log("a", "App componentDidMount")
    }
    

    render() {
        console.log(3, "App render");
        return (
            <div>
                <Comp1 />
            </div>
        )
    }
}
