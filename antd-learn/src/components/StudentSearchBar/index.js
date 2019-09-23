import React, { Component } from 'react'
import { Input, Row, Col, Radio, Button } from "antd"

const Search = Input.Search;
export default class StudentSearchBar extends Component {

    constructor(props) {
        super(props);
        const def = {
            key: "",
            sex: -1
        };
        this.state = Object.assign({}, def, this.props.defaultValue);
    }

    handleSearch = () => {
        //抛出事件
        if (this.props.onSearch) {
            this.props.onSearch(this.state);
        }
    }

    render() {
        return (
            <div style={{
                marginBottom:"20px"
            }}>
                <Row gutter={10} type="flex" justify="start">
                    <Col>
                        <Search onSearch={this.handleSearch} addonBefore="关键字" value={this.state.key} onChange={e => this.setState({ key: e.target.value })} />
                    </Col>
                    <Col>
                        <Radio.Group onChange={(e) => {
                            this.setState({
                                sex: e.target.value
                            })
                        }} value={this.state.sex}>
                            <Radio.Button value={-1}>不限</Radio.Button>
                            <Radio.Button value={0}>男</Radio.Button>
                            <Radio.Button value={1}>女</Radio.Button>
                        </Radio.Group>
                    </Col>
                    <Button type="primary" onClick={this.handleSearch}>查询</Button>
                </Row>
            </div>
        )
    }
}
