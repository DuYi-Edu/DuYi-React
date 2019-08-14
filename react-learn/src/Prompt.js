import { Component } from 'react'
import { withRouter } from "react-router-dom"

class Prompt extends Component {

    static defaultProps = {
        when: false, //当when为true的时候，添加阻塞
        message: "" //当阻塞时，跳转页面的提示消息
    }

    componentDidMount() {
        this.handleBlock();
    }

    componentDidUpdate(prevProps, prevState) {
        this.handleBlock();
    }


    handleBlock() {
        if (this.props.when) {
            //添加阻塞
            this.unBlock = this.props.history.block(this.props.message);
        }
        else {
            if (this.unBlock) {
                this.unBlock();
            }
        }
    }

    componentWillUnmount() {
        if (this.unBlock) {
            this.unBlock();
        }
    }

    render() {
        return null;
    }
}

export default withRouter(Prompt)