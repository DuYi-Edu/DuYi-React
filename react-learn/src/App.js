import React, { useRef, useImperativeHandle } from 'react'

function Test(props, ref) {
    useImperativeHandle(ref, () => {
        //如果不给依赖项，则每次运行函数组件都会调用该方法
        //如果使用了依赖项，则第一次调用后，会进行缓存，只有依赖项发生变化时才会重新调用函数
        //相当于给 ref.current = 1
        return {
            method(){
                console.log("Test Component Called")
            }
        }
    }, [])
    return <h1>Test Component</h1>
}

const TestWrapper = React.forwardRef(Test)

// class Test extends React.Component {

//     method() {
//         console.log("Test method called");
//     }

//     render() {
//         return <h1>Test Component</h1>
//     }
// }

export default function App() {
    // const [, forceUpdate] = useState({})
    const testRef = useRef();
    return (
        <div>
            <TestWrapper ref={testRef} />
            <button onClick={() => {
                testRef.current.method();
                // console.log(testRef)
                // forceUpdate({})
            }}>点击调用Test组件的method方法</button>
        </div>
    )
}
