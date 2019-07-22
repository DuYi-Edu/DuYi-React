import React from 'react'

class A extends React.Component {
    render() {
        return <h1 ref={this.props.abc}>
            组件A
        <span>{this.props.words}</span>
        </h1>
    }
}

const NewA = React.forwardRef((props, ref) => {
    return <A {...props} abc={ref} />
})

export default class App extends React.Component {

    ARef = React.createRef()

    componentDidMount() {
        console.log(this.ARef);
    }


    render() {
        return (
            <div>
                <NewA ref={this.ARef} words="asfsafasfasfs" />
                {/* this.ARef.current:  h1 */}
            </div>
        )
    }
}
