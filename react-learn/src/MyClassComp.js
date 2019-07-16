import React from 'react'

export default class MyClassComp extends React.Component {

    // constructor(props) {
    //     super(props); // this.props = props;
    //     console.log(props, this.props, props === this.props);
    // }

    /**
     * 该方法必须返回React元素
     */
    render() {
        if (this.props.obj) {
            return (
                <>
                    <p>
                        姓名：{this.props.obj.name}
                    </p>
                    <p>
                        年龄：{this.props.obj.age}
                    </p>
                </>
            );
        }
        else if (this.props.ui) {
            return (
                <div>
                    <h1>下面是传入的内容</h1>
                    {this.props.ui}
                </div>
            );
        }
        return <h1>类组件的内容，数字：{this.props.number}</h1>
    }
}