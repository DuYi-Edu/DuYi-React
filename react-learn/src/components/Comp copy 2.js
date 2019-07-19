import React, { Component } from 'react'

export default class Comp extends Component {

    constructor(props){
        super(props);
        this.txt = React.createRef();
    }

    handleClick = () => {
        this.txt.current.focus();
    }

    render() {
        return (
            <div>
                <input ref={this.txt} type="text" />
                <button onClick={this.handleClick}>聚焦</button>
            </div>
        )
    }
}
