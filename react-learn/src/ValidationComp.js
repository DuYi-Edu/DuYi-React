import React, { Component } from 'react'
import PropTypes from "prop-types";

export class A {

}

export class B extends A {

}

export default class ValidationComp extends Component {
    //先混合属性
    static defaultProps = {
        b: false
    }

    //再调用相应的函数进行验证
    static propTypes = {
        a: PropTypes.number.isRequired,  //a属性必须是一个数字类型,并且必填
        b: PropTypes.bool.isRequired, //b必须是一个bool属性,并且必填
        onClick: PropTypes.func, //onClick必须是一个函数
        c: PropTypes.any, //1. 可以设置必填   2. 阵型保持整齐（所有属性都在该对象中）
        d: PropTypes.node.isRequired, //d必填，而且必须是一个可以渲染的内容，字符串、数字、React元素
        e: PropTypes.element, //e必须是一个React元素
        F: PropTypes.elementType, //F必须是一个组件类型
        g: PropTypes.instanceOf(A), //g必须是A的实例
        sex: PropTypes.oneOf(["男", "女"]), //属性必须是数组当中的一个
        h: PropTypes.arrayOf(PropTypes.number), //数组的每一项必须满足类型要求
        i: PropTypes.objectOf(PropTypes.number), //每一个属性必须满足类型要求
        j: PropTypes.shape({ //属性必须满足该对象的要求
            name: PropTypes.string.isRequired, //name必须是一个字符串，必填
            age: PropTypes.number, //age必须是一个数字
            address: PropTypes.shape({
                province: PropTypes.string,
                city: PropTypes.string
            })
        }),
        k: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
            age: PropTypes.number.isRequired
        })),
        m: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        score: function (props, propName, componentName) {
            console.log(props, propName, componentName);
            const val = props[propName];
            //必填
            if (val === undefined || val === null) {
                return new Error(`invalid prop ${propName} in ${componentName}，${propName} is Required`);
            }
            //该属性必须是一个数字
            if (typeof val !== "number") {
                return new Error(`invalid prop ${propName} in ${componentName}，${propName} is not a number`);
            }
            const err = PropTypes.number.isRequired(props, propName, componentName);
            if(err){
                return err;
            }
            //并且取值范围是0~100
            if (val < 0 || val > 100) {
                return new Error(`invalid prop ${propName} in ${componentName}，${propName} must is between 0 and 100`);
            }
        }
    }

    render() {
        const F = this.props.F;
        return (
            <div>
                {this.props.a}
                <div>
                    {this.props.d}
                    <F />
                </div>
            </div>
        )
    }
}
