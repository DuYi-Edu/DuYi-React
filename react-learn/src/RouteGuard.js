import React, { Component } from 'react'
import { BrowserRouter as Router, withRouter } from "react-router-dom"

let prevLoaction, location, action, unBlock;

class _GuardHelper extends Component {

    componentDidMount() {
        //添加阻塞
        unBlock = this.props.history.block((newLocation, ac) => {
            prevLoaction = this.props.location;
            location = newLocation;
            action = ac;
            return "";
        });

        //添加一个监听器
        this.unListen = this.props.history.listen((location, action) => {
            if (this.props.onChange) {
                const prevLoaction = this.props.location;
                this.props.onChange(prevLoaction, location, action, this.unListen);
            }
        })
    }

    componentWillUnmount() {
        unBlock();//取消阻塞
        //卸载监听器
        this.unListen();
    }


    render() {
        return null;
    }
}

const GuardHelper = withRouter(_GuardHelper);

class RouteGuard extends Component {

    handleConfirm = (msg, commit) => {
        if (this.props.onBeforeChange) {
            this.props.onBeforeChange(prevLoaction, location, action, commit, unBlock);
        }
        else{
            commit(true);
        }
    }

    render() {
        return <Router getUserConfirmation={this.handleConfirm}>
            <GuardHelper onChange={this.props.onChange} />
            {this.props.children}
        </Router>;
    }
}

export default RouteGuard;
