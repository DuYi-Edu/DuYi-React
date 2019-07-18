import React, { Component } from 'react'
import Modal from "./common/Modal"

export default class Test extends Component {

    state = {
        showModal: false
    }

    showModal = () => {
        this.setState({
            showModal: true
        })
    }

    hideModal = () => {
        this.setState({
            showModal: false
        })
    }

    render() {
        return (
            <div>
                <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3159856553,1527464792&fm=27&gp=0.jpg" alt="" />
                {
                    this.state.showModal ?
                        (<Modal onClose={this.hideModal}>
                            <div style={{
                                background:"#fff"
                            }}>
                                <h1>asdfasfasfasfasdfasdf</h1>
                                <button onClick={this.hideModal}>关闭朦层</button>
                            </div>
                        </Modal>) :
                        null
                }
                <button onClick={this.showModal}>显示朦层</button>
            </div>
        )
    }
}
